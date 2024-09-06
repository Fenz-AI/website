import { Card, CardContent } from "@/components/ui/card";

const agents = [
  {
    name: "Jailbreak Sentinel",
    description: "Detects and prevents attempts to bypass AI system restrictions and safeguards.",
  },
  {
    name: "Input Guardian Self-Check",
    description: "Analyzes and filters incoming data to ensure safe and appropriate AI interactions.",
  },
  {
    name: "Output Vigilance Self-Monitor",
    description: "Scrutinizes AI-generated content for safety and appropriateness before delivery to users.",
  },
  {
    name: "Fact Verifier Self-Audit",
    description: "Cross-references AI responses with known facts to ensure accuracy and reliability.",
  },
  {
    name: "Hallucination Detector AI",
    description: "Identifies instances where AI generates false or unsupported information in its outputs.",
  },
  {
    name: "AlignScore Truth Validator",
    description: "Uses AlignScore metrics to verify factual accuracy of AI-generated content.",
  },
  {
    name: "LlamaGuard Content Screener",
    description: "Employs LlamaGuard technology to moderate and filter AI-generated content for safety.",
  },
  {
    name: "Patronus Lynx RAG Inspector",
    description: "Uses RAG (Retrieval-Augmented Generation) to verify and validate AI-generated content.",
  },
  {
    name: "Presidio Data Shield",
    description: "Identifies and protects sensitive information using Presidio's data detection capabilities.",
  },
  {
    name: "ActiveFence Input Gatekeeper",
    description: "Monitors and controls AI input to prevent harmful or inappropriate content.",
  },
  {
    name: "TruthChecker RAG Authenticator",
    description: "Leverages Got It AI's TruthChecker API to validate RAG outputs for accuracy.",
  },
  {
    name: "AutoAlign Guardrail Enforcer",
    description: "Implements and maintains AI safety guardrails using AutoAlign technology.",
  },
];

const Agents = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {agents.map((agent, index) => (
        <Card key={index} className="w-48 h-24 cursor-pointer group">
          <CardContent className="p-2 h-full flex items-center justify-center relative overflow-hidden">
            <h3 className="text-sm font-semibold text-center">{agent.name}</h3>
            <p className="absolute inset-0 bg-black bg-opacity-75 text-white p-2 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {agent.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Agents;