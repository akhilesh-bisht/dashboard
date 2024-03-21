import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
function ThirdCom({ setIsHovered }) {
  return (
    <>
      <div className="relative mb-4 top-[-194px] left-[199px]">
        <span className="bg-black h-[2px] w-14 absolute left-0"></span>
        <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[50px]" />
      </div>
      <div className="relative top-[-191px] left-[188px]">
        <div className="relative mb-4 top-[-22px] left-[112px]">
          <span className="bg-black h-[2px] w-16 absolute left-0"></span>
          <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[58px]" />
        </div>

        <div className="relative mb-4 mt-5 rotate-[26deg] left-[71px] top-[-20px]">
          <span className="bg-black h-[2px] w-12 absolute "></span>
        </div>
        <div className="relative mb-4 mt-5 rotate-[-26deg] top-[-21px] left-[70px]">
          <span className="bg-black h-[2px] w-12 absolute left-0"></span>
        </div>
        <div className="relative mb-4 top-[1px] left-[112px]">
          <span className="bg-black h-[2px] w-16 absolute left-0"></span>
          <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[58px]" />
        </div>
      </div>
      <div className="flex flex-col relative top-[-200px] left-[370px]">
        <button
          className="px-8 py-1 text-white w-[120px] bg-blue-900 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          B2B
        </button>
        <button
          className="px-8 py-1 text-white mt-2  w-[120px] bg-blue-900 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          B2B
        </button>
      </div>
    </>
  );
}

export default ThirdCom;
