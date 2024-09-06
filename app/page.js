import Banner from "@/components/banner";
import Features from "@/components/features";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Banner />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;