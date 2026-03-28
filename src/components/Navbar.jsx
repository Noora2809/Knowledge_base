import React from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="h-[52px] bg-[#1E1B4B] px-5 flex items-center justify-between rounded-xl">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* Logo mark */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            <div className="absolute w-5 h-5 border-[3px] border-[#4F46E5] rounded-sm rotate-45"></div>
            <div className="absolute left-[2px] top-[10px] w-2 h-2 bg-[#4F46E5] rounded-full"></div>
          </div>

          <h2 className="text-white text-[15px] font-semibold tracking-[0.1px]">
            Worcspace
          </h2>
        </div>

        <button className="h-[28px] px-3 bg-[#2E4F97] hover:bg-[#355cae] rounded-full flex items-center gap-2 text-white text-[11px] font-medium transition">          <span>Worcspace 1</span>
          <ChevronDownIcon className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Center Search */}
      <div className="w-[340px]">
      <div className="h-[32px] bg-[#4A4696] rounded-md border border-[#5B57A6]/40 flex items-center justify-between px-3">    {/* Left side */}
    <div className="flex items-center gap-2 w-full">
      <MagnifyingGlassIcon className="w-4 h-4 text-[#C9C6F2]" />

      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent w-full outline-none text-[13px] text-white placeholder:text-[#C9C6F2]"
      />
    </div>

    {/* Shortcut */}
    <span className="text-[11px] text-[#C9C6F2] font-medium ml-3">
      ⌘K
    </span>

  </div>
</div>
      {/* Right */}
      <div className="flex items-center gap-5">
      <BellIcon className="w-[16px] h-[16px] text-white stroke-[1.8] cursor-pointer" />
        <div className="w-7 h-7 rounded-full bg-[#ECEBFF] flex items-center justify-center text-[#2A2766] text-[12px] font-semibold">
          GK
        </div>
      </div>
    </div>
  );
}

export default Navbar;