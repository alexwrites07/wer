import arrow_right from "../../../assets/Home_article/ArrowRight.svg";

export default function ArticleCard({ content, sub, img }) {
  return (
    <div className="font-mono flex flex-col rounded-lg shadow-md">
      <div>
        <img src={img} alt="Article Thumbnail" />
        <p className="text-[#8AA6AA]">{content}</p>
        <p className="text-gray-500">{sub}</p>
      </div>
      <div className="flex flex-row place-items-center gap-3">
        <p className="text-[#8AA6AA]">Read more</p>
        <img src={arrow_right} className="bg-[#8AA6AA] h-6 rounded-lg"></img>
      </div>
    </div>
  );
}
