"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Portfolio from "@/data/portfolio.json";
import { FiArrowRight } from "react-icons/fi";

const PortfolioPage: React.FC = () => {
  return (
    <div className="w-full h-full py-20 flex justify-center items-center flex-col">
      <div className="w-full lg:px-20 px-5 pb-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Portfolio.map((portfolio) => (
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
                {portfolio.author} — {portfolio.date}
              </p>
              <p className="text-core-gray text-[14px] font-light">
                {portfolio.content.split(" ").slice(0, 20).join(" ")}
                {portfolio.content.split(" ").length > 20 && "..."}
              </p>
              <Link href={`/portfolio/${portfolio.id}`} className="text-[14px] text-primary fontlight flex gap-2 justify-center items-center hover:text-secondary">Read More <FiArrowRight /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
