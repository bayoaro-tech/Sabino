import React, { useState } from "react";
import "../Contact.css"; // We'll create this CSS file next

function Contact() {
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                
                {/* Left Side: Contact Info & Location */}
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        Have a question, feedback, or want to plan a private event? 
                        Reach out to us and our team will get back to you as soon as possible.
                    </p>
                    
                    <div className="contact-details-box">
                        <div className="detail-item">
                            <h4>Location</h4>
                            <p>Uyo, Akwa Ibom State, Nigeria</p>
                        </div>
                        <div className="detail-item">
                            <h4>Phone</h4>
                            <p>+234 800 SABINO (722466)</p>
                        </div>
                        <div className="detail-item">
                            <h4>Email</h4>
                            <p>concierge@sabinocuisine.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Message Form or Success State */}
                <div className="contact-form-wrapper">
                    {isSent ? (
                        <div className="success-card">
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out to Sabino. We have received your message and will respond shortly.</p>
                            <button 
                                className="confirm-btn" 
                                onClick={() => setIsSent(false)}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Send Us a Message</h3>
                            
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Enter your name" required />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email" required />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can we help you?" required></textarea>
                            </div>

                            <button type="submit" className="confirm-btn">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Contact;