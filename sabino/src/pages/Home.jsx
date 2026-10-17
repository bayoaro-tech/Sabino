import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // Show loading spinner if it's still loading
    if (isLoading) {
        return <Loading />;
    }
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
                <Link to="/menu" className="scroll-btn">
                    <span className="scroll-icon">↓</span>
                </Link>
            </div>
        </div>
    );
}

export default Home;