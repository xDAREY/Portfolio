"use client";

import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import Head from "next/head";
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
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
