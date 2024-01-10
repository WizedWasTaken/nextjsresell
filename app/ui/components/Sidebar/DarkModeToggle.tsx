import React, { useContext } from "react";
import DarkModeContext from "@/app/lib/DarkMode/DarkModeContext";

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <label
      onClick={toggleDarkMode}
      className="dark-mode-toggle switch cursor-pointer inline-flex items-center justify-between w-16 h-8 p-1 rounded-full transition-colors duration-500"
      style={{ background: darkMode ? "#111827" : "#FBBF24" }}
    >
      <span className="text-lg">{darkMode ? "🌙" : ""}</span>
      <span
        className="dot absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"
        style={{ transform: darkMode ? "translateX(100%)" : "translateX(0)" }}
      />
      <span className="text-lg">{darkMode ? "" : "🌞"}</span>
    </label>
  );
};

export default DarkModeToggle;
