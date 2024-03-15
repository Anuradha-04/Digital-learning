import React from "react";
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className="bg-[grey] w-full h-screen py-[50px]">
      <div className="max-w-[1240px]my-[100px] mx-auto mt-[180px] text-center font-bold">
        <div className=" text-xl md:text-3xl md:p-[24px] ">
            Learn with us
            </div>
        <div className=" text-white text-3xl md:text-[60px] md:p-[24px] ">
          Grow with us
        </div>
        <div className="text-[20px] md:text-[40px] md:p-[24px] text-white ">
          Learn 
          <ReactTyped className="pl-3"
          strings={["Web development","Digitak Marketing","Ethical Hacking"]}
           typeSpeed={100}
           loop={true}
           backSpeed={120}
            />
         </div>
             <button className='bg-black text-white p-3 rounded'>Get Started</button>

         </div>
    </div>
   );
  }
