import Image from "next/image";

export default function ResearcherCard({ researcher }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="flex items-center justify-center">
        <Image
          className="rounded-full"
          src={researcher.photo}
          alt={researcher.name}
          width={200}
          height={200}
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{researcher.name}</h2>
        <p className="text-gray-600">{researcher.title}</p>
        <p className="mt-2 text-gray-700 text-sm">{researcher.description}</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        {researcher.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
