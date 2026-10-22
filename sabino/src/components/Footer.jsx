import { Link } from "react-router-dom";
import "../Footer.css"; // We'll style it right after

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">SABINO</h3>
                    <p className="footer-tagline">Contemporary African Cuisine, crafted with passion and heritage.</p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-col">
                    <h4>Location & Hours</h4>
                    <p>Uyo, Akwa Ibom State, Nigeria</p>
                    <p>Tue – Sun: 12:00 PM – 10:00 PM</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sabino Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;