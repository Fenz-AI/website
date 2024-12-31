import Logo from "./Logo";

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
          Partnering with Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
          {logos.map((item, index) => (
            <div
              className="flex justify-center items-center transform hover:scale-105 transition duration-300"
              key={index}
            >
              <Logo src={item.src} alt={item.alt} width={300} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetCompanyLogos;
