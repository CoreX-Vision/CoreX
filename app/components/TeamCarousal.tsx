"use client";
import React, { useState, useRef, use, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Teams from "@/data/team.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TeamCarousal = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/team")
  //     .then((res) => res.json())
  //     .then((data) => setTeam(data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  const minLength = isMobile ? 1 : 3

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
        {Teams.map((user, index) => (
          <SwiperSlide key={index} className="w-full px-[20px] lg:px-0">
            <div className="flex justify-between items-center w-full py-6">
              <div className="flex flex-col w-full gap-4 justify-center items-center">
                <div className="rounded-xl overflow-hidden bg-[#D5D4D0] h-[380px] pb-2">
                  <Image
                    src={user.image}
                    width={400}
                    height={400}
                    objectFit="cover"
                    alt={`CoreX Vision Team ${user.name} && ${user.position}`}
                    loading="lazy"
                    className="w-full transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-[20px] text-secondary font-bold dark:text-white">
                  {user.name}
                </h3>
                <p className="text-[16px] text-core-gray dark:text-off-white/70 font-light">
                  {user.position}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {Teams.length > minLength && (
        <div className="flex justify-end items-center w-full py-10">
          <button
            className={`p-3 border border-text/20 dark:border-off-white/20 dark:text-white rounded-md mr-4 ${
              isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            ref={prevRef}
            disabled={isBeginning}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`p-3 border border-text/20 dark:border-off-white/20 dark:text-white rounded-md ${
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
