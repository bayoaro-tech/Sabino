import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="hero-section">
                <div className="hero-content">
                    <p className="hero-subtitle">CONTEMPORARY AFRICAN CUISINE</p>
                    <h1 className="hero-title">African Flavour Reimagined</h1>
                    <p className="hero-description">A modern dining experience inspired by the rich culinary heritage of Africa</p>
                    <div className="hero-buttons">
                        <Link to="/menu" className="hero-button">View Menu</Link>
                        <Link to="/reservations" className="hero-button">Reserve a Table</Link>
                    </div>
                </div>
                <a href="/about" className="scroll-btn">
                    <span className="scroll-icon">↓</span>
                </a>
            </div>
                    
                

            

        </div>
    );
}

export default Home;