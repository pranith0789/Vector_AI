// /frontend/src/nodes/FAISSNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';

export const FAISSNode = ({ id }) => {
  const [indexName, setIndexName] = useState('default_index');

  return (
    <BaseNode
      id={id}
      title="FAISS Vector Store"
      handles={[
        { type: 'target', position: Position.Left, id: 'docs' },
        { type: 'source', position: Position.Right, id: 'retriever' },
      ]}
    >
      <label className="block text-sm font-medium text-gray-700">
        Index Name:
        <input
          type="text"
          value={indexName}
          onChange={(e) => setIndexName(e.target.value)}
          placeholder="default_index"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
