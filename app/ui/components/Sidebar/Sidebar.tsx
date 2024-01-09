"use client";

import { useContext, useEffect, useState } from "react";
import NavLinks from "@/app/ui/components/Sidebar/nav-links";
import DarkModeToggle from "@/app/ui/components/Sidebar/DarkModeToggle";
import { DarkModeContext } from "@/app/lib/DarkModeContext"; // Import the context

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext); // Use the context

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(darkModeMediaQuery.matches);

    // Define the type of event parameter as MediaQueryListEvent
    const mediaQueryListener = (event: MediaQueryListEvent) => {
      setDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", mediaQueryListener);

    return () => {
      // Clean up the listener when the component unmounts
      darkModeMediaQuery.removeEventListener("change", mediaQueryListener);
    };
  }, [setDarkMode]);


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
