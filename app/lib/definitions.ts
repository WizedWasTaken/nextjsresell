import React, { ReactNode } from "react";

export type NavLinkProps = {
  isHovered: boolean;
};

export interface LayoutProps {
  children: React.ReactNode;
}
export type SetDarkModeFunction = (mode: boolean) => void;

export type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
