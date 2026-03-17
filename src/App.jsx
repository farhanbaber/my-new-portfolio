import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Library import
import 'aos/dist/aos.css'; // AOS Styles
import Loader from "./components/Loader"; 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Foter from "./components/Foter";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // --- AOS INITIALIZATION ---
    AOS.init({
      duration: 1000, // 1 second animation duration
      once: true,     // Ek baar hi animate hoga (Professional lagta hai)
      easing: 'ease-in-out',
      offset: 100,    // Thora pehle trigger hoga screen pe aane se
    });

    // --- LOADER TIMERS ---
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4200);

    const removeTimer = setTimeout(() => {
      setLoading(false);
      // Loader khatam hone ke baad AOS ko refresh karna zaroori hai
      setTimeout(() => AOS.refresh(), 100);
    }, 5000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loader isExiting={isExiting} />
      ) : (
        /* 'hero-reveal' for the Bhooom effect on first load */
        <div className="hero-reveal">
          <Navbar /> 
          
          {/* Hero Section (No AOS here, we use custom Bhooom animation) */}
          <Home />
          
          {/* Baki sections pe AOS lag gaya hai */}
          <div data-aos="fade-up" data-aos-delay="100">
            <About />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <Resume />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <Project />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <Services />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <Contact />
          </div>

          <Foter />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
}

export default App;