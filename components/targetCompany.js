import Logo from "./Logo";
const logos = [
  { src: "/images/campus_logos/stanford.png", alt: "University Logo" },
  { src: "/images/campus_logos/uw.png", alt: "University Logo" },
  { src: "/images/campus_logos/neu.png", alt: "University Logo" },
  { src: "/images/campus_logos/Tsinghua.png", alt: "University Logo" },
  { src: "/images/campus_logos/fudan.png", alt: "University Logo" },
  { src: "/images/campus_logos/wuhan.png", alt: "University Logo" },
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
