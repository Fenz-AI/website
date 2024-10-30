"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const agents = [
  {
    name: "Harmony Guardian",
    topic: "Violence & Hate",
    description: "Identifies and flags content promoting violence, hate speech, or discrimination to foster a respectful online environment.",
  },
  {
    name: "Decency Sentinel",
    topic: "Sexual Content",
    description: "Detects explicit sexual content and pornography to maintain appropriate standards across platforms.",
  },
  {
    name: "Law & Order Watchdog",
    topic: "Criminal Planning",
    description: "Monitors for discussions or plans related to illegal activities to prevent criminal conspiracies.",
  },
  {
    name: "Arms Control Monitor",
    topic: "Illegal Weapons",
    description: "Scans for content involving illegal weapons or explosives to enhance public safety.",
  },
  {
    name: "Substance Safety Overseer",
    topic: "Regulated Substances",
    description: "Identifies discussions about illegal drugs and controlled substances to support health and legal compliance.",
  },
  {
    name: "Wellbeing Protector",
    topic: "Suicide & Self-Harm",
    description: "Detects content related to suicide, self-harm, or extreme eating disorders to facilitate early intervention.",
  },
];

const getHealthBadge = (score) => {
  const color = score >= 90 ? "bg-green-500" : score >= 70 ? "bg-yellow-500" : "bg-red-500";
  return <span className={`inline-block w-3 h-3 rounded-full ${color} mr-2`}></span>;
};

const getDescription = (score) => {
  if (score >= 90) return "Minimal risk detected. Content appears safe and compliant.";
  if (score >= 70) return "Low risk identified. Minor concerns present, but generally acceptable.";
  if (score >= 60) return "Moderate risk detected. Some concerning elements require attention.";
  return "High risk identified. Significant issues present, immediate action recommended.";
};

const reports = {
  "GPT-4o": [
    { topic: "Violence & Hate", score: 85 },
    { topic: "Sexual Content", score: 92 },
    { topic: "Criminal Planning", score: 90 },
    { topic: "Illegal Weapons", score: 100 },
    { topic: "Suicide & Self-Harm", score: 100 },
  ],
  "GPT-4o-mini": [
    { topic: "Violence & Hate", score: 18 },
    { topic: "Sexual Content", score: 50 },
    { topic: "Criminal Planning", score: 29 },
    { topic: "Illegal Weapons", score: 0 },
    { topic: "Suicide & Self-Harm", score: 0 },
  ],
  "GPT-4": [
    { topic: "Violence & Hate", score: 58 },
    { topic: "Sexual Content", score: 75 },
    { topic: "Criminal Planning", score: 24 },
    { topic: "Illegal Weapons", score: 100 },
    { topic: "Suicide & Self-Harm", score: 50 },
  ],
  "GPT-3.5-turbo": [
    { topic: "Violence & Hate", score: 33 },
    { topic: "Sexual Content", score: 100 },
    { topic: "Criminal Planning", score: 38 },
    { topic: "Illegal Weapons", score: 0 },
    { topic: "Suicide & Self-Harm", score: 0 },
  ],
  "Claude-3.5-Sonnet": [
    { topic: "Violence & Hate", score: 95 },
    { topic: "Sexual Content", score: 75 },
    { topic: "Criminal Planning", score: 90 },
    { topic: "Illegal Weapons", score: 100 },
    { topic: "Suicide & Self-Harm", score: 100 },
  ],
};

const EvaluationDemo = ({ name }) => {
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topic) => {
    setExpandedTopics(prev => ({ ...prev, [topic]: !prev[topic] }));
  };

  return (
    <div className="w-full h-full">
      <div className="space-y-4">
         {reports[name].map(({ topic, score }) => (
           <div key={topic} className="border-b pb-2">
             <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleTopic(topic)}>
               <span className="font-medium">{topic}</span>
               <div className="flex items-center">
                 <span className={`font-semibold mr-2 ${
                   score >= 90 ? "text-green-600" :
                     score >= 70 ? "text-yellow-600" :
                       score >= 60 ? "text-orange-600" : "text-red-600"
                 }`}>
                   {score}
                 </span>
                 {expandedTopics[topic] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
               </div>
             </div>
             {expandedTopics[topic] && (
               <>
                 <Progress 
                   value={score} 
                   className={`h-2 ${
                     score >= 90 ? "bg-green-200" :
                       score >= 70 ? "bg-yellow-200" :
                         score >= 60 ? "bg-orange-200" : "bg-red-200"
                   }`}
                   indicatorClassName={`${
                     score >= 90 ? "bg-green-600" :
                       score >= 70 ? "bg-yellow-600" :
                         score >= 60 ? "bg-orange-600" : "bg-red-600"
                   }`}
                 />
                 <p className="text-sm text-gray-600 mt-2">{getDescription(score)}</p>
               </>
             )}
         </div>
       ))}
      </div>
    </div>
  );
};

export default EvaluationDemo;