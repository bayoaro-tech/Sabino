
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reservations from "./pages/Reservations";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";


function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">SABINO</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/food-details">Food Details</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-icons">
          <span onClick={() => setIsSearchOpen(!isSearchOpen)}>🔍</span>
          <Link to="/cart">
            🛒 <span>{cartCount}</span>
          </Link>
          <span className="nav-icon">☰</span>
        </div>

      </nav>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food-details" element={<FoodDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  )

}

export default App
