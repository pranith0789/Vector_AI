// /frontend/src/nodes/MelvisNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';

export const MelvisNode = ({ id }) => {
  const [collection, setCollection] = useState('default_collection');

  return (
    <BaseNode
      id={id}
      title="MELVIS Vector Store"
      handles={[
        { type: 'target', position: Position.Left, id: 'docs' },
        { type: 'source', position: Position.Right, id: 'retriever' },
      ]}
    >
      <label className="block text-sm font-medium text-gray-700">
        Collection:
        <input
          type="text"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
          placeholder="default_collection"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
