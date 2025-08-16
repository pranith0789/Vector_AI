import { Handle } from 'reactflow';

export const BaseNode = ({ id, title, children, handles = [] }) => {
  return (
    <div className="bg-white border-4 border-blue-500 rounded-lg shadow-md p-4 mb-4">
      {/* Title */}
      <div>
        <strong>{title}</strong>
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
