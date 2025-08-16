import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';

export const ApiCallNode = ({ id }) => {
  const [url, setUrl] = useState('');
  const [apiKey, setApiKey] = useState('');

  return (
    <BaseNode
      id={id}
      title="API Call"
      handles={[
        { type: 'target', position: Position.Left, id: 'request' },
        { type: 'source', position: Position.Right, id: 'response' },
      ]}
    >
      {/* URL Field */}
      <label className="block text-sm font-medium text-gray-700 mb-2">
        URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com/endpoint"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>

      {/* API Key Field */}
      <label className="block text-sm font-medium text-gray-700">
        API Key:
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter API Key"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
