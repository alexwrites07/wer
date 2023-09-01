import img1 from "../../../assets/Icons/air.svg";
import img2 from "../../../assets/Icons/bottle.svg"; // Assuming img2 is the path to your second image
import arrow from "../../../assets/Icons/arrow.svg";
import "../../../App.css";

export default function BFS({ content }) {
  const imageToShow = content === "BFS" ? img1 : content === "FFS" ? img2 : null;

  return (
    <div className="custom-font w-[90%] h-[120px] md:w-[125%] md:h-[50%] md:mr-2 mr-10 bg-[#cdd7d8] rounded-[16px] mt-[8px] flex flex-col overflow-hidden">
      <div className="h-[100%] flex flex-row items-center place-items-center justify-center gap-8">
        <div className="h-[25px] w-[25px] bg-[#8aa6aa] rounded-full flex justify-center">
          <img src={imageToShow} alt="" className="w-[20px]" />
        </div>
        <p className="text-[20px]">{content}</p>
        <div className="h-[25px] w-[25px] bg-[#8aa6aa] rounded-full flex justify-center place-items-center">
          <img src={arrow} alt="" className="h-[20px] w-[20px]" />
        </div>
      </div>
    </div>
  );
}
