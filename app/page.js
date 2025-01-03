import Banner from "@/components/banner";
import Features from "@/components/features";
import AgentsIntro from "@/components/AgentsIntro";
import AuditIntro from "@/components/AuditIntro";
import Footer from "@/components/footer";
import ResearchLogos from "@/components/researchLogos";
import TargetCompanyLogos from "@/components/targetCompany";
import PartnerCompanyLogos from "@/components/partnerCompany";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Banner />
        <Features />
        <AgentsIntro />
        <AuditIntro />
        <ResearchLogos />
        <TargetCompanyLogos />
        <PartnerCompanyLogos />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
