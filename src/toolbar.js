// // toolbar.js

// import { DraggableNode } from './draggableNode';

// export const PipelineToolbar = () => {

//     return (
//         <div style={{ padding: '10px' }}>
//             <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                 <DraggableNode type='customInput' label='Input' />
//                 <DraggableNode type='llm' label='LLM' />
//                 <DraggableNode type='customOutput' label='Output' />
//                 <DraggableNode type='text' label='Text' />
//             </div>
//         </div>
//     );
// };


import React, {useState} from 'react'
import {DraggableNode} from './draggableNode'
import {
    FileInput,                // customInput: InputNode
    Bot,                 // llm: LLMNode
    SquareTerminal,      // customOutput: OutputNode
    FileText,            // text: TextNode
    Globe,               // API: ApiCallNode
    Database,            // faiss: FAISSNode
    Network,             // melvis: MelvisNode
    FileOutput,          // fileoutput: FileOutputNode (fallback to FileDown)
    Calendar,            // gc: GoogleCalendarNode
    FileTextIcon,        // summarize: SummarizerNode
    CloudSun,            // weather: WeatherNode
    Webhook              // webhook: WebhookListenerNode
  } from "lucide-react";

const tabs = [
    "Start",
    "LLM",
    "Knowledge",
    "Integrations",
    "Output"
  ];
  
  const toolbarConfig = {
    Start: [
      { type: "customInput", label: "Input" },
      { type: "text", label: "Text" },
      { type: "webhookListener", label: "Webhook Listener" },
    ],
    LLM: [
      { type: "llm", label: "LLM" },
      { type: "summarizer", label: "Summarizer" },
    ],
    Knowledge: [
      { type: "faiss", label: "FAISS" },
      { type: "melvis", label: "MELVIS" },
    ],
    Integrations: [
      {type:"API", label:"API"},
      { type: "googleCalendar", label: "Google Calendar" },
      { type: "weather", label: "Weather" },
    ],
    Output: [
      { type: "customOutput", label: "Output" },
      { type: "fileOutput", label: "File Output" },
    ],
  };
   
  const nodeIcons = {
    customInput: FileInput,
    llm: Bot,
    customOutput: SquareTerminal,
    text: FileText,
    API: Globe,
    faiss: Database,
    melvis: Network,
    fileOutput: FileOutput,
    googleCalendar: Calendar,
    summarizer: FileTextIcon,
    weather: CloudSun,
    webhookListener: Webhook,
  };

export const PipelineToolbar = () => {
    const [activeTab,setActiveTab] = useState("Start");
    return(
        <div className='border-b bg-white'>
            <div className='flex gap-6 ml-6'>
                {tabs.map((tab) => (
                    <button
                        key={{tab}}
                        onClick={()=> setActiveTab(tab)}
                        className={`pb-2 text-sm ${activeTab === tab ? "border-b-2 border-indigo-600" : "text-gray-600 hover:text-gray-900 italic font-bold"} italic font-bold`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex gap-4 px-4 py-3 flex-wrap flex-row ml-6 italic text-black">
            {toolbarConfig[activeTab]?.map((node) => {
                const Icon = nodeIcons[node.type];
                return (
                    <DraggableNode
                    key={node.label}
                    type={node.type}
                    label={node.label}
                    icon={Icon ? <Icon size={18} style={{ marginRight: 6 }} /> : null}
                    />
                );
            })}
            </div>
        </div>
    )
}