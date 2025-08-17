import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const FAQNode = ({ id }) => {
  const [collection, setCollection] = useState('');
  const removeNode = useStore(state => state.removeNode)
  return (
    <BaseNode
      id={id}
      title="FAQ"
      description="FAQ storage and lookup for your workflow."
      handles={[
        { type: 'target', position: Position.Left, id: 'docs' },
        { type: 'source', position: Position.Right, id: 'retriever' },
      ]}
      onDelete={() => removeNode(id)
      }
    >
      <label className="block text-sm font-medium text-gray-700">
        Collection:
        <input
          type="text"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
          placeholder="Enter your question"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
