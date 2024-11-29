import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
// import ServicesSection from "./components/ServicesSection";
import Solution from "./components/Solution";

export default function App() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <HeroSection />
      <About />
      <Solution />
      {/* <ServicesSection /> */}
      <Contact />
      <Footer />
    </div>
  );
}
