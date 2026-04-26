"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        const counterEl = document.querySelector(".preloader-counter");
        if (counterEl) {
          counterEl.textContent = Math.round(counterObj.value) + "%";
        }
      },
    })
      .to(
        ".preloader-text",
        {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.2"
      )
      .to(".preloader-layer", {
        yPercent: -100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.inOut",
      });
  }, { scope: container });

  if (!isLoading) return null;

  return (
    <div ref={container} className="fixed inset-0 z-[100] pointer-events-none">
      <div className="preloader-layer absolute inset-0 bg-[#0066FF] z-[100]" />
      <div className="preloader-layer absolute inset-0 bg-white z-[101]" />
      <div className="preloader-layer absolute inset-0 bg-[#0f0f0f] z-[102] flex flex-col items-center justify-center pointer-events-auto">
        <div className="preloader-text flex flex-col items-center z-10">
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter">
            CoreX
          </h1>
          <p className="text-gray-400 mt-2 text-lg font-light">
            Digital Experiences
          </p>
          <div className="preloader-counter text-white font-mono text-3xl mt-8">
            0%
          </div>
        </div>
      </div>
    </div>
  );
}
