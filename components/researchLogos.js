import Logo from "./Logo";

const logos = [
  { src: "/images/campus_logos/stanford.png", alt: "Stanford University Logo" },
  { src: "/images/campus_logos/neu.png", alt: "Northeastern University Logo" },
  { src: "/images/campus_logos/uw.png", alt: "University of Washington Logo" },
  { src: "/images/campus_logos/Tsinghua.png", alt: "Tsinghua University Logo" },
  { src: "/images/campus_logos/fudan.png", alt: "Fudan University Logo" },
  { src: "/images/campus_logos/wuhan.png", alt: "Wuhan University Logo" },
];

const ResearchLogos = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Our Teams
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
          We are a collaborative research group composed of students and
          scholars from top universities around the world, united by a shared
          passion for advancing AI technologies. Our mission is to provide
          unbiased evaluations of AI agents, bridging the gap between academia
          and industry.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {logos.map((item, index) => (
            <div
              className="flex justify-center items-center transform hover:scale-105 transition duration-300"
              key={index}
            >
              <Logo src={item.src} alt={item.alt} width={160} height={70} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchLogos;
