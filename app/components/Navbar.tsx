"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/public/assets/Logo2.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { RightUp } from "./Icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Service", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="w-full flex justify-center items-center relative">
      <div
        className={`w-full fixed top-0 z-50 transition-colors duration-500 lg:px-20 ${
          isScrolled ? "bg-white shadow-sm" : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto py-3 flex justify-between items-center px-[20px] lg:px-0">
          {/* Logo */}
          <Image
            src={Logo}
            alt="CoreX Vision Company logo"
            className="w-16 lg:w-32 h-auto object-cover"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-around items-center gap-6">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li key={index} className="relative group">
                  <a
                    href={link.href}
                    className={`md:px-4 md:py-3 p-2 transition-all duration-500 rounded-sm text-[16px] ${
                      isActive
                        ? "bg-secondary text-white"
                        : "text-text hover:bg-secondary hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                  {/* hover animation underline / bg grow */}
                  {/* <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-300 group-hover:w-full -z-10"></span> */}
                </li>
              );
            })}
          </ul>

          <div className="flex">
            <button className="group gap-1 px-5 py-3 cursor-pointer bg-primary rounded-md flex justify-center items-center font-normal text-text hover:text-white hover:bg-secondary transition-all duration-300 text-center">
              Book a Call
              <div className="transform transition-transform duration-300 group-hover:rotate-45">
                <RightUp color={"#fff"} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/10 bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)} // close when clicking outside
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-2/5 z-40 transform bg-white transition-transform duration-500 
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col items-start space-y-6 mt-20 px-6">
            <button
              className="lg:hidden text-secondary absolute top-6 right-6"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`px-4 py-2 rounded-md transition-all duration-300 text-center ${
                    isActive
                      ? "bg-secondary text-white"
                      : "bg-white text-secondary"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
