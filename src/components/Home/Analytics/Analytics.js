import "../../../App.css";

export default function Analytics() {
  return (
    <div className="m-6">
      <p className="text-[#8AA6AA] font-bold md:text-[35px] text-[30px] md:ml-[13%] md:mt-[3%]">
        Analytics
      </p>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col md:justify-center gap-10">
          <div>
            <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
              200 <p className="text-[#8AA6AA]">+</p>
            </h1>
            <p className="custom-font text-[15px]">
              Premium moulds from Germany, Italy and US Origins
            </p>
          </div>
          <div className="">
            <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
              50<p className="text-[#8AA6AA] font-serif">,</p>000
            </h1>
            <p className="custom-font">
              Premium moulds from Germany, Italy and US Origins
            </p>
          </div>
        </div>

        <div className="md:ml-[190px] mt-[30px]">
          <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
            8<p className="text-[#8AA6AA] font-mono">+</p>Countries
          </h1>
          <p className="custom-font">
            Our Global footprint spans over Algeria, Ghana, Nigeria, South
            Africa, Malaysia and many more
          </p>
        </div>
      </div>
    </div>
  );
}
