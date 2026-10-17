import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
    return (
        <nav className="navbar">
            <div className="nav-logo">Sabino</div>
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Menu</NavLink>
                <NavLink to="/reservations" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Reservations</NavLink>

                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>





            </div>
        </nav>
    )

}
export default Navbar;