"use client";

import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./(portfolio)/components/ThemeProvider";
import "./globals.css";
import { useEffect } from "react";
import { sendIpDetails } from "./utils/fetchIp";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    async function fetchAndSendIpDetails() {
      try {
        await sendIpDetails({
          formId: "xxj8UpSvR",
        });
      } catch (error) {
        console.error("Error tracking IP details:", error);
      }
    }

    fetchAndSendIpDetails();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.className} bg-black text-white dark:bg-black dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}