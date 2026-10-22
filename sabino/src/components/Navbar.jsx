import { useState } from "react";
import { NavLink, Link } from "react-router-dom";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
    return (
        <nav className="navbar">
            <Link to="/" onClick={closeMenu} className="navbar-logo">
                Sabino
            </Link>
        <button
        className="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Home</NavLink>
                <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Menu</NavLink>
                <NavLink to="/reservations" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Reservations</NavLink>

                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Contact</NavLink>





            </div>
        </nav>
    )

}
export default Navbar;