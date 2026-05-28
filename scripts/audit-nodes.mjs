// Node coverage audit + catalog generator.
//
//   node scripts/audit-nodes.mjs           # print audit report
//   node scripts/audit-nodes.mjs --catalog # also (re)write docs/NODE_CATALOG.md
//
// Spawns every registered node via its factory, classifies it (exec / data /
// both) from its declared handles, then checks whether the compiler has a
// matching emitter. A node is BROKEN when:
//   - it has exec handles but the exec emitter is the "unknown label" stub, or
//   - it is data-only (no exec) but no data output resolves to an expression.

import { writeFileSync } from 'node:fs';
import { flattenLibrary } from '../src/nodeLibrary.js';
import { emitterFor, resolveExpressionFor } from '../src/compiler/emitters.js';

const wantCatalog = process.argv.includes('--catalog');

// Minimal stub ctx so emitters/resolvers can run without a real graph.
const ctx = {
  globals: [],
  varName: (n) => `var_${n.id}`,
  globalName: (g) => `global_${g?.name || 'x'}`,
  resolveInput: () => '0',
  sourceOf: () => null,
  walkBranch: () => [],
  useHelper: () => {},
  sanitizeVarName: (x) => x,
};

// Labels handled by a hoisting pass in astCompiler.js rather than the per-node
// exec emitter registry. They legitimately have no entry in emitterFor, so the
// "unknown label" stub is expected — not a real break.
const HOISTED_LABELS = new Set(['Define Function']);

function execHandles(node) {
  const ins = node.data?.inputs || [];
  const outs = node.data?.outputs || [];
  const hasExecIn = ins.some((p) => p.type === 'exec' || p.id === 'exec_in');
  const hasExecOut = outs.some((p) => p.id?.startsWith('exec'));
  return { hasExecIn, hasExecOut };
}

function dataOutputs(node) {
  return (node.data?.outputs || []).filter((p) => !p.id?.startsWith('exec'));
}

function isExecBroken(node) {
  let stmts;
  try {
    stmts = emitterFor(node)(node, ctx) || [];
  } catch {
    return false; // threw on stub ctx — has a real emitter, just needs inputs
  }
  return stmts.some(
    (s) =>
      s?.kind === 'comment' &&
      /unknown ebnNode label|no emitter for node type/.test(s.text || ''),
  );
}

function dataResolves(node) {
  const outs = dataOutputs(node);
  if (!outs.length) return true; // nothing to resolve
  return outs.some((p) => {
    try {
      return resolveExpressionFor(node, ctx, p.id) != null;
    } catch {
      return true; // threw with stub ctx => emitter exists
    }
  });
}

const rows = [];
const broken = [];

for (const tmpl of flattenLibrary()) {
  let node;
  try {
    node = tmpl.factory({ x: 0, y: 0 });
  } catch {
    continue;
  }
  const label = node.data?.label || tmpl.label;
  const { hasExecIn, hasExecOut } = execHandles(node);
  const isExec = hasExecIn || hasExecOut;
  const dOuts = dataOutputs(node);
  const role = isExec ? (dOuts.length ? 'exec+data' : 'exec') : (dOuts.length ? 'data' : 'misc');

  let status = 'ok';
  const reasons = [];
  if (isExec && !HOISTED_LABELS.has(label) && isExecBroken(node)) {
    status = 'BROKEN';
    reasons.push('no exec emitter');
  }
  if (!isExec && !dataResolves(node)) {
    status = 'BROKEN';
    reasons.push('no data emitter');
  }

  const ins = (node.data?.inputs || []).map((p) => p.id).join(', ') || '—';
  const outs = (node.data?.outputs || []).map((p) => p.id).join(', ') || '—';
  rows.push({ category: tmpl.category, label, role, status, ins, outs });
  if (status === 'BROKEN') broken.push({ label, category: tmpl.category, reasons });
}

// ----- report -----
console.log(`\nAudited ${rows.length} nodes.`);
console.log(`OK: ${rows.length - broken.length}   BROKEN: ${broken.length}\n`);
if (broken.length) {
  console.log('BROKEN nodes (no matching emitter):');
  for (const b of broken) console.log(`  ✗ ${b.label}  [${b.category}]  — ${b.reasons.join(', ')}`);
  console.log('');
}

// ----- optional catalog -----
if (wantCatalog) {
  // The 1200+ "After Effects DOM" nodes are auto-generated from the AE
  // typings by scripts/generate-ae-nodes.mjs — they're self-documenting and
  // would drown the catalog. List only the hand-authored nodes here, with a
  // one-line count of the generated set.
  const isAE = (cat) => cat.startsWith('After Effects DOM');
  const aeCount = rows.filter((r) => isAE(r.category)).length;
  const handRows = rows.filter((r) => !isAE(r.category));

  const byCat = new Map();
  for (const r of handRows) {
    if (!byCat.has(r.category)) byCat.set(r.category, []);
    byCat.get(r.category).push(r);
  }
  let md = '# EBN Node Catalog (auto-generated)\n\n';
  md += `> Regenerate with \`npx vite-node scripts/audit-nodes.mjs --catalog\`.\n`;
  md += `> ${rows.length} nodes total, ${broken.length} broken. Hand-authored: ${handRows.length}; auto-generated After Effects DOM: ${aeCount} (see scripts/generate-ae-nodes.mjs).\n\n`;
  for (const [cat, items] of [...byCat.entries()].sort()) {
    md += `## ${cat}\n\n`;
    md += '| Node | Role | Status | Inputs | Outputs |\n|---|---|---|---|---|\n';
    for (const r of items.sort((a, b) => a.label.localeCompare(b.label))) {
      const st = r.status === 'ok' ? '✅' : '❌';
      md += `| ${r.label} | ${r.role} | ${st} | ${r.ins} | ${r.outs} |\n`;
    }
    md += '\n';
  }
  writeFileSync(new URL('../docs/NODE_CATALOG.md', import.meta.url), md);
  console.log('Wrote docs/NODE_CATALOG.md');
}
