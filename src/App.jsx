import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Navbar /> 
      {/* Home aur About ko baghair kisi Route ke yahan rakhein */}
      <Home />
      <About />
      <Resume />
      <Project/>
    </div>
  );
}

export default App;