"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Hero from "@/public/assets/corex-hero-image.png";

const TestimonialCarousel = () => {
  const Testimonial = [
    {
      name: "Zetetic Clothing",
      desc: "A huge thank you to Corex for building our stunning e-commerce website! Your expertise, creativity, and dedication truly brought our vision to life.",
      image: Hero,
      logo: Hero,
    },
    {
      name: "Krishan",
      desc: "I had an excellent experience working with Core X Vision - Sri Lanka to build my iTech Ceylon website. They delivered a highly professional, user-friendly e-commerce platform...",
      image: Hero,
      logo: Hero,
    },
    {
      name: "LZR Shoes",
      desc: "CoreX Vision - Sri Lanka did an amazing job building my footwear shopping system! The design is very clean and clear...",
      image: Hero,
      logo: Hero,
    },
  ];

  return (
    <div className="w-full py-12">
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          640: { slidesPerView: 1 }, // small tablets
          768: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // desktop
        }}
        className="px-4 sm:px-8"
      >
        {Testimonial.map((item, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div
              className="border border-text/20 flex flex-col justify-between items-start gap-6 p-6 
                  max-w-[420px] mx-auto min-h-[350px] rounded-lg bg-white shadow-sm"
            >
              <p className="text-core-gray text-[16px] font-thin">
                {item.desc}
              </p>

              {/* Avatar */}
              <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                <Image
                  src={item.image}
                  alt="Corex Testimonial user"
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name + Logo */}
              <div className="flex justify-between items-center w-full">
                <p className="font-normal text-text text-[18px]">{item.name}</p>
                <div className="relative w-[80px] h-[30px] lg:w-[100px] lg:h-[40px]">
                  <Image
                    src={item.logo}
                    alt="Corex Testimonial user logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
