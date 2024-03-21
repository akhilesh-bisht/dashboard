import React from "react";

const HoverButton = ({ isHovered }) => {
  return (
    <div className="relative">
      {isHovered ? (
        <div className="absolute top-[-100px]  left-[20px] bg-gray-200 p-4 rounded w-80 pl-3 flex flex-col justify-center ">
          <div className="flex gap-8 pt-6 pl-[75px] pb-1">
            <ul>0</ul>
            <ul>5000</ul>
            <ul>10000</ul>
          </div>
          <div className="flex pl-[5px] mt-1">
            <h1>Positive</h1>
            <span className="bg-blue-500 w-[100%] ml-[20px] h-6"></span>
            <h1 className="ml-1">13451</h1>
          </div>
          <div className="flex mt-1 ">
            <h1>Negative</h1>
            <span className="bg-blue-500 w-[50%] ml-4 h-6"></span>
            <h1 className="ml-1">10551</h1>
          </div>
          <div className="flex mt-1 justify-start">
            <h1>Comments</h1>
            <span className="bg-blue-500 w-[40%] ml-1 h-6"></span>
            <h1 className="ml-1">10004</h1>
          </div>
          <h1 className="mt-5 font-semibold">Total reviews</h1>
          <h1 className=" font-semibold ">Positive reviews</h1>
          <h1 className=" font-semibold ">Negative reviews</h1>
          <h1 className=" font-semibold">Comments</h1>
        </div>
      ) : null}
    </div>
  );
};

export default HoverButton;
