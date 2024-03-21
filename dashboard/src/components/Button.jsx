import React from "react";

function Button({ setIsHovered, isHovered }) {
  return (
    <div className="flex flex-col gap-20 items-center relative left-[85px] top-7 h-[28.2rem]  ">
      <button
        className="px-8 py-1 text-white bg-blue-900 rounded-sm "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Researsh
      </button>
      <button
        className="px-8 py-1 text-black bg-blue-500 rounded-sm "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Planning
      </button>
      <button
        className="px-8 py-1 text-black bg-orange-600 rounded-sm "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Designing
      </button>
      <button
        className="px-5 py-1 text-black bg-pink-400 rounded-sm text- "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Manufacturing
      </button>
      <button
        className="px-2 py-1 text-black bg-violet-400 rounded-sm "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Sales/Marketing
      </button>
    </div>
  );
}

export default Button;
