"use client";
import React, { useState, useRef, use } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Founder from "@/public/assets/Founder.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Team = [
  {
    name: "Rimshad",
    position: "CEO & Founder",
    image: Founder,
  },
];

const TeamCarousal = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full max-w-sm lg:max-w-screen relative overflow-hidden px-0 lg:px-20">
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
          1024: { slidesPerView: 4 },
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
        {Team.map((user, index) => (
          <SwiperSlide key={index} className="w-full px-[20px] lg:px-0">
            <div className="flex justify-between items-center w-full py-6">
              <div className="flex flex-col w-full gap-4 justify-center items-center ">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={user.image}
                    alt={`CoreX Vision Team ${user.name} && ${user.position}`}
                    className="h-[450px] object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-[20px] text-secondary font-bold">
                  {user.name}
                </h3>
                <p className="text-[16px] text-core-gray font-light">
                  {user.position}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {Team.length > 3 && (
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

export default TeamCarousal;
