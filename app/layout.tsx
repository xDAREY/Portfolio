import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import Head from "next/head"; // Import Head component

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "xDarey - Portfolio",
  description: "Showcasing my skills in Flutter and web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
