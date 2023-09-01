import React from "react";
import ArticleCard from "./ArticleCard";
import img1 from "../../../assets/Home_article/article1.svg";
import img2 from "../../../assets/Home_article/article2.svg";
import img3 from "../../../assets/Home_article/article3.svg";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";

export default function HomeArticle() {
  const articles = [
    {
      content: "Blow-Fill-Seal Expands in Aseptic Filling, Vaccines",
      sub: "Blow-Fill-Seal, Technology ",
      img: img1,
    },
    {
      content:
        "Investing in Form-Fill-Seal Technology April 12, 2023 PAP-Q1-2023",
      sub: "Blow-Fill-Seal, Technology ",
      img: img2,
    },
    {
      content:
        "Investing in Form-Fill-Seal Technology April 12, 2023 PAP-Q1-2023",
      sub: "Blow-Fill-Seal, Technology ",
      img: img3,
    },
  ];

  return (
    <div className="font-mono w-full p-10 scroll-x-auto">
      <div className="flex flex-row justify-between pb-10 ">
        <p className="md:text-[25px] font-extrabold">Articles</p>
        <p className="md:block hidden text-[#8AA6AA]">View all</p>
      </div>

      <div className="w-full md:h-[300px] flex flex-col md:flex-row md:flex-wrap">
        <div className="md:w-1/2 w-full p-2">
          <ArticleCard
            content={articles[0].content}
            sub={articles[0].sub}
            img={articles[0].img}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
          <div className="md:w-full w-full p-2">
            <ArticleCard
              content={articles[1].content}
              sub={articles[1].sub}
              img={articles[1].img}
            />
          </div>
          <div className="w-full md:w-full p-2">
            <ArticleCard
              content={articles[2].content}
              sub={articles[2].sub}
              img={articles[2].img}
            />
          </div>
        </div>
      </div>
      <button className="mt-4 text-white bg-[#8AA6AA] w-full md:hidden p-4 rounded-lg flex flex-row justify-center place-items-center">
        <p className="">View all</p>
        <img src={arrow_right} className="bg-[#8AA6AA] h-6 rounded-lg"></img>
      </button>
    </div>
  );
}
