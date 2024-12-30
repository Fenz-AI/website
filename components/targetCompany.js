import Logo from "./Logo";
const logos = [
  { src: "/images/target_company_logos/chatgpt.png", alt: "Company Logo" },
  { src: "/images/target_company_logos/claude.png", alt: "Company Logo" },
  { src: "/images/target_company_logos/cohere.png", alt: "Company Logo" },
  { src: "/images/target_company_logos/ai21.png", alt: "Company Logo" },
  { src: "/images/target_company_logos/deepseek.png", alt: "Company Logo" },
  { src: "/images/target_company_logos/llama.png", alt: "Company Logo" },
  { src: "/images/target_company_logos/mistral.png", alt: "Company Logo" },
];
const TargetCompanyLogos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Companies Undergoing Audits
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {logos.map((item, index) => (
            <Logo key={index} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetCompanyLogos;
