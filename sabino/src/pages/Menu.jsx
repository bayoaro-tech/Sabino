import React, { useState, useEffect } from "react";
import { menuItems } from "../data/menuData.js";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import "../Menu.css";
function Menu() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
// 1. State to hold the list of reserved dishes (loads from localStorage)
  const [reservedDishes, setReservedDishes] = useState(() => {
    const saved = localStorage.getItem("sabino_inquiry_dishes");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Save to localStorage whenever reservedDishes changes
  useEffect(() => {
    localStorage.setItem("sabino_inquiry_dishes", JSON.stringify(reservedDishes));
  }, [reservedDishes]);

  // 3. Function to add the dish and close the modal
  const handleAddToInquiry = (item) => {
    const isAlreadyAdded = reservedDishes.some((dish) => dish.name === item.name);

    if (!isAlreadyAdded) {
      setReservedDishes((prevDishes) => [...prevDishes, item]);
    }

    // Close the modal after adding
    setSelectedItem(null);
  };

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
    const imagesToLoad = menuItems.map((item) => item.image);
    let loadedCount = 0;

    if (imagesToLoad.length === 0) {
      setIsLoading(false);
      return;
    }

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setIsLoading(false);
        }
      };
    });
  }, []);
 
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

              <button className="reserve-dish-btn" onClick={() => handleAddToInquiry(selectedItem)}>
                Add to Reservation Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Floating Inquiry Bar */}
      {reservedDishes.length > 0 && (
        <div className="inquiry-floating-bar">
          <div className="inquiry-info">
            <span>
              <strong>{reservedDishes.length}</strong> dish(es) added:{" "}
            </span>
            <span className="inquiry-names">
              {reservedDishes.map((d) => d.name).join(", ")}
            </span>
          </div>
          <div className="inquiry-actions">
            <button
              className="clear-inquiry-btn"
              onClick={() => setReservedDishes([])}
            >
              Clear
            </button>
            <button
              className="proceed-inquiry-btn"
              onClick={() => navigate("/reservations")}
            >
              Proceed to Reservation &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
}
export default Menu;
