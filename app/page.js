import Banner from "@/components/banner";
import Features from "@/components/features";
import AgentsIntro from "@/components/AgentsIntro";
import AuditIntro from "@/components/AuditIntro";
import Leaderboard from "@/components/Leaderboard";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Banner />
        <Features />
        <Leaderboard />
        <AgentsIntro />
        <AuditIntro />
      </main>
    </div>
  );
};

export default Home;
