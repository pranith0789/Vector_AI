import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const removeNode = useStore(state => state.removeNode)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      textareaRef.current.style.width = 'auto';
      textareaRef.current.style.width = Math.max(200, textareaRef.current.scrollWidth) + 'px';
    }
  }, [currText]);

  const variablePattern = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const variables = Array.from(
    new Set(
      [...currText.matchAll(variablePattern)].map(match => match[1])
    )
  );

  const handles = [
    ...variables.map((v, idx) => ({
      type: 'target',
      position: Position.Left,
      id: `var-${v}`,
      style: { top: `${60 + idx * 32}px` }, 
    })),
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <BaseNode
      id={id}
      title="Text"
      description="Provides static or templated text, supporting variables for dynamic content."
      handles={handles}
      onDelete={()=> removeNode(id)
      }
    >
      <label className="block text-sm font-medium text-gray-700">
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          className="mt-1 border block border-gray-300 rounded-md shadow-sm text-sm p-1 resize-none"
          style={{ minWidth: 200, minHeight: 40,maxWidth:500, overflow: 'hidden', whiteSpace: 'pre-wrap'}}
        />
      </label>
    </BaseNode>
  );
};

