import React from "react";
import "@/app/ui/styles/globals.scss";
import { inter } from "@/app/ui/fonts";
import DarkModeProvider from "@/app/lib/DarkMode/DarkModeProvider";

import Sidebar from "@/app/ui/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkModeProvider>
      <html lang="en">
        <body
          className={`${inter.className} antialiased flex justify-center items-center h-screen`}
        >
          <div className="w-3/4 h-3/4 bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden flex border-8 border-black dark:border-gray-500">
            <Sidebar />
            <div className="flex justify-center items-center flex-grow bg-gray-300 text-black dark:bg-gray-800 dark:text-white transition-all duration-200 ease-in-out">
              {children}
            </div>
          </div>
        </body>
      </html>
    </DarkModeProvider>
  );
}
