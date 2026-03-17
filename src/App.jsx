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
import ScrollToTop from "./components/ScrollToTop"; // Isay load hone do
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
          {/* ScrollToTop ko main div se bahar rakho taake ye AOS se mutasir na ho */}
          <ScrollToTop />

          <div className="hero-reveal">
            <Navbar /> 
            <Home />
            
            <div data-aos="fade-up"><About /></div>
            <div data-aos="fade-up"><Resume /></div>
            <div data-aos="fade-up"><Project /></div>
            <div data-aos="fade-up"><Services /></div>
            <div data-aos="fade-up"><Contact /></div>
            
            <Foter />
          </div>
        </>
      )}
    </div>
  );
}

export default App;