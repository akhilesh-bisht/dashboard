import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function Container() {
  return (
    <div className="flex  ml-6 flex-col gap-24">
      <div className="flex flex-col relative">
        <span className="bg-black h-[28.2rem] w-[2px] absolute left-0 top-24 z-10 transform -translate-x-1/2"></span>
      </div>

      {/* Arrow Box 1 */}
      <div className="relative mb-4">
        <span className="bg-black h-[2px] w-20 absolute left-0"></span>
        <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[74px]" />
      </div>
      {/* Arrow Box 2 */}
      <div className="relative mb-4">
        <span className="bg-black h-[2px] w-20 absolute left-0"></span>
        <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[74px]" />
      </div>
      {/* Arrow Box 3 */}
      <div className="relative mb-4">
        <span className="bg-black h-[2px] w-36 absolute left-[-64px]">
          <span className="absolute top-[-7px] left-[-5px] text-xs">0</span>
        </span>
        <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[73px]" />
      </div>
      {/* Arrow Box 4 */}
      <div className="relative mb-4">
        <span className="bg-black h-[2px] w-20 absolute left-0"></span>
        <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[74px]" />
      </div>
      {/* Arrow Box 5 */}
      <div className="relative mb-4">
        <span className="bg-black h-[2px] w-20 absolute left-0"></span>
        <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[74px]" />
      </div>
    </div>
  );
}

export default Container;
