import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar /> 
      {/* Home aur About ko baghair kisi Route ke yahan rakhein */}
      <Home />
      <About />
    </div>
  );
}

export default App;