import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer"


import Reservations from "./pages/Reservations";

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
      <Navbar />

      

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        
        
        
        <Route path="/reservations" element={<Reservations />} />
       
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  )

}

export default App
