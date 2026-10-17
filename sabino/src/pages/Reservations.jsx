import React, { useState } from "react";
import "../Reservation.css";

function Reservations() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: "", date: "", time: "", guests: "2" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="reservations-page">
            <div className="reservations-container">
                
                {/* Left Side: Restaurant Info & Vibe */}
                <div className="reservations-info">
                    <h2>Book Your Experience</h2>
                    <p>
                        Whether it's an intimate dinner, a family celebration, or a casual gathering, 
                        reserve your table at Sabino and immerse yourself in contemporary African cuisine.
                    </p>
                    <div className="info-box">
                        <h4>Opening Hours</h4>
                        <p>Tuesday – Sunday: 12:00 PM – 10:00 PM</p>
                        <p>Monday: Closed</p>
                    </div>
                </div>

                {/* Right Side: Form or Success Card */}
                <div className="reservations-form-wrapper">
                    {isSubmitted ? (
                        <div className="success-card">
                            <h3>Reservation Confirmed!</h3>
                            <p>Thank you! Your table has been requested. We look forward to hosting you at Sabino.</p>
                            <button 
                                className="confirm-btn" 
                                onClick={() => setIsSubmitted(false)}
                            >
                                Make Another Reservation
                            </button>
                        </div>
                    ) : (
                        <form className="reservations-form" onSubmit={handleSubmit}>
                            <h3>Table Reservation</h3>
                            
                            <div className="form-group">
                                <label>Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your name" 
                                    required 
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Enter your phone number" required />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" required />
                                </div>
                                <div className="form-group">
                                    <label>Time</label>
                                    <input type="time" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Number of Guests</label>
                                <select>
                                    <option value="1">1 Person (Solo Dining)</option>
                                    <option value="2">2 People (Standard Table)</option>
                                    <option value="4">4 People (Family Table)</option>
                                    <option value="6+">6+ People (Large Group)</option>
                                </select>
                            </div>

                            <button type="submit" className="confirm-btn">
                                Confirm Reservation
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Reservations;