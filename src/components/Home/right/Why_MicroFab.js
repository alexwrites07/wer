import React from "react";
import Question from "../../../assets/Icons/Question.svg";
import Case from "../../../assets/Icons/Case.svg";

const WhyMicrofab = () => {
  return (
    <div className="w-full md:w-[400px] md:h-[116px] ml-0 mr-0 md:mr-6 bg-[#cdd7d8] rounded-[16px] flex flex-col overflow-hidden">
      {/* top */}
      <div className="md:flex md:flex-col md:h-[50%] md:w-[40%] h-[40%] w-[45%] mt-[5px] ml-[5px] ">
        <div className="md:rounded-[30px] rounded-[20px] p-2 md:p-0 bg-white flex flex-row place-items-center gap-1">
          <div className="rounded-full bg-[#8aa6aa] md:m-2">
            <img className="" alt="question" src={Question}></img>
          </div>
          Why MicroFab?
        </div>
      </div>

      {/* down */}
      <div className="flex flex-row relative justify-between">
        <p className="md:text-[20px] font-bold md:p-1 custom-font md:mt-0 mt-8 ml-3 place-content-center">
          4+ Decades of Industry <br></br> Experience
        </p>
        <img src={Case} alt="case" className="md:h-[63%]"></img>
      </div>
    </div>
  );
};

export default WhyMicrofab;
