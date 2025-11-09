"use client";
import Image from "next/image";
import React from "react";
import Img from "@/public/assets/about-page-hero-image.webp";
import Founder from "@/public/assets/My Pic.png";
import { FiArrowUpRight } from "react-icons/fi";
import about from "@/public/assets/about-page-section-3-column-image-1.webp";
import TeamCarousal from "../components/TeamCarousal";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-full lg:px-20 pt-[100px] pb-[20px] lg:pt-24 flex justify-start items-start px-[20px]">
        <h1 className="font-bold text-[32px] dark:text-white md:text-[50px] text-center lg:text-start lg:text-[70px] lg:w-[70%] leading-[1.3em]">
          We Are Here To Make Your WebSites
        </h1>
      </div>
      <div className="w-full lg:px-20 lg:pb-20 flex justify-start items-start px-[20px]">
        <div
          className="w-full max-h-[200px] lg:min-h-[390px] flex justify-center items-end p-4 lg:px-10 lg:py-10 rounded-2xl relative"
          style={{ backgroundImage: `url(${Img.src})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
          <p className="lg:text-[20px] text-[14px] text-white font-light z-10">
            At CoreX we are passionate about helping businesses grow through
            technology. Based in Sri Lanka, our team of experienced designers,
            developers, and strategists create high-performance websites and
            mobile applications that combine modern design with powerful
            functionality.
          </p>
        </div>
      </div>
      <div className="w-full lg:px-20 pt-10 py-5s lg:py-20 lg:pt-20 flex flex-col lg:flex-row gap-6 justify-between items-start px-[20px]">
        <div className="flex justify-center items-center lg:items-start gap-4 flex-col lg:w-3/5">
          <h1 className="font-normal dark:text-white text-[32px] md:text-[50px] text-center lg:text-start lg:text-[70px] lg:w-[70%] leading-[1.3em]">
            Our Vision
          </h1>
          <p className="font-light text-core-gray dark:text-off-white/70 text-[14px] lg:text-[20px] w-[80%]">
            To be Sri Lanka’s most trusted software company, recognized for
            delivering innovative, high-quality, and reliable digital solutions
            that empower businesses and inspire customer confidence.
          </p>
        </div>
        <div className="w-full lg:w-[600px] bg-primary/20 min-h-[250px] rounded-md flex flex-col justify-center items-start py-10 px-6 gap-6">
          <div className="w-full flex justify-start items-center gap-4">
            <Image
              src={Founder}
              alt="CoreX Vision Founder Rimshad"
              className="w-20 rounded-full object-contain"
            />
            <div>
              <h3 className="text-[20px] font-normal dark:text-white text-secondary">
                Rimshad Ahamed
              </h3>
              <p className="text-[16px] font-light dark:text-off-white/70 text-core-gray">
                Founder of CoreX
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="font-light text-core-gray text-[14px] lg:text-[20px] dark:text-off-white/70">
              Our mission is to deliver innovative, scalable, and high-quality
              technology solutions that empower businesses to achieve digital
              excellence. We strive to build lasting partnerships through
              integrity, creativity, and a strong commitment to customer
              success.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex-col gap-10 py-10 lg:py-20 lg:px-20 flex justify-center items-center px-[20px]">
        <div className="w-full flex flex-col gap-0 lg:flex-row justify-center lg:justify-between items-center lg:items-end">
          <div className="flex justify-center items-start flex-col">
            <h1 className="font-normal dark:text-white text-[32px] md:text-[50px] text-center lg:text-start lg:text-[70px] lg:w-[70%] leading-[1.3em]">
              Why Choose CoreX?
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center dark:text-off-white/70 lg:items-start py-2 lg:py-10 px-6">
            <p className="text-core-gray text-light dark:text-off-white">
              We focus on deliver on time projects
            </p>
            <a
              href="/contact"
              className="group px-[20px] py-[15px] cursor-pointer bg-secondary dark:bg-white dark:text-black rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center"
            >
              Start Now
              <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45 ">
                <FiArrowUpRight />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="relative group dark:bg-[#212121] w-full lg:w-[25%] min-h-[160px] lg:h-[250px] p-6 rounded-md flex flex-col justify-between items-start hover:transform hover:-translate-y-3 transition-all duration-300 bg-off-white hover:bg-gradient-to-bl from-fuchsia-900 to-pink-500">
            <h3 className="lg:text-[16px] text-[14px] group-hover:text-white dark:text-white font-normal z-10">
              01 - Expertise in Web & Mobile Development
            </h3>
            <p className="lg:text-[16px] text-[14px] group-hover:text-white/70 dark:text-white/70 font-light z-10">
              We design and develop responsive websites and powerful mobile apps
              tailored to your goals.
            </p>
          </div>
          <div className="relative group dark:bg-[#212121] w-full lg:w-[25%] min-h-[160px] lg:h-[250px] p-6 rounded-md flex flex-col justify-between items-start hover:transform hover:-translate-y-3 transition-all duration-300 bg-off-white hover:bg-gradient-to-bl from-blue-500 to-indigo-900">
            <h3 className="lg:text-[16px] text-[14px] group-hover:text-white dark:text-white font-normal z-10">
              02 - Customer-First Approach
            </h3>
            <p className="lg:text-[16px] text-[14px] group-hover:text-white/70 dark:text-white/70 font-light z-10">
              We believe in long-term partnerships built on trust and
              transparency.
            </p>
          </div>
          <div className="relative group dark:bg-[#212121] w-full lg:w-[25%] min-h-[160px] lg:h-[250px] p-6 rounded-md flex flex-col justify-between items-start hover:transform hover:-translate-y-3 transition-all duration-300 bg-off-white hover:bg-gradient-to-bl from-green-500 to-emerald-900">
            <h3 className="lg:text-[16px] text-[14px] group-hover:text-white dark:text-white font-normal z-10">
              03 - Innovation & Reliability
            </h3>
            <p className="lg:text-[16px] text-[14px] group-hover:text-white/70 dark:text-white/70 font-light z-10">
              From concept to deployment, our solutions are crafted with
              precision, ensuring both creativity and dependability.
            </p>
          </div>
          <div className="relative group dark:bg-[#212121] w-full lg:w-[25%] min-h-[160px] lg:h-[250px] p-6 rounded-md flex flex-col justify-between items-start hover:transform hover:-translate-y-3 transition-all duration-300 bg-off-white hover:bg-gradient-to-bl from-yellow-900 to-amber-500">
            <h3 className="lg:text-[16px] text-[14px] group-hover:text-white dark:text-white font-normal z-10">
              04 - Scalable Digital Solutions
            </h3>
            <p className="lg:text-[16px] text-[14px] group-hover:text-white/70 dark:text-white/70 font-light z-10">
              Whether you’re a startup or an established enterprise, we create
              technology that grows with your business.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex-col gap-10 lg:px-20 py-5 lg:py-20 flex justify-center items-center px-[20px]">
        <div className="w-full flex flex-col gap-2 lg:gap-20 lg:flex-row justify-between items-center ">
          <h1 className="font-normal dark:text-white text-[32px] md:text-[50px] text-center lg:text-start lg:text-[70px] lg:w-[60%] 2xl:w-[40%] leading-[1.3em]">
            A Team Of Experts You Can Trust
          </h1>
          <p className="text-core-gray text-light 2xl:w-[20%] dark:text-off-white/70">
            Behind every successful project at CoreX is our team of highly
            skilled and dedicated professionals.
          </p>
        </div>
      </div>
      <TeamCarousal />
    </div>
  );
};

export default page;
