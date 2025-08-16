// /frontend/src/nodes/GoogleCalendarNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';

export const GoogleCalendarNode = ({ id }) => {
  const [calendarId, setCalendarId] = useState('primary');

  return (
    <BaseNode
      id={id}
      title="Google Calendar"
      handles={[
        { type: 'target', position: Position.Left, id: 'eventInput' },
        { type: 'source', position: Position.Right, id: 'eventOutput' },
      ]}
    >
      <label className="block text-sm font-medium text-gray-700">
        Calendar ID:
        <input
          type="text"
          value={calendarId}
          onChange={(e) => setCalendarId(e.target.value)}
          placeholder="primary"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
