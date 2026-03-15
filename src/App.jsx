import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Navbar /> 
      {/* Home aur About ko baghair kisi Route ke yahan rakhein */}
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;