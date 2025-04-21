import { Metadata } from 'next'
import HeroSection from "./(portfolio)/components/HeroSection"
import NavigationBar from "./(portfolio)/components/navigationBar"

export const metadata: Metadata = {
  title: 'Oluwadare Emmanuel | Flutter & Web Developer',
  description: 'Portfolio for Oluwadare Emmanuel, Flutter and Web Developer specializing in creating beautiful, functional applications.',
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <HeroSection />
    </main>
  )
}