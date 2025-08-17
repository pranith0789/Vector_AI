import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');
  const removeNode = useStore(state => state.removeNode)
  return (
    <BaseNode
      id={id}
      title="Input"
      description="Entry point for user or external data into the workflow."
      handles={[
        { type: 'source', position: Position.Right, id: 'value' },
      ]}
      onDelete={() => removeNode(id)}
    >

      <label className="block text-sm font-medium text-gray-700 mb-2">
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="mt-1 block w-auto border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>

   
      <label className="block text-sm font-medium text-gray-700">
        Type:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};