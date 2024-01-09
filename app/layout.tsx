import "@/app/ui/styles/globals.scss";
import { inter } from "@/app/ui/fonts";
import { DarkModeProvider } from "@/app/lib/DarkModeContext";

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
          <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-lg overflow-hidden flex border-8 border-black">
            <Sidebar />
            <div className="flex justify-center items-center flex-grow">
              {children}
            </div>
          </div>
        </body>
      </html>
    </DarkModeProvider>
  );
}
