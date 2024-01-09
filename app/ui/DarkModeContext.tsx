import { createContext, useState, useEffect } from "react";
import {
  DarkModeContextType,
  DarkModeProviderProps,
} from "@/app/lib/definitions";

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: (mode: boolean) => {},
});

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("DarkModeProvider: darkMode value changed", darkMode);
  }, [darkMode]);

  const setDarkModeDebug = (mode: boolean) => {
    console.log("DarkModeProvider: setDarkMode called", mode);
    setDarkMode(mode);
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode, setDarkMode: setDarkModeDebug }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
