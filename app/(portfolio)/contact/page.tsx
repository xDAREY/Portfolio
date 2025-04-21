import { Nav } from "react-day-picker";
import ContactSection from "../components/ContactSection";
import NavigationBar from "../components/navigationBar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <NavigationBar/>
            <ContactSection/>
            <Footer/>
        </main>
    )
}