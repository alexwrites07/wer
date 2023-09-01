import kl from "./kl.jpeg"
  function Card3({
    heading,
    description,
    thumbnailSrc,
    thumbnailAlt = "Thumbnail",
    className,
  }) {
    return (
      <div className={`rounded-lg p-6 shadow-sm ${className}`}>
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </div>
        <h3 className="pt-5 text-[14px] font-normal text-gray-600 block">
          {heading}
        </h3>
        <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
          {description}
        </p>
      </div>
    );
  }
  
  function Card3Pressentation() {
    return (
      <div className=" grid gap-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 p-5 sm:p-12">
        <Card3
          className="bg-white"
          heading="Heading"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          thumbnailSrc={kl}
        />
        <Card3
          className="bg-white"
          heading="Heading"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          thumbnailSrc={kl}
        />
        <Card3
          className="bg-white"
          heading="Heading"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          thumbnailSrc={kl}
        />
        <Card3
          className="bg-white"
          heading="Heading"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          thumbnailSrc={kl}
        />
        <Card3
          className="bg-white"
          heading="Heading"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          thumbnailSrc={kl}
        />
      </div>
    );
  }
  
  export { Card3Pressentation };
  
  