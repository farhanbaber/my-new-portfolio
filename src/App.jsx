import React, { useState, useEffect } from 'react';
import Loader from "./components/Loader"; // Name align kar diya
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
    // 4.2 seconds par fade-out animation trigger hogi
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4200);

    // 5 seconds par loader screen se hat jayega
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div>
      {loading ? (
        /* isExiting prop ko directly pass kar rahe hain Loader component mein */
        <Loader isExiting={isExiting} />
      ) : (
        <div className="portfolio-reveal">
          <Navbar /> 
          <Home />
          <About />
          <Resume />
          <Project/>
          <Services/>
          <Contact/>
          <Foter />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
}

export default App;