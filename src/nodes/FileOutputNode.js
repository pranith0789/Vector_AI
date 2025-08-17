import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const FileOutputNode = ({ id }) => {
  const [fileName, setFileName] = useState('output.txt');
  const removeNode = useStore(state => state.removeNode)
  return (
    <BaseNode
      id={id}
      title="File Output"
      description="Saves workflow results to a downloadable file."
      handles={[
        { type: 'target', position: Position.Left, id: 'content' },
      ]}
      onDelete={() => removeNode(id)}
    >
      <label className="block text-sm font-medium text-gray-700">
        File Name:
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="output.txt"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
