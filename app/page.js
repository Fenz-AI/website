import Banner from "@/components/banner";
import DemoVideo from "@/components/demo-video";
import Features from "@/components/features";
import AgentsIntro from "@/components/AgentsIntro";
import AuditIntro from "@/components/AuditIntro";
import Leaderboard from "@/components/Leaderboard";
import AuditingList from "@/components/auditing-list";
import TeamLogos from "@/components/team-logos";
import ResearchAndDevelopment from "@/components/research-and-development";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Banner />
        <DemoVideo />
        <Features />
        <Leaderboard />
        <AgentsIntro />
        <AuditIntro />
        <AuditingList />
        <ResearchAndDevelopment />
        <TeamLogos />
      </main>
    </div>
  );
};

export default Home;
