import { Card, CardContent } from "@/components/ui/card";

const agents = [
  {
    name: "Harmony Guardian",
    description: "Identifies and flags content promoting violence, hate speech, or discrimination to foster a respectful online environment.",
  },
  {
    name: "Decency Sentinel",
    description: "Detects explicit sexual content and pornography to maintain appropriate standards across platforms.",
  },
  {
    name: "Law & Order Watchdog",
    description: "Monitors for discussions or plans related to illegal activities to prevent criminal conspiracies.",
  },
  {
    name: "Arms Control Monitor",
    description: "Scans for content involving illegal weapons or explosives to enhance public safety.",
  },
  {
    name: "Substance Safety Overseer",
    description: "Identifies discussions about illegal drugs and controlled substances to support health and legal compliance.",
  },
  {
    name: "Wellbeing Protector",
    description: "Detects content related to suicide, self-harm, or extreme eating disorders to facilitate early intervention.",
  },
];

const Agents = () => {
  return (
    <div className="flex flex-wrap gap-x-[2%] gap-y-4 items-center justify-center">
      {agents.map((agent, index) => (
        <Card key={index} className="w-[48%] md:w-[30%] h-24 cursor-pointer group">
          <CardContent className="p-2 h-full flex items-center justify-center relative overflow-hidden">
            <h3 className="text-lg font-semibold text-center">{agent.name}</h3>
            <p className="absolute inset-0 bg-black bg-opacity-75 text-white p-2 flex items-center justify-center text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {agent.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Agents;