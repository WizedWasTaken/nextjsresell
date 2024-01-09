// ui/DarkModeToggle.tsx
import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { DarkModeContext } from "@/app/ui/DarkModeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: (mode: boolean) => {},
});

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    console.log("Button clicked");
    console.log("Current darkMode value:", darkMode);
    setDarkMode(!darkMode);
    console.log("New darkMode value:", !darkMode);
  };

  return (
    <button
      className={`transition-all duration-200 ease-in-out ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      } rounded-full p-2`}
      onClick={handleClick}
    >
      {darkMode ? (
        <SunIcon className="h-5 w-5 transition-transform duration-200 transform rotate-180" />
      ) : (
        <MoonIcon className="h-5 w-5 transition-transform duration-200" />
      )}
    </button>
  );
}
