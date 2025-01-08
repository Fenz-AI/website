"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const logo_count = 7;

const MarqueeContent = () => (
  <>
    {Array.from({ length: logo_count }, (_, index) => (
      <div
        key={index}
        className="relative shrink-0 w-[200px] h-24 border border-gray-200 dark:border-gray-800 rounded-lg p-4 mx-4 bg-white dark:bg-gray-950"
      >
        <Image
          className="w-full h-full object-contain"
          src={`/images/logos/auditing/auditing-${index + 1}.png`}
          alt="Auditing Logo"
          width={300}
          height={300}
        />
      </div>
    ))}
  </>
);

const AuditingList = () => {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16 flex flex-col items-center gap-y-8">
      <h2 className="text-3xl font-bold text-center">Auditing Companies</h2>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400">
        Companies that have been audited by our team.
      </p>
      
      <div className="relative flex flex-col items-center w-full overflow-hidden">
        {/* First row */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="animate-marquee flex whitespace-nowrap">
            <MarqueeContent />
          </div>
          <div className="animate-marquee flex whitespace-nowrap absolute top-0 left-[100%]">
            <MarqueeContent />
          </div>
        </div>
        
        {/* Second row (reverse direction) */}
        <div className="relative w-full overflow-hidden flex items-center mt-8">
          <div className="animate-marquee-reverse flex whitespace-nowrap">
            <MarqueeContent />
          </div>
          <div className="animate-marquee-reverse flex whitespace-nowrap absolute top-0 left-[100%]">
            <MarqueeContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditingList;