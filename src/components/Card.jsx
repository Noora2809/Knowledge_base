import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

function Card() {
  return (
    <div className="border border-[#F0F1F6] rounded-lg bg-white p-2.5 min-h-[140px] flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-[15px] font-semibold text-[#1F1F1F]">Test</h3>
          <EllipsisVerticalIcon className="w-5 h-5 text-[#777]" />
        </div>

        <p className="text-[13px] text-[#6B7280] mt-3 leading-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[#F1F1F5] text-[12px] text-[#8A8FA3]">
        Created On: 14/07/2025
      </div>
    </div>
  );
}

export default Card;