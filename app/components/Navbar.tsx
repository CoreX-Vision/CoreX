"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/public/assets/Logo2.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40 || currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setIsScrolled(currentScrollY > 40);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="w-full flex justify-center items-center relative">
      <div
        className={`w-full fixed top-0 z-50 transition-transform duration-300 lg:px-20 ${
          isScrolled ? "bg-white" : "bg-background"
        } ${showNavbar ? "translate-y-0 shadow-sm" : "-translate-y-full"}`} // <-- hide/show
      >
        <div className="mx-auto py-3 flex justify-between items-center px-[20px] lg:px-0">
          {/* Logo */}
          <Image
            src={Logo}
            alt="CoreX Vision Company logo"
            className={`w-16 lg:w-32 h-auto object-cover cursor-pointer ${
              isScrolled ? "dark:invert-0" : "dark:brightness-0 dark:invert"
            }`}
            onClick={() => router.push("/")}
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-around items-center gap-6">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li key={index} className="relative group">
                  <a
                    href={link.href}
                    className={`md:px-4 md:py-3  flex items-center gap-2 p-2 transition-all duration-500 rounded-sm text-[16px]
                    ${
                      isActive
                        ? isScrolled
                          ? "bg-secondary text-white dark:bg-black dark:text-white"
                          : "bg-secondary text-white dark:text-black/80 dark:bg-white"
                        : isScrolled
                        ? "text-text hover:bg-primary hover:text-text dark:text-black"
                        : "text-text hover:bg-primary hover:text-text dark:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex">
            <Link
              href="/contact"
              className="group gap-1 px-5 py-3 cursor-pointer dark:hover:bg-white dark:hover:text-text bg-primary rounded-md flex justify-center items-center font-normal text-text hover:text-white hover:bg-secondary transition-all duration-300 text-center"
            >
              Book a Call
              <div className="transform transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden text-text ${
              isScrolled ? "dark:text-black" : "dark:text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/10 bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-[200px] z-40 transform bg-white dark:bg-black transition-transform duration-500 
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col items-start space-y-6 mt-20 px-6">
            <button
              className="lg:hidden text-secondary dark:text-white absolute top-6 right-6"
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
                      ? "bg-secondary text-white dark:text-black dark:bg-white"
                      : "bg-transparent text-secondary dark:text-white"
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
