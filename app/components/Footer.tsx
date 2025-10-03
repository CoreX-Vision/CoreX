import Image from "next/image";
import React from "react";
import Abstract from "@/public/assets/Abstract.png";

const Footer = () => {
  return (
    <div className="w-full static bottom-0 flex flex-col justify-center items-center overflow-hidden gap-0 bg-white pt-10 rounded-2xl">
      <div className="w-7xl flex min-h-[360px] bg-white border border-text/5 rounded-md relative overflow-hidden">
        <div className="w-full flex flex-col gap-6 p-10 justify-between z-10">
          <div className="flex justify-between items-center z-10">
            <p className="font-medium">Company</p>
            <ul className="flex gap-6">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="w-full h-[1px] bg-text/10 z-10" />
          <div className="flex justify-between items-center z-10">
            <p className="font-medium">Legal</p>
            <ul className="flex gap-6">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & conditions</a>
              </li>
            </ul>
          </div>

          <div className="w-full h-[1px] bg-text/10 z-10" />

          <div className="flex justify-between items-center z-10">
            <p className="text-sm">Copyright © 2025. All Rights Reserved.</p>
            {/* <ul className="flex gap-6 text-xl">
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul> */}
          </div>
        </div>
        <Image
          src={Abstract}
          alt="Abstract Background"
          className="absolute left-0 top-0 bottom-0 w-[800px] opacity-5 object-cover"
        />
      </div>
      <h1 className="font-extrabold text-[400px] text-text -mt-20 corex ">
        Core X
      </h1>
    </div>
  );
};

export default Footer;