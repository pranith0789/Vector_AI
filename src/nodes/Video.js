import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';
import { useState, useRef, useEffect } from 'react';
import { Fullscreen } from 'lucide-react';

export const VideoNode = ({ id }) => {
  const [currText, setCurrText] = useState("");
  const textarearef = useRef(null);
  const removeNode = useStore(state => state.removeNode);

  useEffect(() => {
    if (textarearef.current) {
      textarearef.current.style.height = "auto";
      textarearef.current.style.width = "auto";
      textarearef.current.style.height = textarearef.current.scrollHeight + "px";
      textarearef.current.style.width = Math.max(200, textarearef.current.scrollWidth) + "px";
    }
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Directora"
      description="AI-powered video editing: upload a file and describe your edit."
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'summary' },
      ]}
      onDelete={() => removeNode(id)}
    >
      <div className="mb-2">
        <label className="block text-sm font-semibold text-gray-600 mb-1">File:</label>
        <input
          type='file'
          className='block w-full text-xs text-gray-700 border border-gray-300 rounded-md p-1 mb-2'
          onChange={e => { const file = e.target.files[0]; }}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-semibold text-gray-600 mb-1">Text:</label>
        <textarea
          ref={textarearef}
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          className='block border border-gray-300 rounded-md shadow-sm p-1 resize-none text-xs w-full'
          style={{
            minWidth: 300,
            minHeight: 40,
            maxWidth: Fullscreen,
            overflow: 'hidden',
            whiteSpace: 'pre-wrap',
            display: 'inline-block',
          }}
          placeholder="How can I help edit your video? (e.g., 'Highlight all scenes with dogs')"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">Model:</label>
        <select className="block w-full border border-gray-300 rounded-md p-1 text-xs">
          <option value="VEO 3">VEO 3</option>
          <option value="SORA">SORA</option>
          <option value="PIKA">PIKA</option>
        </select>
      </div>
    </BaseNode>
  );
};