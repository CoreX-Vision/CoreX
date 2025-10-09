"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Lzr from "@/public/assets/testimonial/LzrLogo.png";
import Zet from "@/public/assets/testimonial/ZeteticLogo.png";
import iTech from "@/public/assets/testimonial/ItechLogo.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = [
  {
    name: "Zetetic Clothing",
    desc: "A huge thank you to Corex for building our stunning e-commerce website! Your expertise, creativity, and dedication truly brought our vision to life.",
    image: Zet,
    logo: Zet,
  },
  {
    name: "Krishan",
    desc: "I had an excellent experience working with Core X Vision - Sri Lanka to build my iTech Ceylon website. They delivered a highly professional, user-friendly e-commerce platform...",
    image: iTech,
    logo: iTech,
  },
  {
    name: "LZR Shoes",
    desc: "CoreX Vision - Sri Lanka did an amazing job building my footwear shopping system! The design is very clean and clear...",
    image: Lzr,
    logo: Lzr,
  },
];

const TestimonialCarousel = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [loading, setLoading] = useState(true); // <-- Add loading state
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Simulate API loading
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-sm lg:max-w-screen relative overflow-hidden px-0 lg:px-20">
      {loading ? (
        <div className="flex gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border border-text/10 flex flex-col justify-between items-start gap-6 p-6 bg-white w-full min-h-[350px] animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="relative w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="flex justify-between items-center w-full">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={false}
          spaceBetween={15}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="w-full"
        >
          {Testimonial.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="border border-text/10 flex flex-col justify-between items-start gap-6 p-6 bg-white w-full min-h-[350px]">
                <p className="text-core-gray text-[14px] lg:text-[16px] font-light">
                  {item.desc}
                </p>

                <div className="relative w-16 h-16">
                  <Image
                    src={item.image}
                    alt={`CoreX Vision Client ${item.name}`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="font-normal text-text text-[14px] md:text-[18px]">
                    {item.name}
                  </p>
                  <div className="relative w-20 h-8 lg:w-24 lg:h-10">
                    <Image
                      src={item.logo}
                      alt="Corex Testimonial user logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {!loading && Testimonial.length > 3 && (
        <div className="flex justify-end items-center w-full py-10">
          <button
            className={`p-3 border border-text/20 rounded-md mr-4 ${
              isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            ref={prevRef}
            disabled={isBeginning}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`p-3 border border-text/20 rounded-md ${
              isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            ref={nextRef}
            disabled={isEnd}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};


export default TestimonialCarousel;
