import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import NavigationBar from "../components/navigationBar";

export default function ExperiencePage(){
    return(
        <main className="min-h-screen flex flex-col">
            <NavigationBar/>
            <ExperienceSection/>
            <Footer/>   
        </main>
    )
}