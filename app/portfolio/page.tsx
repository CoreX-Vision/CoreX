"use client";
import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/util/types";
import { FiArrowUpRight } from "react-icons/fi";
import moment from "moment";
import { useEffect, useState } from "react";

const PortfolioPage = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [loading, setLoading] = useState(true);
  const skeletonCount = projects.length;

  useEffect(() => {
    fetch("http://localhost:8000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => setLoading(false), 1500);
      });
  }, []);

  return (
    <div className="w-full h-full py-20 flex justify-center items-center flex-col">
      <div className="w-full lg:px-20 px-5 pb-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center gap-6 pt-6 animate-pulse"
              >
                <div className="overflow-hidden w-full rounded-xl h-[250px] bg-gray-200"></div>
                <div className="flex flex-col min-h-[160px] gap-3 mt-3 justify-start items-center text-center w-full">
                  <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-1/3 bg-gray-300 rounded mt-2"></div>
                </div>
              </div>
            ))
          : projects.map((portfolio) => (
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
                    className="w-full max-h-[250px] object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col min-h-[160px] gap-3 mt-3 justify-start items-center text-center">
                  <h3 className="text-lg font-semibold">{portfolio.title}</h3>
                  <p className="text-sm text-gray-500">
                    {portfolio.author} —{" "}
                    {moment(portfolio.created_at).format("MM-DD-YY")}
                  </p>
                  <p className="text-core-gray text-[14px] font-light">
                    {portfolio.content.split(" ").slice(0, 20).join(" ")}
                    {portfolio.content.split(" ").length > 20 && "..."}
                  </p>
                  <Link
                    href={`/portfolio/${portfolio.id}`}
                    className="text-[14px] group text-primary fontlight flex gap-2 justify-center items-center hover:text-secondary"
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
