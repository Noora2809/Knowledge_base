import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Drawer from "../components/Drawer";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function EmptyKnowledgeBaseIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-[72px] h-[72px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* back file */}
      <rect
        x="18"
        y="14"
        width="24"
        height="30"
        rx="4"
        stroke="#B8BCC7"
        strokeWidth="2"
      />
      <path
        d="M34 14V22H42"
        stroke="#B8BCC7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* front file */}
      <rect
        x="24"
        y="20"
        width="24"
        height="30"
        rx="4"
        stroke="#8F95A3"
        strokeWidth="2.2"
      />
      <path
        d="M40 20V28H48"
        stroke="#8F95A3"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* plus sign */}
      <circle
        cx="20"
        cy="46"
        r="8"
        fill="white"
        stroke="#8F95A3"
        strokeWidth="2"
      />
      <path
        d="M20 42.5V49.5M16.5 46H23.5"
        stroke="#8F95A3"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultCards = [1, 2, 3, 4, 5, 6];
  const cards = isOpen ? [] : defaultCards;

  return (
    <div className="h-screen bg-[#F5F6FA] flex flex-col overflow-hidden">
      {/* NAVBAR */}
      <div className="px-3 pt-3 pb-2">
        <Navbar />
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-1 px-3 pb-3 gap-3 min-h-0">
        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTENT AREA */}
        <div className="flex-1 flex flex-col bg-white rounded-xl border border-[#E7E8F0] p-4 overflow-hidden">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-[16px] font-semibold text-[#1F1F1F]">
              Knowledge Base
            </h1>

            <div className="flex items-center gap-2">
              {/* SMALL SEARCH */}
              <div className="relative w-[150px]">
                <MagnifyingGlassIcon className="w-4 h-4 text-[#B8B8C7] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-[32px] rounded-md border border-[#E7E7EF] bg-white pl-9 pr-3 text-[12px] text-[#333] placeholder:text-[#B8B8C7] outline-none"
                />
              </div>

              {/* CREATE BUTTON */}
              <button
                onClick={() => setIsOpen(true)}
                className="h-[32px] px-3 rounded-md bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[12px] font-medium transition"
              >
                + Create New
              </button>
            </div>
          </div>

          {/* CARD / EMPTY CONTAINER */}
          <div className="flex-1 border border-[#F0F1F6] rounded-lg bg-white flex flex-col justify-between p-2 overflow-hidden">
            {cards.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {cards.map((item) => (
                  <Card key={item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <div
                  className={`flex flex-col items-center text-center transition duration-300 ${
                    isOpen ? "translate-x-12" : "translate-x-0"
                  }`}
                >
                  <EmptyKnowledgeBaseIcon />
                  <p className="mt-3 text-[14px] text-[#6B6B75] font-medium">
                    No Knowledge Bases Found
                  </p>
                </div>
              </div>
            )}

            {/* FOOTER */}
            <div className="flex items-center justify-between text-[11px] text-[#555] mt-2 px-1">
              <span>{cards.length > 0 ? "6 rows" : "00 row(s)"}</span>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span>Rows per page</span>
                  <select className="h-[24px] border border-[#E5E7EB] rounded px-1 text-[11px]">
                    <option>10</option>
                  </select>
                </div>

                <span>page 1 of 1</span>

                <div className="flex gap-1">
                  <button className="w-5 h-5 border rounded text-[10px]">
                    ≪
                  </button>
                  <button className="w-5 h-5 border rounded text-[10px]">
                    ‹
                  </button>
                  <button className="w-5 h-5 border rounded text-[10px]">
                    ›
                  </button>
                  <button className="w-5 h-5 border rounded text-[10px]">
                    ≫
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DRAWER */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Home;