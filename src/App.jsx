import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Foter from "./components/Foter";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar /> 
      {/* Home aur About ko baghair kisi Route ke yahan rakhein */}
      <Home />
      <About />
      <Resume />
      <Project/>
      <Services/>
      <Contact/>
      <Foter/>
      <ScrollToTop />

    </div>
  );
}

export default App;