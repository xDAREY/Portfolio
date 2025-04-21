import Footer from "../components/Footer";
import SkillsSection from "../components/SkillsSection";
import NavigationBar from "../components/navigationBar";

export default function SkillsPage(){
    return (
        <main className="min-h-screen flex flex-col">
            <NavigationBar />
            <SkillsSection />
            <Footer/>
        </main>
        );
}