import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
function FourCom({ setIsHovered }) {
  return (
    <div>
      <div className="relative mb-4 top-[-112px] left-[371px]">
        <span className="bg-black h-[2px] w-14 absolute left-0"></span>
        <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[50px]" />
      </div>
      <div className="relative top-[-145px] left-[360px]">
        <div className="relative mb-4 top-[-8px] left-[112px]">
          <span className="bg-black h-[2px] w-16 absolute left-0"></span>
          <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[58px]" />
        </div>

        <div className="relative mb-4 mt-5 rotate-[26deg] left-[64px] top-[41px]">
          <span className="bg-black h-[2px] w-12 absolute "></span>
        </div>
        <div className="relative mb-4 mt-5 rotate-[-26deg] top-[-14px] left-[63px]">
          <span className="bg-black h-[2px] w-12 absolute left-0"></span>
        </div>
        <div className="relative mb-4 top-[35px] left-[112px]">
          <span className="bg-black h-[2px] w-16 absolute left-0"></span>
          <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[58px]" />
        </div>
      </div>
      <div className="relative top-[-210px] left-[360px]">
        <div className="relative mb-4 top-[-8px] left-[112px]">
          <span className="bg-black h-[2px] w-16 absolute left-0"></span>
          <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[58px]" />
        </div>

        <div className="relative mb-4 mt-5 rotate-[62deg]  left-[39px] top-[129px]">
          <span className="bg-black h-[2px] w-[90px] absolute "></span>
        </div>
        <div className="relative mb-4 mt-5 rotate-[-64deg] top-[25px] left-[37px] ">
          <span className="bg-black h-[2px] w-24 absolute left-0"></span>
        </div>
        <div className="relative mb-4 top-[156px] left-[112px]">
          <span className="bg-black h-[2px] w-16 absolute left-0"></span>
          <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[58px]" />
        </div>
      </div>
      <div className="flex flex-col relative top-[-232px] gap-[18px]  right-[-545px]">
        <button
          className="px-8 py-1 text-white w-[120px] bg-blue-900 rounded-sm "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Online
        </button>
        <button
          className="px-8 py-1 text-white mt-2  w-[120px] bg-blue-900 rounded-sm "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Interview
        </button>
        <button
          className=" px-1 py-1 text-white w-[120px] bg-blue-900 rounded-sm text-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Public Data
        </button>
        <button
          className="px-8 py-1 text-white mt-2  w-[120px] bg-blue-900 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Health
        </button>
      </div>
    </div>
  );
}

export default FourCom;
