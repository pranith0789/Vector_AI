import { Handle } from 'reactflow';
import { CircleX } from 'lucide-react';

export const BaseNode = ({ id, title,description,children, handles = [], onDelete }) => {
  return (
    <div className="bg-white border-4 border-blue-500 rounded-lg shadow-md p-4 mb-4">
      {onDelete && (
        <button  onClick={onDelete} className='absolute top-1 right-1 bg-transparent border-none text-gray-500 font-bold text-lg cursor-pointer z-10'>
          <CircleX/>
        </button>
      )}
      {/* Title */}
      <div>
        <strong>{title}</strong>
        {description && (
          <div className="text-xs text-gray-500 mt-1">{description}</div>
        )}
      </div>

      {/* Fields / Content */}
      <div className="mt-2">
        {children}
      </div>

      {/* Handles */}
      {handles.map((h, idx) => (
        <Handle
          key={idx}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={h.style || {}}
        />
      ))}
    </div>
  );
};
