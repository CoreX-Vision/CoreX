import Image from "next/image";
import React from "react";
import Abstract from "@/public/assets/Abstract.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full static bottom-0 flex flex-col justify-center items-center overflow-hidden gap-0 dark:bg-[#0D0D0D] bg-white pt-10 rounded-2xl px-[20px] lg:px-20">
      <div className="w-full flex min-h-[360px] bg-white border  dark:bg-[#0D0D0D] border-text/5 dark:border-white/40 rounded-md relative overflow-hidden">
        <div className="w-full flex flex-col gap-6 p-10 justify-between z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-2 lg:items-center z-10">
            <p className="font-medium  dark:text-white">Company</p>
            <ul className="flex gap-6 flex-col lg:flex-row">
              <li>
                <a
                  href="/"
                  className="text-core-gray dark:text-off-white/70 text-[16px] font-light hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-core-gray dark:text-off-white/70 text-[16px] font-light hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-core-gray dark:text-off-white/70 text-[16px] font-light hover:text-primary"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-core-gray dark:text-off-white/70 text-[16px] font-light hover:text-primary"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full h-[1px] bg-text/10 dark:bg-off-white/50 z-10" />
          <div className="flex flex-col lg:flex-row justify-between items-start gap-2 lg:items-center z-10">
            <p className="font-medium dark:text-white">Legal</p>
            <ul className="flex flex-col lg:flex-row gap-6">
              <li>
                <a
                  href="#"
                  className="text-core-gray dark:text-off-white/70 text-[16px] font-light underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-core-gray dark:text-off-white/70 text-[16px] font-light underline"
                >
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full h-[1px] bg-text/10 dark:bg-off-white/50 z-10" />

          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center z-10">
            <p className="text-sm dark:text-white">
              Copyright © 2025. All Rights Reserved.
            </p>
            <ul className="flex gap-6 text-xl dark:text-off-white/70 text-core-gray">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61579803335718"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/108993044/admin/dashboard/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/corex_vision/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={Abstract}
          alt="Abstract Background"
          className="absolute left-0 top-0 bottom-0 w-[800px] opacity-5 object-cover"
        />
      </div>
      <h1 className="font-extrabold text-[100px] md:text-[200px] lg:text-[380px] 2xl:text-[460px] text-text -mt-10 lg:-mt-20 corex max-h-[120px] md:max-h-[190px] lg:max-h-[350px] 2xl:max-h-[420px]">
        Core X
      </h1>
    </div>
  );
};

export default Footer;