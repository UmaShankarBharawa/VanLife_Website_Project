import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/' className="nav--logo">#VANLIFE</Link>
        <Link to='about' className="nav--about">About</Link>
        <Link to='vans' className="nav--vans">Vans</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <footer>
        &copy; 2024 #VANLIFE
      </footer>
    </BrowserRouter>
  )
}

export default App;
