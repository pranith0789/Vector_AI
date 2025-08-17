import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');
  const removeNode = useStore(state => state.removeNode)
  return (
    <BaseNode
      id={id}
      title="Output"
      description="Displays or exports the final output of the workflow."
      handles={[
        { type: 'target', position: Position.Left, id: 'value' },
      ]}
      onDelete={()=> removeNode(id)}
    >
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Type:
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};

