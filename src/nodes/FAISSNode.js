import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const FAISSNode = ({ id }) => {
  const [indexName, setIndexName] = useState('');
  const removeNode = useStore(state => state.removeNode);

  return (
    <BaseNode
      id={id}
      title="Vector DB"
      description="Stores and retrieves vector embeddings for semantic search and retrieval."
      handles={[
        { type: 'target', position: Position.Left, id: 'docs' },
        { type: 'source', position: Position.Right, id: 'retriever' },
      ]}
      onDelete={() => removeNode(id)}
    >
      <div className="mb-2">
        <label className="block text-xs font-semibold text-gray-600 mb-1">Upload File:</label>
        <input
          type='file'
          className='block w-full text-xs text-gray-700 border border-gray-300 rounded-md p-1 mb-2'
          onChange={e => { const file = e.target.files[0]; }}
        />
      </div>
      <div className="mb-2">
        <label className="block text-xs font-semibold text-gray-600 mb-1">Query:</label>
        <input
          type="text"
          value={indexName}
          onChange={(e) => setIndexName(e.target.value)}
          placeholder="Search vector..."
          className="block w-full border border-gray-300 rounded-md shadow-sm text-xs p-1"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Select DB:</label>
        <select className="block w-full border border-gray-300 rounded-md p-1 text-xs">
          <option value="Melvis">MELVIS</option>
          <option value="FAISS">FAISS</option>
          <option value="Pinecone">Pinecone</option>
        </select>
      </div>
    </BaseNode>
  );
};