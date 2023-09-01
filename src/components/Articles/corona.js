import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   import one from "./corona.jpeg";
  export function HorizontalCard() {
    return (
      <Card className="w-full  flex flex-col rounded-lg bg-white md:max-w-7xl rt md:flex-row mm">
        
        <CardBody>
          {/* <Typography variant="h6" color="gray" className="mb-4 uppercase">
            startups
          </Typography> */}

          <Typography variant="h4" color="blue-gray" className="mb-2 rt text-3xl"><strong>
          One-stop partners have more to offer
          </strong>
          <br></br><br></br>
          </Typography>
          <Typography color="gray" className="mb-8 font-normal rt text-xl">
          No matter what point you are at: With our experience and range of services, we are sure to get you ahead. Maybe so with these offers:
          </Typography>
          <br></br>
          <a href="#" className="inline-block text-xs">
          CONTRACT FILLING->
          </a><br></br>
          <a href="#" className="inline-block text-xs">
          PHARMA-SUITE-SERVICE->
          </a><br></br>
          <a href="#" className="inline-block text-xs">
          FACTORY PLANNING->
          </a>
         <br></br><br></br>
         <a href="www.google.com" className="text-1xl leading-tight text-[#8AA6AA]">
         <div><b>Read More -></b>
        
        </div>
        </a><br></br>
        </CardBody>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none flex flex-col rounded-lg bg-white md:max-w-3xl md:flex-row mm"
        >
          <img
            src={one}
            alt="card-image"
            className=" h-full w-full object-cover"
          />
          <br></br><br></br>
        </CardHeader>
      </Card>
    );
  }