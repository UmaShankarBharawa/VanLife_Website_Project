import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import VanDetail from "./components/VanDetail";


function App() {
  return (
    <BrowserRouter>
      <header className="vans-header">
        <Link to='/' className="nav--logo">#VANLIFE</Link>
        <nav>
          <NavLink to='/about' className="nav--about">About</NavLink>
          <NavLink to='/vans' className="nav--vans">Vans</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <footer>
        &copy; 2024 #VANLIFE
      </footer>
    </BrowserRouter>
  )
}

export default App;
