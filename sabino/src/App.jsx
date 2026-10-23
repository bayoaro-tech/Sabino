import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";

import Reservations from "./pages/Reservations";

import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
     

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/reservations" element={<Reservations />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
