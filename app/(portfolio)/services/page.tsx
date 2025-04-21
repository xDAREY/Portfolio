import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import NavigationBar from "../components/navigationBar";

export default function ServicesPage(){
    return (
        <main className="min-h-screen flex flex-col">
          <NavigationBar />
          <ServicesSection />
          <Footer/>
        </main>
      );
}