import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const WebhookListenerNode = ({ id }) => {
  const [endpoint, setEndpoint] = useState('/webhook');
  const removeNode = useStore(state=> state.removeNode)
  return (
    <BaseNode
      id={id}
      title="Webhook Listener"
      description="Triggers the workflow from external webhooks or events."
      handles={[
        { type: 'source', position: Position.Right, id: 'event' },
      ]}
      onDelete={() => removeNode(id)}
    >
      <label className="block text-sm font-medium text-gray-700">
        Endpoint:
        <input
          type="text"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder="/webhook"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
