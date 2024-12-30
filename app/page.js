import Banner from "@/components/banner";
import Features from "@/components/features";
import AgentsIntro from "@/components/AgentsIntro";
import AuditIntro from "@/components/AuditIntro";
import DashboardIntro from "@/components/DashboardIntro";
import GuardIntro from "@/components/GuardIntro";
import Footer from "@/components/footer";
import People from "@/components/people";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Banner />
        <Features />
        <AgentsIntro />
        <AuditIntro />
        <People />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
