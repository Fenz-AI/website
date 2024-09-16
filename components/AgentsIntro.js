import Agents from "@/components/agents";

const AgentsIntro = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col gap-y-8 items-center">
        <h2 className="text-3xl font-bold text-center">Agents Working for You</h2>
        <p className="text-xl text-gray-500">
          We have a team of agents running 24/7 to protect your AI products, each with specific capabilities to handle different types of harmful content. You can choose the agents that best fit your needs.
        </p>
        <Agents />
      </div>
    </section>
  );
};

export default AgentsIntro;