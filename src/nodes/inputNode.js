// import { useState, useEffect, useRef } from 'react';
// import { Position } from 'reactflow';
// import { BaseNode } from './Basenode';

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
//   const [inputType, setInputType] = useState(data?.inputType || 'Text');

//   return (
//     <BaseNode
//       id={id}
//       title="Input"
//       handles={[
//         { type: 'source', position: Position.Right, id: 'value' },
//       ]}
//     >
//       {/* Name Field */}
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Name:
//         <input
//           type="text"
//           value={currName}
//           onChange={(e) => setCurrName(e.target.value)}
//           className="mt-1 block w-auto border border-gray-300 rounded-md shadow-sm text-sm p-1"
//         />
//       </label>

//       {/* Type Field */}
//       <label className="block text-sm font-medium text-gray-700">
//         Type:
//         <select
//           value={inputType}
//           onChange={(e) => setInputType(e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1"
//         >
//           <option value="Text">Text</option>
//           <option value="File">File</option>
//         </select>
//       </label>
//     </BaseNode>
//   );
// };


import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';

export const InputNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  // Auto-resize textarea width and height as user types
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      textareaRef.current.style.width = 'auto';
      textareaRef.current.style.width = Math.max(200, textareaRef.current.scrollWidth) + 'px';
    }
  }, [currText]);

  // Extract unique variable names in {{variable}} format
  const variablePattern = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const variables = Array.from(
    new Set(
      [...currText.matchAll(variablePattern)].map(match => match[1])
    )
  );

  // Build handles: left for each variable, right for output
  const handles = [
    ...variables.map((v, idx) => ({
      type: 'target',
      position: Position.Left,
      id: `var-${v}`,
      style: { top: `${60 + idx * 32}px` }, // space handles vertically
    })),
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={handles}
    >
      <label className="block text-sm font-medium text-gray-700">
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          className="mt-1 block border border-gray-300 rounded-md shadow-sm text-sm p-1 resize-none"
          style={{ minWidth: 200, minHeight: 40, overflow: 'hidden' }}
        />
      </label>
    </BaseNode>
  );
};