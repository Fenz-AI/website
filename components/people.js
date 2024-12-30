import ResearcherCard from "./ResearcherCard";

const peoples = [
  {
    name: "Dr. Jane Doe1",
    title: "Astrophysicist",
    photo: "/images/people.jpg",
    description: "Leading research in exoplanet discovery.",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com" },
      { label: "ResearchGate", url: "https://www.researchgate.net" },
    ],
  },
  {
    name: "Dr. Jane Doe2",
    title: "Astrophysicist",
    photo: "/images/people.jpg",
    description: "Leading research in exoplanet discovery.",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com" },
      { label: "ResearchGate", url: "https://www.researchgate.net" },
    ],
  },
  {
    name: "Dr. Jane Doe3",
    title: "Astrophysicist",
    photo: "/images/people.jpg",
    description: "Leading research in exoplanet discovery.",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com" },
      { label: "ResearchGate", url: "https://www.researchgate.net" },
    ],
  },
  {
    name: "Dr. Jane Doe4",
    title: "Astrophysicist",
    photo: "/images/people.jpg",
    description: "Leading research in exoplanet discovery.",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com" },
      { label: "ResearchGate", url: "https://www.researchgate.net" },
    ],
  },
];

const People = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Research Groups
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {peoples.map((item, index) => (
            <ResearcherCard key={index} researcher={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
