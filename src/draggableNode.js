// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{
          cursor: 'grab',
          minWidth: '100px',      // Minimum width, but can grow
          minHeight: '60px',      // Minimum height, but can grow
          display: 'flex',
          alignItems: 'center',
          borderRadius: '12px',
          background: '#fff',
          color: '#111',
          justifyContent: 'center',
          flexDirection: 'column',
          boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
          border: '1.5px solid #e3e3e3',
          transition: 'box-shadow 0.2s, transform 0.2s',
          padding: '12px 18px',   // Add padding for content
          width: 'auto',          // Let width grow with content
          height: 'auto',         // Let height grow with content
        }}
        onMouseOver={e => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(33, 150, 243, 0.15)';
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
          e.currentTarget.style.transform = 'none';
        }}
        draggable
      >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <span>{label}</span>
          </div>
      </div>
    );
  };
  