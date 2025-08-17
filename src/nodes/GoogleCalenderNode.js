import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const GoogleCalenderNode = ({ id }) => {
  const [calendarId, setCalendarId] = useState('');
  const removeNode = useStore(state => state.removeNode)
  return (
    <BaseNode
      id={id}
      title="Google Calendar"
      description="Integrates with Google Calendar to read or write events."
      handles={[
        { type: 'target', position: Position.Left, id: 'eventInput' },
        { type: 'source', position: Position.Right, id: 'eventOutput' },
      ]}
      onDelete={() => removeNode(id)}
    >
      <label className="block text-sm font-medium text-gray-700">
        Date:
        <input
          type="date"
          value={calendarId}
          onChange={(e) => setCalendarId(e.target.value)}
          placeholder="Select Date..."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
