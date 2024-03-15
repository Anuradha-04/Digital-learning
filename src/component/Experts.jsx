import React from "react";
import laptop from "../assest/image/laptop.jpg";
import desktop from "../assest/image/img2.jpg";
export default function Experts() {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto p-2 md:grid grid-cols-3">
        <div className="mt-[30px] md:w-[85%] col-span-1 ">
          <img src={laptop} alt=" " />
        </div>
        <div className="mt-[30px] col-span-2 flex flex-col justify-center">
          <h1 className="text-[#6d9eeb] font-bold my-2">LEARN FROM EXPERTS</h1>
          <p className="my-2">
            Some laptops have graphics on board the CPU itself, referred to as
            “integrated graphics,” while others have dedicated graphics cards,
            often also called display adapters, video cards, and GPUs. Dedicated
            GPUs are typically faster, as they feature a separate graphics
            processor with its own memory reserve.
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 md:grid grid-cols-3 mb-16">
        <div className="mt-[30px] md:w-[85%] col-span-1 ">
          <img src={desktop} alt=" " />
        </div>
        <div className="mt-[30px] col-span-2 flex flex-col justify-center">
          <h1 className="text-[#6d9eeb] font-bold my-2">LEARN CODING FORM EXPERTS </h1>
          <p className="my-2">
          Performance: Software development often involves resource-intensive tasks like compiling code and running virtual machines. 
          Look for a laptop with a powerful CPU (Intel Core i5/i7 or AMD Ryzen 5/7) and ample RAM (at least 8GB, 
          but 16GB or more is better) to ensure smooth multitasking and speedy code execution.
          </p>
          <button className="w-[30%] bg-black text-white p-3 mt-2 rounded ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
