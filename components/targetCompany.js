import Logo from "./Logo";
import EmblaCarousel from "@/components/Carousel";

const logos = [
  { src: "/images/target_company_logos/chatgpt.png", alt: "ChatGPT Logo" },
  { src: "/images/target_company_logos/claude.png", alt: "Claude Logo" },
  { src: "/images/target_company_logos/cohere.png", alt: "Cohere Logo" },
  { src: "/images/target_company_logos/ai21.png", alt: "AI21 Logo" },
  { src: "/images/target_company_logos/deepseek.png", alt: "DeepSeek Logo" },
  { src: "/images/target_company_logos/llama.png", alt: "LLaMA Logo" },
  { src: "/images/target_company_logos/mistral.png", alt: "Mistral Logo" },
];

const TargetCompanyLogos = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-16">
          The Company We Are Auditing
        </h2>

        <EmblaCarousel images={logos} />
      </div>
    </section>
  );
};

export default TargetCompanyLogos;
