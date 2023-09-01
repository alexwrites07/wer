import bot from "../../../assets/Icons/bot.svg";

export default function Moulds() {
  return (
    <div>
      <div className="custom-font w-[280%] h-[246px] md:w-[190px] md:h-[226px] mr-0 md:mr-6 bg-[#cdd7d8] rounded-[16px] mt-[8px] flex flex-col overflow-hidden">
        {/* top */}
        <div className="flex flex-row w-[100%] justify-between">
          <div className="h-[100%] w-[49%] bg-[#8aa6aa] rounded-r-[20px]"></div>
          <div className="h-[90px] w-[49%] bg-[#b9c7c9] rounded-l-[20px]"></div>
        </div>

        {/* middle */}
        <div className="flex flex-row w-[100%] justify-between">
          <div className="h-[70px] w-[16%] bg-[#8aa6aa] rounded-r-[20px]"></div>
          <div className="h-[70px] w-[69%] bg-white rounded-[20px] flex flex-col justify-center place-items-center font-bold">
            <img src={bot} alt="bot" className="h-[20px] w-[60px]"></img>
            <p>150+</p>
            <p>Moulds</p>
          </div>
          <div className="h-[70px] w-[16%] bg-[#b9c7c9] rounded-l-[20px]"></div>
        </div>

        {/* bottom */}
        <div className="flex flex-row w-[100%] justify-between">
          <div className="h-[100%] w-[49%] bg-[#b9c7c9] rounded-r-[20px]"></div>
          <div className="h-[90px] w-[49%] bg-[#8aa6aa] rounded-l-[20px]"></div>
        </div>
        {/* <div className="flex flex-col justify-between gap-1">
                    <div className="flex flex-row">
                        <div className="h-[130px] w-[150px] bg-[#8aa6aa] rounded-r-[20px]"></div>
                        <div className="h-[130px] w-[150px] bg-[#b9c7c9] rounded-l-[20px] ml-[2px]"></div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div className="h-[100px] w-[80px] bg-[#8aa6aa] rounded-r-[20px]"></div>
                        <div className="h-[100px] w-[180px] bg-white rounded-[20px] ml-[2px] font-bold text-[20px] flex flex-col justify-center items-center">
                            <img src={bot} className='h-[30px] w-[60px]'></img>
                            <p>150+</p>
                            <p>Moulds</p>
                        </div>
                        <div className="h-[100px] w-[80px] bg-[#b9c7c9] rounded-l-[20px] ml-[2px]"></div>
                    </div>
                    <div className="flex flex-row">
                        <div className="h-[130px] w-[150px] bg-[#b9c7c9] rounded-r-[20px]"></div>
                        <div className="h-[130px] w-[150px] bg-[#8aa6aa] rounded-l-[20px] ml-[2px]"></div>
                    </div>

                </div> */}
      </div>
    </div>
  );
}
