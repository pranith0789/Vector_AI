import { Position } from 'reactflow';
import { BaseNode } from './Basenode';
import { useState } from 'react';
import { useStore } from '../store';

export const LLMNode = ({ id }) => {
  const[prompt,SetPrompt] = useState("")
  const[value, setValue] = useState("")
  const removeNode = useStore(state => state.removeNode)
  return (
    <BaseNode
      id={id}
      title="LLM"
      description="Connects to a large language model for text generation or processing."
      handles={[
        { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: 'response' },
      ]}
      onDelete={() => removeNode(id)}
    >
      <span className='text-sm font-semibold'>Prompt:</span>
      <input
      type='text'
      value={prompt}
      onChange={(e)=>SetPrompt(e.target.value)}
      placeholder='Enter your Query...'
      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1'>
      </input>
      <span className='text-sm font-semibold'>Model:</span>
      <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-1 italic"
      >
        <option value={"GPT 5"}>GPT 5</option>
        <option value={"Gemini 2.5"}>Gemini 2.5 flash</option>
        <option value={"Grok"}>GROK 3</option>
      </select>
    </BaseNode>
  );
};

