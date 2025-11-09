import Lottie from "lottie-react";
import React, { useEffect, useState, useRef } from "react";

const LazyLottie = ({ path }: { path: string }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !animationData) {
      import(`@/public/assets/lottie/${path}`).then((data) => {
        setAnimationData(data.default);
      });
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center">
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop
          autoPlay
          className="w-full max-w-[500px] object-cover"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-200 dark:bg-[#2a2a2a] animate-pulse rounded-md" />
      )}
    </div>
  );
};

export default LazyLottie;
