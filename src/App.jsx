import { useRef } from 'react';
import Header from './components/Header';
import './App.css';
import Hero from "./components/HeroSection";
import HowitWorks from './components/HowitWorks';
import Gym from './components/GymSection';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Cta from "./components/Cta";
import Footer from "./components/Footer"

function App() {
  const heroRef = useRef(null);
  const howItWorksRef = useRef(null);
  const gymRef = useRef(null);
  const testimonialRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'hero':
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'howitworks':
        howItWorksRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'gym':
        gymRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'testimonial':
        testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'pricing':
        pricingRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'cta':
        ctaRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#e6f2ef]">
      <Header scrollToSection={scrollToSection} />
      <div ref={heroRef}><Hero /></div>
      <div ref={howItWorksRef}><HowitWorks /></div>
      <div ref={gymRef}><Gym /></div>
      <div ref={testimonialRef}><Testimonial /></div>
      <div ref={pricingRef}><Pricing /></div>
      <div className="bg-white" ref={ctaRef}><Cta /></div>
      <Footer />
    </div>
  );
}

export default App;
