"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "@/public/assets/corex-hero-image.png";
import secondHero from "@/public/assets/home-section-2.webp";
import secondHerosub from "@/public/assets/about-page-hero-image.webp";
import TestimonialCarousel from "./components/Testimonial";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import CountUp from "./components/CountUp";
import Applications from "@/data/applications.json";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-full lg:px-20 pt-[100px] pb-[20px] lg:pt-40 lg:h-screen flex justify-center items-start relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 px-[20px] lg:px-0 z-10">
          <div className="lg:w-[70%] w-full flex flex-col gap-6">
            <h1 className="font-bold dark:text-white text-[32px] text-s text-text md:text-[50px] lg:text-[58px] 2xl:text-[70px] lg:w-[70%] leading-[1.3em] lg:text-start text-center">
              Build Modern Scalable and beautiful Digital Experiences
            </h1>
            <p className="text-core-gray dark:text-off-white/60 font-light text-[20px] mt-2 lg:w-[90%] 2xl:w-[65%] lg:text-start text-center">
              At CoreX Vision – Sri Lanka, we create modern, scalable digital
              experiences. From websites to mobile apps, our team uses the
              latest technologies like React, Next.js, WordPress, and React
              Native to bring your ideas to life.
            </p>
            <div className="flex justify-center lg:justify-start items-center">
              <a
                href="/contact"
                className="group px-[20px] py-[15px] relative cursor-pointer overflow-hidden dark:bg-white dark:text-black bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center"
              >
                Get Start
                <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                  <FiArrowUpRight />
                </div>
              </a>
            </div>
          </div>
          <div className="lg:w-[30%] w-full relative overflow-hidden rounded-md">
            <Image
              src={Hero}
              alt="corex hero image"
              className="object-cover h-[250px] w-full lg:h-[450px] rounded-md transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-dot">
          <div className="w-6 h-10 border-2 border-text/20 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-text/40 rounded-full mt-1 animate-scroll-dot"></div>
            <div className="absolute inset-0 bg-secondary/20 bg-gradient-to-b from-transparent to-transparent animate-scroll-glow"></div>
          </div>
        </div>
        <div className="w-96 h-96 flex absolute blur-[90px] animate-spin z-0 bg-linear-120 from-pink-500 to-blue-600 rounded-full -bottom-20 lg:bottom-40 right-0" />
      </div>
      <div className="w-full flex lg:px-20 py-[20px] justify-center items-center lg:items-start">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 px-[20px] lg:px-0">
          <div className="lg:w-[70%] w-full flex flex-col justify-center items-center gap-6 lg:items-start">
            <div className="px-6 py-2 bg-off-white dark:bg-[#393939]/20 dark:text-white w-[200px]  flex items-center justify-center rounded-md mb-4">
              Exclusive Services
            </div>
            <h1 className="text-text font-bold dark:text-white text-[32px] md:text-[50px] lg:text-[70px] leading-[1.3em] lg:w-[600px] lg:text-start text-center">
              A Team Of Experts You Can Trust
            </h1>
            <p className="text-core-gray dark:text-off-white/60 font-light text-[20px] mt-2 w-[90%] lg:text-start text-center">
              Himenaeos mus porttitor pretium rutrum quisque efficitur quisque
              libero tristique ultricies himenaeos donec ad tincidunt magna.
              Condimentum netus feugiat risus porttitor viverra, suscipit
              sociosqu bibendum rutrum placerat cras aliquam.
            </p>
            <div className="flex justify-start items-center gap-6 flex-col sm:flex-row">
              <a
                href="/contact"
                className="group px-[20px] dark:bg-white dark:text-black py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center"
              >
                Get Started Now
                <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45 ">
                  <FiArrowUpRight />
                </div>
              </a>
              <a
                href="/services"
                className="group px-[20px] py-[15px] dark:text-off-white cursor-pointer rounded-md flex justify-center items-center mt-6 font-normal text-black hover:text-primary transition-all duration-300"
              >
                View Our Services
                <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                  <FiArrowUpRight />
                </div>
              </a>
            </div>
          </div>
          <div
            className="lg:w-[30%] w-full h-[250px] lg:h-[400px] relative overflow-hidden rounded-md flex justify-center items-center p-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${secondHero.src})` }}
          >
            <Image
              src={secondHerosub}
              alt="corex hero image"
              className="object-cover z-10 h-[150px] lg:h-[300px] w-full rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:p-20  pb-[20px]  flex justify-center items-start">
        <div className="w-full flex py-[20px] lg:py-20 justify-center items-center flex-col gap-16 px-[20px] lg:px-0">
          <h1 className="lg:text-[70px] md:text-[50px] dark:text-white text-[32px] text-text font-bold">
            Our Application Features.
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {Applications.map((items, index) => {
              const hoverGradient = [
                "hover:bg-gradient-to-br from-blue-400 to-indigo-500",
                "hover:bg-gradient-to-tr from-violet-400 to-purple-500",
                "hover:bg-gradient-to-bl from-green-400 to-emerald-500",
                "hover:bg-gradient-to-tl from-purple-400 to-fuchsia-500",
              ];
              return (
                <div
                  key={items.id}
                  className={`bg-off-white dark:bg-[#212121]  group transition-all duration-300 hover:transform hover:-translate-y-3 lg:w-[25%] min-h-[320px] flex flex-col justify-start items-start p-6 gap-4 rounded-md ${
                    hoverGradient[index % hoverGradient.length]
                  }`}
                >
                  <p className="font-bold text-[16px] text-text dark:text-white group-hover:text-white transition-all duration-300">
                    {items.title}
                  </p>
                  <h2 className="font-light dark:text-white group-hover:text-off-white transition-all duration-300 text-[14px] text-text">
                    {items.desc}
                  </h2>
                  <ul className="flex flex-col gap-2 mt-2">
                    {items.list.map((point: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center dark:text-off-white/80 group-hover:text-off-white/80 transition-all duration-300 justify-start gap-2 text-core-gray font-light text-[15px]"
                      >
                        <FiCheck className="text-primary mt-[2px]" size={14} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full lg:px-20  pb-[20px]  flex justify-center items-start">
        <div className="flex py-[30px] lg:py-20 justify-center items-center flex-col gap-16 px-[20px] lg:px-0">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:items-end gap-6 ">
            <h1 className="text-[32px] dark:text-white md:text-[50px] lg:text-[70px] text-text font-bold leading-[1.3em] lg:w-[67%] text-center lg:text-start">
              Successful Solutions That Drive Your Business Forward
            </h1>
            <a
              href="/services"
              className="group px-[20px] w-[150px] py-[15px] dark:text-black dark:bg-white cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center"
            >
              View All
              <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </div>
            </a>
          </div>
          <div className="w-full justify-between items-center flex flex-col lg:flex-row gap-6">
            <div>
              <p className="text-text dark:text-white text-[45px] font-bold text-center lg:text-start">
                <CountUp to={98} suffix="%" />
              </p>
              <p className="text-core-gray dark:text-white text-[18px] font-normal text-center lg:text-start">
                Client Satisfaction
              </p>
            </div>
            <div className="w-[70%]">
              <p className="text-core-gray dark:text-off-white/60 text-[20px] font-light">
                At CoreX Software, we deliver web and mobile applications that
                exceed expectations. Our clients experience smoother workflows
                and modern, responsive designs that elevate their brand.
              </p>
            </div>
            <div>
              <p className="text-core-gray dark:text-off-white/60 text-[20px] font-normal">
                Oct 7, 2024
              </p>
            </div>
          </div>
          <div className="w-full justify-between items-center flex flex-col lg:flex-row gap-6">
            <div>
              <p className="text-text dark:text-white text-[45px] font-bold text-center lg:text-start">
                $<CountUp to={500} />
              </p>
              <p className="text-core-gray dark:text-white text-[18px] font-normal text-center lg:text-start">
                Average Project Value
              </p>
            </div>
            <div className="w-[70%]">
              <p className="text-core-gray text-[20px] dark:text-off-white/60 font-light">
                We create solutions tailored to your business, from custom
                websites to mobile applications, ensuring value and ROI for
                every project.
              </p>
            </div>
            <div>
              <p className="text-core-gray text-[20px] dark:text-off-white/60 font-normal">
                Sep 20, 2024
              </p>
            </div>
          </div>
          <div className="w-full justify-between items-center flex flex-col lg:flex-row gap-6">
            <div>
              <p className="text-text text-[45px] dark:text-white font-bold text-center lg:text-start">
                +<CountUp to={4} />
              </p>
              <p className="text-core-gray text-[18px] dark:text-white font-normal text-center lg:text-start">
                Projects Completed
              </p>
            </div>
            <div className="w-[70%]">
              <p className="text-core-gray text-[20px] dark:text-off-white/60 font-light">
                Our experienced team has successfully launched over 100
                projects, combining innovative technology with user-focused
                design.
              </p>
            </div>
            <div>
              <p className="text-core-gray text-[20px] dark:text-off-white/60 font-normal">
                Aug 15, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:px-20  pb-[20px]  flex justify-center items-start">
        <div className="flex py-[30px] lg:py-20 justify-center items-center flex-col gap-16 px-[20px] lg:px-0">
          <h1 className="text-[32px] dark:text-white md:text-[50px] lg:text-[70px] lg:w-[60%] font-bold text-text text-center leading-[1.3em]">
            Collaborating for Growth and Excellence
          </h1>
          <p className="text-core-gray dark:text-off-white/60 text-[14px] md:text-[18px] lg:text-[20px] font-light text-center lg:w-[70%]">
            More than developers, we’re your strategic partners. We create
            meaningful, long-term relationships while crafting custom web and
            mobile applications that drive real impact.
          </p>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}
