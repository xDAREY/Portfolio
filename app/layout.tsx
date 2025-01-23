import { Montserrat } from "next/font/google"
import { ThemeProvider } from "./components/ThemeProvider"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Your Name - Developer Portfolio",
  description: "Showcasing my skills in Flutter and web development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

