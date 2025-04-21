import ProjectsSection from "../components/ProjectsSection";
import NavigationBar from "../components/navigationBar";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <ProjectsSection />
      <Footer/>
    </main>
  );
}