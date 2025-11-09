"use client";

import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import moment from "moment";
import { useParams } from "next/navigation";
import IMG from "@/public/assets/about-page-section-3-column-image-1.webp";
import Projects from "@/data/portfolio.json";


const PortfolioDetailPage = () => {
  const params = useParams();
  const {id} = params;

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`http://localhost:8000/api/projects/${id}`)
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Failed to fetch project");
  //       return res.json();
  //     })
  //     .then((data) => setProject(data))
  //     .catch((err) => setError(err.message))
  //     .finally(() => setLoading(false));
  // }, [id]);

  const project = Projects.find((p) => p.id.toString() === id);

  if (!project) return <p className="text-center py-20">Project not found</p>;

  return (
    <div className="w-full h-full py-20 flex justify-center items-center flex-col">
      <div
        className="w-full flex justify-end items-start bg-cover bg-no-repeat bg-center min-h-[500px] relative flex-col px-20 py-10"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="text-[50px] font-bold text-white z-10">
          {project.title}
        </h1>
        <p className="z-10 text-white text-[24px] font-light">
          {project.author} — {moment(project.date).format("DD-MM-YY")}
        </p>
      </div>

      <div className="flex flex-col px-20 py-10 w-full justify-center items-start gap-10">
        <p className="text-core-gray text-[17px] font-light dark:text-off-white/70">
          {project.content}
        </p>

        <div className="flex justify-center lg:justify-start items-center">
          <a
            href={
              project.link
                ? project.link.startsWith("http")
                  ? project.link
                  : `https://${project.link}`
                : "#"
            }
            target="_blank"
            className="group px-[20px] py-[15px] dark:hover:bg-white dark:hover:text-text cursor-pointer hover:bg-secondary rounded-md flex justify-center items-center mt-6 font-normal hover:text-white bg-primary transition-all duration-300 text-center"
          >
            Get Started
            <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
              <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
