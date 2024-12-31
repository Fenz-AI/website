import Logo from "./Logo";
const logos = [{ src: "/images/people.jpg", alt: "Partner Logo" }];
const PartnerCompanyLogos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Companies We Are Partnered and Trusted with
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {logos.map((item, index) => (
            <Logo
              key={index}
              src={item.src}
              alt={item.alt}
              width={180}
              height={60}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCompanyLogos;
