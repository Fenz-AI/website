"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/banner.webp"
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-[50%] flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Fenz AI Agent Guard</h1>
        <p className="text-xl md:text-2xl mb-10 text-center max-w-2xl">
          Ensure AI Safety by Audit Intelligence{' '}
          <span className="mt-4 inline-flex space-x-2 text-3xl">
            <span className="font-bold text-yellow-400 animate-scale-yellow">EVALUATION</span>
            <span>|</span>
            <span className="font-bold text-green-400 animate-scale-green">AUDIT</span>
            <span>|</span>
            <span className="font-bold text-red-400 animate-scale-red">AUTHENTICATION</span>
          </span>
        </p>
        <div className="flex space-x-6">
          <Link href="#tally-open=nrLkBv&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave">
            <Button 
              size="lg" 
              variant="custom" 
              className="bg-blue-600 text-white text-lg font-medium px-8 py-4 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
            >
              Get Sample Report
            </Button>
          </Link>
          <Link href="https://demo.fenz.ai" target="_blank">
            <Button 
              size="lg" 
              variant="custom" 
              className="bg-black text-white text-lg font-medium px-8 py-4 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;