import { ReactNode } from "react";

export type NavLinkProps = {
  isHovered: boolean;
};

export interface DarkModeProviderProps {
  children: ReactNode;
}

export interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}
