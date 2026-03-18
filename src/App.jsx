import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
import Custom from "./components/Custom"; 
import './App.css'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    const exitTimer = setTimeout(() => setIsExiting(true), 4200);
    const removeTimer = setTimeout(() => {
      setLoading(false);
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
        <>
          <Custom />
          <ScrollToTop />
          <Navbar /> 

          <div className="hero-reveal">
            {/* 1. HOME Section */}
            <div id="HOME">
              <Home />
            </div>
            
            {/* 2. ABOUT Section */}
            <div id="ABOUT" data-aos="fade-up">
              <About />
            </div>

            {/* 3. RESUME Section */}
            <div id="RESUME" data-aos="fade-up">
              <Resume />
            </div>

            {/* 4. PROJECT Section */}
            <div id="PROJECT" data-aos="fade-up">
              <Project />
            </div>

            {/* 5. SERVICE Section */}
            <div id="SERVICE" data-aos="fade-up">
              <Services />
            </div>

            {/* 6. CONTACT Section */}
            <div id="CONTACT" data-aos="fade-up">
              <Contact />
            </div>
            
            <Foter />
          </div>
        </>
      )}
    </div>
  );
}

export default App;