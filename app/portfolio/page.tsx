"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import moment from "moment";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseconfig";
import Projects from "@/data/portfolio.json";

const PortfolioPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<typeof Projects>([]);
  const skeletonCount = Projects.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(Projects);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  return (
    <div className="w-full h-full py-20 flex justify-center items-center flex-col">
      <div className="w-full lg:px-20 px-5 pb-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center gap-6 pt-6"
              >
                {/* Image Skeleton */}
                <div className="w-full rounded-xl h-[250px] skeleton" />

                {/* Text Skeleton */}
                <div className="flex flex-col min-h-[160px] gap-3 mt-3 justify-start items-center text-center w-full">
                  <div className="h-5 w-3/4 rounded skeleton" />
                  <div className="h-4 w-1/2 rounded skeleton" />
                  <div className="h-3 w-full rounded skeleton" />
                  <div className="h-3 w-full rounded skeleton" />
                  <div className="h-4 w-1/3 rounded mt-2 skeleton" />
                </div>
              </div>
            ))
          : data.map((portfolio) => (
              <div
                key={portfolio.id}
                className="flex flex-col justify-between items-center gap-6 pt-6"
              >
                <div className="overflow-hidden w-full rounded-xl">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    width={500}
                    height={300}
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                    priority
                    className="w-full max-h-[250px] object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col min-h-[160px] gap-3 mt-3 justify-start items-center text-center">
                  <h3 className="text-lg font-semibold dark:text-white">
                    {portfolio.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-white/55">
                    {portfolio.author} —{" "}
                    {moment(portfolio.date).isValid()
                      ? moment(portfolio.date).format("MM-DD-YY")
                      : "Unknown Date"}
                  </p>
                  <p className="text-core-gray text-[14px] font-light dark:text-off-white/70">
                    {portfolio.content.split(" ").slice(0, 20).join(" ")}
                    {portfolio.content.split(" ").length > 20 && "..."}
                  </p>
                  <Link
                    href={`/portfolio/${portfolio.id}`}
                    className="text-[14px] group text-primary font-light flex gap-2 justify-center items-center hover:text-secondary dark:hover:text-off-white"
                  >
                    Read More{" "}
                    <div className="transform transition-transform duration-300 group-hover:rotate-45">
                      <FiArrowUpRight />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
