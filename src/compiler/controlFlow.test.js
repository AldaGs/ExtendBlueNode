import { describe, expect, it } from 'vitest';
import { compileToExtendScript } from '../astCompiler';

const exec = { type: 'exec' };

function start(id = 's') {
  return {
    id, type: 'ebnNode', position: { x: 0, y: 0 },
    data: { label: 'Start', inputs: [], outputs: [{ id: 'exec_out', label: 'Execution' }] },
  };
}

function forLoop(id, values = {}) {
  return {
    id, type: 'ebnNode', position: { x: 0, y: 0 },
    data: {
      label: 'For Loop',
      inputs: [
        { id: 'exec_in', label: 'Execution', ...exec },
        { id: 'start', label: 'Start', type: 'number' },
        { id: 'end', label: 'End', type: 'number' },
        { id: 'step', label: 'Step', type: 'number' },
      ],
      outputs: [
        { id: 'exec_body', label: 'Body', ...exec },
        { id: 'index', label: 'Index' },
        { id: 'exec_done', label: 'Done', ...exec },
      ],
      values: { start: 0, end: 3, step: 1, ...values },
    },
  };
}

// Minimal addComp-like sink that reads a `name` input and has exec.
function addComp(id) {
  return {
    id, type: 'ebnNode', position: { x: 0, y: 0 },
    data: {
      label: 'ItemCollection addComp',
      inputs: [
        { id: 'exec_in', label: 'Execution', ...exec },
        { id: 'target', label: 'ItemCollection', type: 'expr' },
        { id: 'name', label: 'name', type: 'text' },
        { id: 'width', label: 'width', type: 'number' },
        { id: 'height', label: 'height', type: 'number' },
        { id: 'pixelAspect', label: 'pixelAspect', type: 'number' },
        { id: 'duration', label: 'duration', type: 'number' },
        { id: 'frameRate', label: 'frameRate', type: 'number' },
      ],
      outputs: [{ id: 'exec_out', label: 'Execution' }, { id: 'result', label: 'Result' }],
      values: { target: 'app.project.items', name: '', width: 1920, height: 1080, pixelAspect: 1, duration: 10, frameRate: 30 },
    },
  };
}

function concat(id, a = 'Shot_') {
  return {
    id, type: 'ebnNode', position: { x: 0, y: 0 },
    data: {
      label: 'Concatenate',
      inputs: [
        { id: 'a', label: 'A', type: 'text' },
        { id: 'b', label: 'B', type: 'text' },
      ],
      outputs: [{ id: 'result', label: 'Result' }],
      values: { a, b: '' },
    },
  };
}

const eExec = (id, s, t) => ({ id, source: s, sourceHandle: 'exec_out', target: t, targetHandle: 'exec_in' });
const eData = (id, s, sh, t, th) => ({ id, source: s, sourceHandle: sh, target: t, targetHandle: th });

describe('control-flow + naming nodes', () => {
  it('For Loop emits a counted loop and exposes its index', () => {
    const out = compileToExtendScript(
      [start('s'), forLoop('f'), addComp('c'), concat('cat')],
      [
        eExec('e1', 's', 'f'),
        { id: 'eb', source: 'f', sourceHandle: 'exec_body', target: 'c', targetHandle: 'exec_in' },
        eData('dn', 'cat', 'result', 'c', 'name'),
        eData('di', 'f', 'index', 'cat', 'b'),
      ],
    );
    expect(out).toMatch(/for \(var \w+_i = 0; \w+_i < 3; \w+_i \+= 1\)/);
    // name = ("Shot_" + <indexVar>)
    expect(out).toMatch(/addComp\(\("Shot_" \+ \w+_i\)/);
    expect(out).not.toMatch(/unknown ebnNode label/);
  });

  it('Random Integer emits an inclusive ranged int', () => {
    const ri = {
      id: 'r', type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Random Integer',
        inputs: [
          { id: 'min', label: 'Min', type: 'number' },
          { id: 'max', label: 'Max', type: 'number' },
        ],
        outputs: [{ id: 'result', label: 'Result' }],
        values: { min: 1, max: 10 },
      },
    };
    const out = compileToExtendScript(
      [start('s'), addComp('c'), ri],
      [
        eExec('e1', 's', 'c'),
        eData('dr', 'r', 'result', 'c', 'width'),
      ],
    );
    expect(out).toContain('Math.floor(Math.random() * ((10) - (1) + 1)) + (1)');
  });

  it('While Loop emits a while statement', () => {
    const wl = {
      id: 'w', type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'While Loop',
        inputs: [
          { id: 'exec_in', label: 'Execution', ...exec },
          { id: 'cond', label: 'Condition', type: 'expr' },
        ],
        outputs: [
          { id: 'exec_body', label: 'Body', ...exec },
          { id: 'exec_done', label: 'Done', ...exec },
        ],
        values: { cond: 'false' },
      },
    };
    const out = compileToExtendScript([start('s'), wl], [eExec('e1', 's', 'w')]);
    expect(out).toMatch(/while \(false\)/);
    expect(out).not.toMatch(/unknown ebnNode label/);
  });
});
