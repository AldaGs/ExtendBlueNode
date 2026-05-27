import { useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import SmartInput from './SmartInput';
import './EBNNode.css';
import './SmartInput.css';
import './MathNode.css';

const THEME = '#2f6e7c';

const OPS = [
  { id: 'add', label: 'Add (+)' },
  { id: 'sub', label: 'Subtract (−)' },
  { id: 'mul', label: 'Multiply (×)' },
  { id: 'div', label: 'Divide (÷)' },
];

const OP_TITLE = {
  add: 'Add',
  sub: 'Subtract',
  mul: 'Multiply',
  div: 'Divide',
};

export default function VectorMathNode({ id, data, selected }) {
  const { setNodes } = useReactFlow();
  const op = data?.op ?? 'mul';

  const onOpChange = useCallback(
    (e) => {
      const next = e.target.value;
      setNodes((nds) =>
        nds.map((n) => (n.id !== id ? n : { ...n, data: { ...n.data, op: next } })),
      );
    },
    [setNodes, id],
  );

  return (
    <div className={`ebn-node ebn-math${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: THEME }}>
        <span className="ebn-node__title">Vector · {OP_TITLE[op]}</span>
      </div>
      <div className="ebn-node__body ebn-math__body">
        <div className="ebn-math__row">
          <span className="ebn-math__row-label">Op</span>
          <select
            className="ebn-math__select"
            value={op}
            onChange={onOpChange}
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {OPS.map((o) => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </select>
        </div>
        {/* A and B accept arrays OR scalars at runtime; we use 'expr' so
            the user can type either `2` or `[2, 2]` inline without quotes. */}
        <SmartInput nodeId={id} handleId="a" label="A" type="expr" value={data?.values?.a} placeholder="2 or [2,2]" />
        <SmartInput nodeId={id} handleId="b" label="B" type="expr" value={data?.values?.b} placeholder="2 or [2,2]" />

        <div className="ebn-node__port ebn-node__port--out">
          <span className="ebn-node__port-label">Result</span>
          <Handle
            type="source"
            position={Position.Right}
            id="value"
            className="ebn-node__handle"
          />
        </div>
      </div>
    </div>
  );
}
