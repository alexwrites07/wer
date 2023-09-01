import React from "react";
import Machine from "../../../assets/Machine_Frame_Images/Machine.svg";
import "../../../App.css";
import WFS_Card from "./WFS_Card";

const Machine_Frame = () => {
  return (
    <div className="w-full h-full md:w-[68%] md:h-[90%] md:mt-[75px] mt-[50px] md:rounded-[20px] bg-gradient-to-r from-[#e1e1e1] to-[#8ca7ab] border-black md:m-4 mb-0 overflow-clip">
      <div className="relative w-full h-full z-0">
        <div className="absolute md:top-[30%] md:left-[65%] z-10 top-[28%] left-[45%]">
          <WFS_Card />
        </div>
        <div className="absolute md:top-[50%] md:left-[38%] z-10 top-[44%] left-[4%]">
          <WFS_Card />
        </div>
        <div className="absolute md:top-[83%] md:left-[70%] z-10 top-[63%] left-[44%]">
          <WFS_Card />
        </div>
        <div className="absolute md:top-[93%] md:left-[20%] z-10 top-[63%] left-[44%]">
          <WFS_Card />
        </div>

        <img
          src={Machine}
          alt="Machine"
          className="absolute md:w-[90%] md:h-[90%] w-[100%] h-[100%] md:right-0 md:bottom-0"
        />
        <div className="hidden md:block absolute md:top-[54px] md:left-[33px] w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-[#dcdede] to-[#cbd2d3]"></div>

        <p className="hidden md:block w-[554px] h-[316px] absolute left-[52px] top-[52px] text-white font-bold md:text-[64px] md:leading-[79px] tracking-tight text-left">
          <span className="highlight-text ">
            Providing Industry Solutions <br /> from the Start
          </span>
        </p>
      </div>
    </div>
  );
};

export default Machine_Frame;
