import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import RootLayout from "@/app/layout";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return (
    <NextUIProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </NextUIProvider>
  );
}

export default MyApp;
