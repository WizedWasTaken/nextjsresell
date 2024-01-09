"use client";

import { useState, useEffect } from "react";
import NavLinks from "@/app/ui/components/Sidebar/nav-links";
import DarkModeToggle from "@/app/ui/components/Sidebar/DarkModeToggle";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener("change", (event) => {
      setDarkMode(event.matches);
    });
  }, []);

  return (
    <div
      className={`transition-all duration-200 ease-in-out transform ${
        isHovered ? "w-64" : "w-20"
      } h-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-white"
      } flex flex-col items-center justify-start py-5 space-y-5 overflow-auto h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DarkModeToggle />
      {isHovered && (
        <div className="text-2xl font-bold text-center">MEKANIKER NAVN</div>
      )}
      <div className="flex flex-col space-y-2 gap-2">
        <NavLinks isHovered={isHovered} />
      </div>
    </div>
  );
}
