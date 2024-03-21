import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
function LastCom() {
  return (
    <div>
      <div className="relative mb-4 top-[-112px] left-[371px]">
        <div className="relative mb-4 top-[-200px] left-[175px]">
          <span className="bg-black h-[2px] w-20 absolute left-0"></span>
        </div>
        <div className="relative mb-4 top-[-36px] left-[175px]">
          <span className="bg-black h-[2px] w-20 absolute left-0"></span>
        </div>
      </div>

      <div className="relative mb-4 mt-5 rotate-[-66deg]  left-[625px] top-[-150px]">
        <span className="bg-black h-[2px] w-[90px] absolute "></span>
      </div>
      <div className="relative mb-4 mt-5 rotate-[65deg]  left-[625px] top-[-316px]">
        <span className="bg-black h-[2px] w-[90px] absolute "></span>
      </div>

      <div className="relative mb-4 top-[-234px] right-[-662px]">
        <span className="bg-black h-[2px] w-16 absolute left-0"></span>
        <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[58px]" />
      </div>
    </div>
  );
}

export default LastCom;
