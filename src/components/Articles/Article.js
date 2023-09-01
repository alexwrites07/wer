import logo from './logo.svg';
import './Style3.css';
import {NavbarDefault} from "./Navbar";
import { Card3Presentation } from "./cards";
import { Card3Preesentation } from "./revcards";
import {HorizontalCard} from "./corona";
import { Card3Pressentation } from "./lastcard";
import Slider from "./slider";
import TestimonialCard from "./testicard";
import testimonials from "./testimonials.json";
import testimo from "./tesstimo.json"
import testi from "./testi.json"

function Article() {
  return (
    <div className="App">
      <NavbarDefault />
      {/* <Card3Presentation /> */}
    
      <div className="w-screen as">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_25%]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
        <center><HorizontalCard /></center>
      <br></br><br></br>
      <div> <h3 className="mb-4 border-b pb-4 text-5xl leading-tight text-[#8AA6AA]" color="blue"><strong>Heading</strong></h3><br></br>

        </div>
      <div className="w-screen as">
        <Slider options={{ align: "center" }}>
          {testimo.map((testimo, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_33.33%]">
              
              <TestimonialCard {...testimo} />
            </div>
          ))}
        </Slider>
      </div>
      
        <div> <h3 className="mb-4 border-b pb-4 text-5xl leading-tight text-[#8AA6AA]" color="blue"><strong>Heading</strong></h3><br></br>
        <div className="w-screen as">
        <Slider options={{ align: "center" }}>
          {testi.map((testi, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_25%]">
              <TestimonialCard {...testi} />
            </div>
          ))}
        </Slider>
      </div>
        </div>
    </div>
  );
}

export default Article;
