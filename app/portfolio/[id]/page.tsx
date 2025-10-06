import Portfolio from "@/data/portfolio.json";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface Portfolio {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
  link: string;
}

interface PortfolioDetailPageProps {
  params: {
    id: string;
  };
}

const PortfolioDetailPage = ({ params }: PortfolioDetailPageProps) => {
  const project = Portfolio.find((p) => p.id === params.id);

  if (!project) {
    return <p className="text-center py-20">Project not found</p>;
  }

  return (
    <div className="w-full h-full py-20 flex justify-center items-center flex-col">
      <div
        className="w-full flex justify-end items-start bg-cover bg-no-repeat bg-center min-h-[500px] relative flex-col px-20 py-10"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
        <h1 className="text-[50px] font-bold text-white z-10">
          {project.title}
        </h1>
        <p className="z-10 text-white text-[24px] font-light">
          {project.author} — {project.date}
        </p>
      </div>
      <div className="flex flex-col px-20 py-10 w-full justify-center items-start gap-10">
        <p className="text-core-gray text-[17px] font-light">
          {project.content}
        </p>
        <div className="flex justify-center lg:justify-start items-center">
          <Link
            href={
              project.link.startsWith("http")
                ? project.link
                : `https://${project.link}`
            }
            target="_blank"
            className="group px-[20px] py-[15px] cursor-pointer hover:bg-secondary rounded-md flex justify-center items-center mt-6 font-normal hover:text-white bg-primary transition-all duration-300 text-center"
          >
            Get Started
            <div className="ml-2 transform transition-transform duration-300 group-hover:rotate-45">
              <FiArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
