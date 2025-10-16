'use client'
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Lottie from "lottie-react";
import Team from "@/public/assets/lottie/Team.json"
import Company from "@/public/assets/lottie/Company employees sharing thoughts and ideas.json"
import Business from "@/public/assets/lottie/Business woman.json"
import Interview from "@/public/assets/lottie/Interview..json";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="flex flex-col lg:flex-row justify-between items-start pt-20 lg:pt-40 pb-20 lg:px-20 gap-20">
        <div className="w-[50%] flex flex-col justify-start items-start gap-4">
          <h1 className="font-bold text-[32px] md:text-[50px] dark:text-white text-center lg:text-start leading-[1.3em]">
            Website Development
          </h1>
          <div className="flex flex-col gap-6">
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              At CoreX we specialize in building modern, high-performance
              websites that combine cutting-edge technology with stunning
              design. Our expertise includes React.js and Next.js development
              with Tailwind CSS for lightning-fast, responsive, and visually
              appealing web experiences.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              We also create WordPress websites that are easy to manage, secure,
              and fully optimized for SEO. For businesses looking to sell
              online, our WooCommerce e-commerce solutions offer powerful
              features, secure payment integration, and a smooth shopping
              experience to help you grow your sales.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              Whether you need a custom web application, a business website, or
              a feature-rich e-commerce store, we deliver scalable, secure, and
              SEO-optimized solutions that work perfectly across devices. With
              our blend of technical expertise and creative design, we ensure
              your website not only looks great but also drives results.
            </p>
          </div>
          {/* <div className="flex justify-center lg:justify-start items-center">
            <button className="group px-[20px] py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center">
              Get Started
              <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </div>
            </button>
          </div> */}
        </div>
        <div className="flex w-[50%] justify-center items-center">
          <Lottie
            animationData={Team}
            autoPlay
            loop
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start py-20 lg:px-20 gap-20">
        <div className="flex w-[50%] justify-center items-center">
          <Lottie
            animationData={Business}
            autoPlay
            loop
            className="w-full object-cover"
          />
        </div>
        <div className="flex w-[50%] flex-col justify-start items-start gap-4">
          <h1 className="font-bold text-[32px] md:text-[50px] text-center lg:text-start leading-[1.3em] dark:text-white">
            Mobile App Development
          </h1>
          <div className="flex flex-col gap-6">
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              At CoreX we create high-performance, cross-platform mobile
              applications using React Native — delivering a native app
              experience on both iOS and Android with a single, efficient
              codebase.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              Our apps are designed to be fast, responsive, and user-friendly,
              with smooth performance and modern UI/UX tailored to your brand.
              Whether you need an e-commerce app, delivery service app, booking
              platform, or a custom business application, we build solutions
              that are scalable, secure, and future-ready.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              With React Native, we ensure faster development, cost efficiency,
              and seamless integration of advanced features like push
              notifications, GPS tracking, and payment gateways. From concept to
              launch, we handle the entire process — including design,
              development, testing, and ongoing support — to help you deliver
              the best mobile experience to your customers.
            </p>
          </div>
          {/* <div className="flex justify-center lg:justify-start items-center">
            <button className="group px-[20px] py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center">
              Get Started
              <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </div>
            </button>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start py-20 lg:px-20 gap-20">
        <div className="flex w-[50%] flex-col justify-start items-start gap-4">
          <h1 className="font-bold text-[32px] md:text-[50px] text-center lg:text-start leading-[1.3em] dark:text-white">
            E-Commerce Solutions
          </h1>
          <div className="flex flex-col gap-6">
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              We specialize in creating powerful, secure, and user-friendly
              e-commerce websites that help businesses sell more online. Whether
              you need a custom React/Next.js store or a WordPress WooCommerce
              solution, our websites are fast, mobile-responsive, and designed
              to maximize conversions.
            </p>
          </div>
          <h1 className="font-bold text-[32px] md:text-[50px] text-center lg:text-start leading-[1.3em] dark:text-white">
            WooCommerce Solutions
          </h1>
          <div className="flex flex-col gap-6">
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              As part of our e-commerce expertise, we offer professional
              WooCommerce development for businesses that want a flexible and
              easy-to-manage online store. WooCommerce, the most popular
              WordPress e-commerce platform, allows you to sell physical or
              digital products with complete control over design, features, and
              scalability.
            </p>
          </div>
          {/* <div className="flex justify-center lg:justify-start items-center">
            <button className="group px-[20px] py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center">
              Get Started
              <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </div>
            </button>
          </div> */}
        </div>
        <div className="flex w-[50%] justify-center items-center">
          <Lottie
            animationData={Interview}
            autoPlay
            loop
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start py-20 lg:px-20 gap-20">
        <div className="flex w-[50%] justify-center items-center">
          <Lottie
            animationData={Company}
            autoPlay
            loop
            className="w-full object-cover"
          />
        </div>
        <div className="flex w-[50%] flex-col justify-start items-start gap-4">
          <h1
            className="font-bold text-[32px] md:text-[50px] text-center lg:text-start leading-[1.3em] dark:text-white
          "
          >
            UI/UX Design Services
          </h1>
          <div className="flex flex-col gap-6">
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              At CoreX we specialize in UI/UX design that blends creativity,
              functionality, and modern trends to deliver exceptional digital
              experiences. Our goal is to create visually stunning, intuitive,
              and user-friendly designs for websites, mobile applications, and
              e-commerce platforms that not only look amazing but also enhance
              usability and customer satisfaction.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              We follow a user-centered design process — starting from research
              and wireframing to prototyping and final design — ensuring every
              element aligns with your brand identity and business goals.
              Whether you need a sleek corporate website, a high-converting
              e-commerce store, or an engaging mobile app, our designs are
              responsive, accessible, and optimized for all devices.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              With expertise in tools and frameworks like Figma, Tailwind CSS,
              React, and WordPress, we create UI/UX solutions that improve
              navigation, increase engagement, and drive conversions. We turn
              ideas into interfaces that your users will love.
            </p>
          </div>
          {/* <div className="flex justify-center lg:justify-start items-center">
            <button className="group px-[20px] py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center">
              Get Started
              <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </div>
            </button>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start py-20 lg:px-20 gap-20">
        <div className="flex w-[50%] flex-col justify-start items-start gap-4">
          <h1 className="font-bold text-[32px] md:text-[50px] text-center lg:text-start leading-[1.3em] dark:text-white">
            Maintenance & Support
          </h1>
          <div className="flex flex-col gap-6">
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              We provide reliable website and application maintenance and
              support services to keep your digital platforms running smoothly,
              securely, and efficiently. Our goal is to ensure your website or
              app is always up-to-date, optimized, and free from technical
              issues, so you can focus on growing your business.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              Our maintenance services include regular updates, performance
              optimization, security monitoring, bug fixes, backup management,
              and content updates. Whether your website is built with React,
              Next.js, Tailwind CSS, WordPress, or WooCommerce, we ensure it
              performs flawlessly across all devices and browsers.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              With our ongoing support, you get quick response times, proactive
              monitoring, and expert assistance whenever you need it. We offer
              both monthly maintenance plans and on-demand support to suit your
              business needs, ensuring maximum uptime and a hassle-free
              experience for your customers.
            </p>
            <p className="lg:text-[16px] text-[14px] text-black font-light dark:text-off-white/70">
              Choose CoreX for dependable maintenance and support that keeps
              your digital presence secure, fast, and ready for growth.
            </p>
          </div>
          {/* <div className="flex justify-center lg:justify-start items-center">
            <button className="group px-[20px] py-[15px] cursor-pointer bg-secondary rounded-md flex justify-center items-center mt-6 font-normal text-white hover:bg-primary transition-all duration-300 text-center">
              Get Started
              <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </div>
            </button>
          </div> */}
        </div>
        <div className="flex w-[50%] justify-center items-center">
          <Lottie
            animationData={Team}
            autoPlay
            loop
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
