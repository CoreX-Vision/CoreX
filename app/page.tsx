"use client";
import React from "react";
import Image from "next/image";
import Hero from "@/public/assets/corex-hero-image.png";
import { RightUp } from "./components/Icon";
import secondHero from "@/public/assets/home-section-2.webp";
import secondHerosub from "@/public/assets/about-page-hero-image.webp";
import TestimonialCarousel from "./components/Testimonial";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-full lg:p-20 pt-[100px] pb-[20px] lg:pt-40 lg:h-screen flex justify-center items-start">
        <div className="lg:max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-10 px-[20px] lg:px-0">
          <div className="lg:w-[70%] w-full flex flex-col gap-6">
            <h1 className="text-text font-extrabold text-[32px] lg:text-[70px] leading-[1.3em] lg:text-start text-center">
              Build Modern Scalable and beautiful Digital Experiences
            </h1>
            <p className="text-core-gray font-light text-[20px] mt-2 w-[90%] lg:text-start text-center">
              At CoreX Vision – Sri Lanka, we create modern, scalable digital
              experiences. From websites to mobile apps, our team uses the
              latest technologies like React, Next.js, WordPress, and React
              Native to bring your ideas to life.
            </p>
            <div className="flex justify-center lg:justify-start items-center">
              <button className="group px-[20px] py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center">
                Get Started
                <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                  <RightUp color={"#fff"} />
                </div>
              </button>
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent animate-scroll-glow"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:p-20 py-[20px] justify-center items-center lg:items-start">
        <div className="lg:max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-10 px-[20px] lg:px-0">
          <div className="lg:w-[70%] w-full flex flex-col justify-center items-center gap-6 lg:items-start">
            <div className="px-6 py-2 bg-off-white w-[200px] flex items-center justify-center rounded-md mb-4">
              Exclusive Services
            </div>
            <h1 className="text-text font-extrabold text-[32px] lg:text-[50px] leading-[1.3em] lg:w-[500px] lg:text-start text-center">
              A Team Of Experts You Can Trust
            </h1>
            <p className="text-core-gray font-light text-[20px] mt-2 w-[90%] lg:text-start text-center">
              Himenaeos mus porttitor pretium rutrum quisque efficitur quisque
              libero tristique ultricies himenaeos donec ad tincidunt magna.
              Condimentum netus feugiat risus porttitor viverra, suscipit
              sociosqu bibendum rutrum placerat cras aliquam.
            </p>
            <div className="flex justify-start items-center gap-6 flex-col sm:flex-row">
              <button className="group px-[20px] py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center">
                Get Started Now
                <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45 ">
                  <RightUp color={"#fff"} />
                </div>
              </button>
              <button className="group px-[20px] py-[15px] cursor-pointer rounded-md flex justify-center items-center mt-6 font-normal text-black hover:text-primary transition-all duration-300">
                View Our Services
                <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                  <RightUp color={""} />
                </div>
              </button>
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
      <div className="lg:max-w-7xl flex py-[20px] lg:py-20 justify-center items-center flex-col gap-16 px-[20px] lg:px-0">
        <h1 className="lg:text-[50px] text-[32px] text-text font-bold">
          Our Application Features.
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="bg-off-white hover:bg-primary/10 hover:transform hover:-translate-y-3 transition-all duration-300 lg:w-[25%] min-h-[320px] flex flex-col justify-start items-start p-6 gap-4 rounded-md">
            <p className="font-bold text-[16px] text-text">
              01 - Tailored Solutions
            </p>
            <h2 className="font-black text-[18px] text-text">
              Custom Software for Your Unique Business
            </h2>
            <p className="text-core-gray font-light text-[16px]">
              We understand that every business is unique, with its own
              processes, goals, and challenges. Instead of giving you generic
              software, we craft custom applications designed specifically for
              your needs. This means your tools will
            </p>
          </div>
          <div className="bg-off-white hover:bg-primary/10 hover:transform hover:-translate-y-3 transition-all duration-300 lg:w-[25%] min-h-[320px] flex flex-col justify-start items-start p-6 gap-4 rounded-md">
            <p className="font-bold text-[16px] text-text">
              02 - Smooth Communication
            </p>
            <h2 className="font-black text-[18px] text-text">
              Stay Connected, Stay Confident
            </h2>
            <p className="text-core-gray font-light text-[16px]">
              A successful project isn’t just about coding; it’s about keeping
              everyone on the same page. We make sure you feel confident and
              involved throughout the development process. Our approach includes
            </p>
          </div>
          <div className="bg-off-white hover:bg-primary/10 hover:transform hover:-translate-y-3 transition-all duration-300 lg:w-[25%] min-h-[320px] flex flex-col justify-start items-start p-6 gap-4 rounded-md">
            <p className="font-bold text-[16px] text-text">
              03 - Modern Design Experience
            </p>
            <h2 className="font-black text-[18px] text-text">
              Design That Delights and Performs
            </h2>
            <p className="text-core-gray font-light text-[16px]">
              Design isn’t just about looking good—it’s about creating a
              seamless experience for your users. We focus on
            </p>
          </div>
          <div className="bg-off-white hover:bg-primary/10 hover:transform hover:-translate-y-3 transition-all duration-300 lg:w-[25%] min-h-[320px] flex flex-col justify-start items-start p-6 gap-4 rounded-md">
            <p className="font-bold text-[16px] text-text">
              04 - Cross-Platform Development
            </p>
            <h2 className="font-black text-[18px] text-text">
              Reach Users Everywhere, Effortlessly
            </h2>
            <p className="text-core-gray font-light text-[16px]">
              In today’s digital world, your users access content from multiple
              devices. Our cross-platform development ensures that your
              application
            </p>
          </div>
        </div>
      </div>
      <div className="lg:max-w-7xl flex py-[30px] lg:py-20 justify-center items-center flex-col gap-16 px-[20px] lg:px-0">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:items-end gap-6">
          <h1 className="text-[32px] lg:text-[70px] text-text font-extrabold leading-[1.3em] lg:w-[67%] text-center lg:text-start">
            Successful Solutions That Drive Your Business Forward
          </h1>
          <button className="group px-[20px] w-[150px] py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center">
            View All
            <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
              <RightUp color={"#fff"} />
            </div>
          </button>
        </div>
        <div className="w-full justify-between items-center flex flex-col lg:flex-row gap-6">
          <div>
            <p className="text-text text-[45px] font-bold text-center lg:text-start">
              98%
            </p>
            <p className="text-core-gray text-[18px] font-normal text-center lg:text-start">
              Client Satisfaction
            </p>
          </div>
          <div className="w-[70%]">
            <p className="text-core-gray text-[20px] font-normal">
              At CoreX Software, we deliver web and mobile applications that
              exceed expectations. Our clients experience smoother workflows and
              modern, responsive designs that elevate their brand.
            </p>
          </div>
          <div>
            <p className="text-core-gray text-[20px] font-normal">
              Oct 7, 2024
            </p>
          </div>
        </div>
        <div className="w-full justify-between items-center flex flex-col lg:flex-row gap-6">
          <div>
            <p className="text-text text-[45px] font-bold text-center lg:text-start">
              $1,500
            </p>
            <p className="text-core-gray text-[18px] font-normal text-center lg:text-start">
              Average Project Value
            </p>
          </div>
          <div className="w-[70%]">
            <p className="text-core-gray text-[20px] font-normal">
              We create solutions tailored to your business, from custom
              websites to mobile applications, ensuring value and ROI for every
              project.
            </p>
          </div>
          <div>
            <p className="text-core-gray text-[20px] font-normal">
              Sep 20, 2024
            </p>
          </div>
        </div>
        <div className="w-full justify-between items-center flex flex-col lg:flex-row gap-6">
          <div>
            <p className="text-text text-[45px] font-bold text-center lg:text-start">
              100+
            </p>
            <p className="text-core-gray text-[18px] font-normal text-center lg:text-start">
              Projects Completed
            </p>
          </div>
          <div className="w-[70%]">
            <p className="text-core-gray text-[20px] font-normal">
              Our experienced team has successfully launched over 100 projects,
              combining innovative technology with user-focused design.
            </p>
          </div>
          <div>
            <p className="text-core-gray text-[20px] font-normal">
              Aug 15, 2024
            </p>
          </div>
        </div>
      </div>
      <div className="lg:max-w-7xl flex py-20 justify-center items-center flex-col gap-16 px-[20px] lg:px-0">
        <h1 className="text-[32px] lg:text-[70px] font-bold text-text text-center leading-[1.3em]">
          Collaborating for Growth and Excellence
        </h1>
        <p className="text-core-gray text-[20px] font-normal text-center lg:w-[70%]">
          More than developers, we’re your strategic partners. We create
          meaningful, long-term relationships while crafting custom web and
          mobile applications that drive real impact.
        </p>
        {/* <TestimonialCarousel /> */}
      </div>
    </div>
  );
}
