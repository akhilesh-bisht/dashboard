import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function FlexArrow() {
  return (
    <div className="flex relative left-[-13px] ml-24 h-[362px] flex-col gap-24">
      <ArrowBox />
      <ArrowBox />
      <ArrowBox />
      <ArrowBox />
      <ArrowBox />
    </div>
  );
}

function ArrowBox() {
  return (
    <div className="relative mb-4">
      <span className="bg-black h-[2px] w-20 absolute left-0"></span>
      <IoMdArrowDropright className="text-black h-4 w-4 absolute top-[-7px] left-[74px]" />
    </div>
  );
}

export default FlexArrow;
