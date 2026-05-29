// Fuzzy matching for node labels the LLM proposes but gets slightly wrong
// (e.g. "PropertyBase Get numProperties" when the real node is
// "PropertyGroup Get numProperties"). Tokenization splits camelCase/Pascal so
// class names share their stem ("Property" in PropertyBase / PropertyGroup),
// which lets the correct class win instead of an unrelated one.

export function tokenizeLabel(s) {
  return String(s)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase / Pascal boundary
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

// Rank candidate labels against a requested label by shared-token overlap.
// Tiebreaker: token-count closeness to the request (so "PropertyGroup Get
// numProperties" beats the longer "MaskPropertyGroup Get numProperties" when
// both share the same tokens). Returns { reqSize, scored } sorted best-first;
// each entry has { label, overlap, lenDiff }.
export function rankLabels(requested, allLabels) {
  const req = new Set(tokenizeLabel(requested));
  const scored = allLabels
    .map((label) => {
      const toks = tokenizeLabel(label);
      let overlap = 0;
      for (const t of toks) if (req.has(t)) overlap += 1;
      return { label, overlap, lenDiff: Math.abs(toks.length - req.size) };
    })
    .sort((a, b) => b.overlap - a.overlap || a.lenDiff - b.lenDiff);
  return { reqSize: req.size, scored };
}

// Best-effort single suggestion (for the "did you mean?" report). Null when
// nothing shares a token.
export function suggestLabel(requested, allLabels) {
  if (!requested) return null;
  const { scored } = rankLabels(requested, allLabels);
  return scored.length && scored[0].overlap > 0 ? scored[0].label : null;
}

// Decide whether to AUTO-SUBSTITUTE a wrong label rather than drop the node.
// Conservative: the top candidate must be a unique winner (strictly more
// overlap than the runner-up) and cover nearly all requested tokens (allowing
// just the class word to differ). Returns the label to use, or null to reject.
export function autoResolveLabel(requested, allLabels) {
  if (!requested) return null;
  const { reqSize, scored } = rankLabels(requested, allLabels);
  if (!scored.length) return null;
  const best = scored[0];
  const second = scored[1];
  const coversEnough = best.overlap >= Math.max(2, reqSize - 1);
  // Unique winner: strictly ahead of the runner-up on overlap, or tied on
  // overlap but a closer token-count match (the precise class vs. a longer one).
  const uniqueWinner =
    !second ||
    best.overlap > second.overlap ||
    (best.overlap === second.overlap && best.lenDiff < second.lenDiff);
  return best.overlap > 0 && coversEnough && uniqueWinner ? best.label : null;
}
