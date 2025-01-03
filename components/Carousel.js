"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);
  const allImages = images;

  return (
    <div className="embla mx-auto mt-12 max-w-lg border h-80" ref={emblaRef}>
      <div className="embla__container h-full">
        {allImages.map((item, index) => (
          <div
            className="embla__slide flex items-center justify-center"
            key={index}
          >
            <Image src={item.src} alt={item.alt} width={500} height={500} />
          </div>
        ))}
      </div>
    </div>
  );
}
