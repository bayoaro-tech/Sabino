import { useState } from "react";
import "../Reservation.css";

function Reservations() {
  
  // Load selected dishes from localStorage
  const [selectedDishes, setSelectedDishes] = useState(() => {
    const saved = localStorage.getItem("sabino_inquiry_dishes");
    return saved ? JSON.parse(saved) : [];
  });

  // Remove a single dish from the inquiry list
  const removeDish = (dishName) => {
    const updated = selectedDishes.filter((d) => d.name !== dishName);
    setSelectedDishes(updated);
    localStorage.setItem("sabino_inquiry_dishes", JSON.stringify(updated));
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Stops the page from refreshing

    // Clear the saved dishes after booking is confirmed
    setSelectedDishes([]);
    localStorage.removeItem("sabino_inquiry_dishes");

    // Show confirmation message
    setIsSubmitted(true);
  };
  return (
    <div className="reservations-page">
      <div className="reservations-container">
       
        <div className="reservations-info">
          <h2>Book Your Experience</h2>
          <p>
            Whether it's an intimate dinner, a family celebration, or a casual
            gathering, reserve your table at Sabino and immerse yourself in
            contemporary African cuisine.
          </p>
          <div className="info-box">
            <h4>Opening Hours</h4>
            <p>Monday – Saturday: 9:00 AM – 10:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        
        <div className="reservations-form-wrapper">
          <form className="reservations-form" onSubmit={handleSubmit}>
            <h3>Table Reservation</h3>
            {isSubmitted && (
    <div
      style={{
        backgroundColor: "rgba(76, 175, 80, 0.15)",
        border: "1px solid #4caf50",
        color: "#81c784",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "16px",
        textAlign: "center",
      }}
    >
      🎉 Reservation confirmed! We have received your table and dish inquiry.
    </div>
  )}

         
          {selectedDishes.length > 0 && (
            <div className="selected-dishes-box">
              <label>Selected Dishes for Your Reservation:</label>
              <ul className="selected-dishes-list">
                {selectedDishes.map((dish, index) => (
                  <li key={index} className="selected-dish-item">
                    <span>
                      {dish.name} — <strong>₦{dish.price.toLocaleString()}</strong>
                    </span>
                    <button
                      type="button"
                      className="remove-dish-btn"
                      onClick={() => removeDish(dish.name)}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
              <p className="selected-dishes-total">
                Estimated Dish Total:{" "}
                <strong>
                  ₦
                  {selectedDishes
                    .reduce((sum, dish) => sum + dish.price, 0)
                    .toLocaleString()}
                </strong>
              </p>
            </div>
          )}

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />
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
        </div>
      </div>
    </div>
  );
}

export default Reservations;
