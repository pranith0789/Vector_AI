import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const WeatherNode = ({ id }) => {
  const [location, setLocation] = useState('New York');
  const removeNode= useStore(state => state.removeNode)
  return (
    <BaseNode
      id={id}
      title="Weather"
      description="Integrate up-to-date weather details into your workflow using location-based queries."
      handles={[
        { type: 'source', position: Position.Right, id: 'forecast' },
      ]}
      onDelete={() => removeNode(id)}
    >
      <label className="block text-sm font-medium text-gray-700">
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a city"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
        />
      </label>
    </BaseNode>
  );
};
