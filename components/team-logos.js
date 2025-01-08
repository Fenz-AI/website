import Image from "next/image";

const logo_count = 6;

const TeamLogos = () => {
  return (
    <div className="w-full bg-gray-50 py-16 flex flex-col items-center gap-y-8">
      <h2 className="text-3xl font-bold text-center">About Our Team</h2>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400">
        Our team members are from the following backgrounds.
      </p>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {Array.from({ length: logo_count }, (_, index) => (
          <div
            key={index}
            className="w-1/4 h-36 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:scale-105 transition-all duration-300"
          >
            <Image
              className="w-full h-full object-contain"
              src={`/images/logos/team/team-logo-${index + 1}.png`}
              alt="Team Logo"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamLogos;