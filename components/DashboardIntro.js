"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const DashboardIntro = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col gap-y-8 items-center">
        <h2 className="text-3xl font-bold text-center">Dashboard Interface</h2>
        <p className="text-xl text-gray-500">
          The dashboard is where you can manage your agents, test your AI products, and browse history reports.
        </p>
        {mounted && (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full max-w-4xl"
          >
            <SwiperSlide>
              <Image src="/images/dashboard_1.webp" alt="Dashboard 1" width={1000} height={1000} className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/dashboard_2.webp" alt="Dashboard 2" width={1000} height={1000} className="w-full h-auto" />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default DashboardIntro;
