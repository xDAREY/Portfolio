import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ExperienceSection from "./components/ExperienceSection"
import ServicesSection from "./components/ServicesSection"
import MobileApplicationsSection from "./components/MobileApplicationsSection"
import WebDevelopmentSection from "./components/WebDevelopmentSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ServicesSection />
      <MobileApplicationsSection />
      <WebDevelopmentSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

