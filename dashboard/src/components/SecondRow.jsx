import React from "react";

function SecButton({ setIsHovered }) {
  return (
    <div className="flex flex-col gap-[39px] items-center relative left-[198px] top-3 h-[28.2rem]">
      <div className="flex flex-col">
        <button
          className="px-8 py-1 text-white w-[120px] bg-blue-900 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          External
        </button>
        <button
          className="px-8 py-1 text-white mt-2  w-[120px] bg-blue-900 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Internal
        </button>
      </div>
      <div className="flex flex-col">
        <button
          className="px-8 py-1 text-black   w-[120px] bg-blue-400 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          PRD
        </button>
        <button
          className="px-5 py-1 text-black   w-[120px] bg-blue-400 rounded-sm mt-2 "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Specs
        </button>
      </div>
      <div className="flex flex-col">
        <button
          className="px-2 py-1 text-black   w-[120px] bg-red-500 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Hardware
        </button>
        <button
          className="px-2 py-1 text-black   w-[120px] bg-red-500 rounded-sm mt-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Software
        </button>
      </div>
      <div className="flex flex-col">
        <button
          className="px-2 py-1 text-black   w-[120px] bg-red-300 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Material
        </button>
        <button
          className="px-2 py-1 text-black   w-[120px] bg-red-300 rounded-sm mt-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Production
        </button>
      </div>
      <div className="flex flex-col">
        <button
          className="px-2 py-1 text-black   w-[120px] bg-violet-400 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Online
        </button>
        <button
          className="px-2 py-1 text-black   w-[120px] bg-violet-400 rounded-sm mt-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Dealearship
        </button>
      </div>
    </div>
  );
}

export default SecButton;
