// /frontend/src/nodes/SummarizerNode.js
import { Position } from 'reactflow';
import { BaseNode } from './Basenode';

export const SummarizerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Summarizer"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'summary' },
      ]}
    >
      <span className="text-sm text-gray-600">Summarize incoming text using LLM.</span>
    </BaseNode>
  );
};
