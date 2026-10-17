import React, { useState, useEffect } from "react";
import { menuItems } from "../data/menuData.js"
import Loading from "../components/Loading"
import "../Menu.css";
function Menu() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  
  const categories = [
    "all",
    "swallow",
    "soups",
    "stew",
    "rice",
    "protein",
    "streetfood",
    "drinks",
  ];
  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);
      useEffect(() => {
        // Simulate a brief loading delay (e.g., 800 milliseconds)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // If it's still loading, show the Loading component instead of the page
    if (isLoading) {
        return <Loading />;
    }
  return (
    <div className="menu-page">
      <main className="page">
        <h1>SABINO Menu</h1>
        <p>Discover our delicious selection of dishes!</p>
      </main>
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="menu-grid">
        {filteredItems.map((item) => {
          return (
            <div
              className="food-card"
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} className="food-thumb" />
              <div className="food-info">
                <h3>{item.name}</h3>
                <p className="food-price">₦{item.price.toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              &times;
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="modal-img"
            />

            <div className="modal-details">
              <h2>{selectedItem.name}</h2>
              <p className="modal-price">
                ₦{selectedItem.price.toLocaleString()}
              </p>
              <p className="modal-desc">
                A delicious traditional delicacy crafted fresh with authentic
                ingredients and rich flavors. Perfect for your dining
                experience.
              </p>

              
              <button className="reserve-dish-btn">
                Add to Reservation Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Menu;
