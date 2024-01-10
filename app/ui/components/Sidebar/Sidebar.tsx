"use client";

import React, { useState } from "react";
import NavLinks from "@/app/ui/components/Sidebar/nav-links";
import DarkModeToggle from "@/app/ui/components/Sidebar/DarkModeToggle";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transition-all duration-200 ease-in-out transform ${
        isHovered ? "w-64" : "w-20"
      } h-full bg-gray-300 text-black dark:bg-gray-800 dark:text-white flex flex-col items-center justify-start py-5 space-y-5 overflow-auto border-r-4 border-black dark:border-gray-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DarkModeToggle />
      {isHovered && (
        <div
          className={`text-2xl font-bold text-center transition-transform duration-500 ease-in-out ${
            isHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          MEKANIKER NAVN
        </div>
      )}
      <div className="flex flex-col space-y-2 gap-2">
        <NavLinks isHovered={isHovered} />
      </div>
    </div>
  );
}
