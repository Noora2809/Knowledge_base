import React from "react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function Drawer({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Right panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[360px] bg-white border-l border-[#E9E9EF] shadow-[0_0_20px_rgba(0,0,0,0.06)] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-4 pt-5 pb-3 border-b border-[#F0F0F4]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-[16px] font-semibold text-[#232323] leading-5">
                  Create New Knowledge Base
                </h2>
                <p className="text-[12px] text-[#7B7B88] mt-1 leading-4">
                  Best for quick answers from documents, websites and text files.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-[1px] text-[#8F8F99] hover:text-[#5f5f68] transition"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            <div>
              <label className="block text-[12px] font-medium text-[#3B3B45] mb-2">
                Name (Cannot be edited later)
                <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[38px] rounded-md border border-[#E6E6EE] bg-white px-3 text-[13px] text-[#333] placeholder:text-[#B3B3BE] outline-none"
              />
            </div>

            <div>
              <label className="block text-[12px] font-medium text-[#3B3B45] mb-2">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Description"
                className="w-full rounded-md border border-[#E6E6EE] bg-white px-3 py-2 text-[13px] text-[#333] placeholder:text-[#B3B3BE] outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-[12px] font-medium text-[#3B3B45] mb-2">
                Vector Store
                <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <select className="w-full h-[38px] appearance-none rounded-md border border-[#E6E6EE] bg-white px-3 text-[13px] text-[#666] outline-none">
                  <option>Qdrant</option>
                </select>
                <ChevronDownIcon className="w-4 h-4 text-[#9A9AA5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-medium text-[#3B3B45] mb-2">
                LLM Embedding Model
                <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <select className="w-full h-[38px] appearance-none rounded-md border border-[#E6E6EE] bg-white px-3 text-[13px] text-[#666] outline-none">
                  <option>text-embedding-ada-002</option>
                </select>
                <ChevronDownIcon className="w-4 h-4 text-[#9A9AA5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[#F0F0F4] px-4 py-4 flex justify-end bg-white">
            <button className="h-[32px] min-w-[58px] rounded-md bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[12px] font-medium px-4 transition">
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;