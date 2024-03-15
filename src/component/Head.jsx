import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default Head;
function Head() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[grey] p-4 ">
      <div className="max-w-[1240px] py-15px items-center flex justify-between mx-auto">
        <div className="text-4xl font-bold ">R & D Tech Center</div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className=" text-white text-2xl md:hidden block "
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className=" text-white text-2xl md:hidden block"
          />
        )}
        <ul className=" hidden md:flex text-white gap-10 ">
          <li className=" hover:text-black cursor-pointer font-medium">Home </li>
          <li className=" hover:text-black cursor-pointer font-medium">Company</li>
          <li className=" hover:text-black cursor-pointer font-medium">Resouces</li>
          <li className=" hover:text-black cursor-pointer font-medium">About</li>
          <li className=" hover:text-black cursor-pointer font-medium">Contact</li>
        </ul>
        {/* Responsive menu*/}
        <ul className={ `duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[65px]
         ${toggle ? 'left-[0]' : 'left-[-100%]'}
         `}>

          <li className="p-6 hover:text-[#a4505e] cursor-pointer font-medium">Home</li>
          <li className="p-6 hover:text-[#a4505e] cursor-pointer font-medium">Company</li>
          <li className="p-6 hover:text-[#a4505e] cursor-pointer font-medium">Resouces</li>
          <li className="p-6 hover:text-[#a4505e] cursor-pointer font-medium">About</li>
          <li className="p-6 hover:text-[#a4505e] cursor-pointer font-medium">Contact</li>
        </ul>
      </div>
    </div>
  );
}
