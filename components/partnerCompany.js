import Logo from "./Logo";
const logos = [
  { src: "/images/partner_company_logo/gptdao_b.png", alt: "GPTDAO Logo" },
  {
    src: "/images/partner_company_logo/GenAI_Summit.png",
    alt: "GenAI Summit Logo",
  },
];
const PartnerCompanyLogos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-8xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Companies We Are Partnered and Trusted By
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {logos.map((item, index) => (
            <Logo
              key={index}
              src={item.src}
              alt={item.alt}
              width={200}
              height={60}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCompanyLogos;
