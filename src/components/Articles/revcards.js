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
  
  function Card3Preesentation() {
    return (
      <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
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
          thumbnailSrc="https://s3-alpha-sig.figma.com/img/957d/8a05/f5c79a21a6e7f4f19f89c06c0d02311f?Expires=1693785600&Signature=CSnWHPU7C2g-KTQDX6U2RYfnSr8QijNswahS5EDszvEKu4sHcmHfvG4U6lg4NamIp1W9BWXnBQJKK6Tx-PMNUECoXJJMOaJG9neiVFlAz8DDNrMHe2LVIiPOTRApvtGidXQ2FIkFmLDxPtIz~RQsjQI2ECm5U2AGUoylEwMI0ZT5ebB9fk887~R6GtUga3TCfuVCpgYj5mGJIMQADtI6gl5snBeec~vCCJThic9LoPXRWKRftAx-plrtSXA3doXACQfIUKNot0swhU0HnvIPeROCq07FOmqQ5tX08RfRRtxwVMtEktZ1PkCEwP3AFJo-atkPXyKb3MW7Y3l6c2SpBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Card3
          className="bg-[#fcf4ff]"
          heading="Heading"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          thumbnailSrc="https://s3-alpha-sig.figma.com/img/6327/58a1/13ea8c5c9f911627d1eb887562b7f9e7?Expires=1693785600&Signature=J7~~oRJ4BNKYiZWR1gMNLLZAwoVT6CqNqMv2SGtqrFd7tymvhkFrPScmBcGPuRf7F5Zd8uANZK0uO88zrQV9hn7SYhdH8wRv5it8mYDwlXgiJzjkmkcvB~rL3ZJQKNSD0eN4g7~BcTpVT6zdY4RCBhvbN9aLXlYaEvRQmR~TYvNjhjHu0H0rcMSmJl6XAZuj5CJHz06CpcEQvPH9UV~wAyLLwlqQ13LNGN4Frfifca8H9mSyr1mRLCi~FMBDq3-sh7lqBvI4W176qkY6W-W3rIQCGCD0l-hZ9XFNU8WufZ-fEFrPNQ-4MTh5RxlBY-hhmuu2OMjlY6KCc~VhBIt5GQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
    );
  }
  
  export { Card3Preesentation };
  
  