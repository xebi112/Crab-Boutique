import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";
import { FOOD_DATA, CATEGORIES } from "../foodData";

function Homemenu() {
  const [isActive, setisActive] = useState("all");
  const filtedFood =
    isActive === "all"
      ? FOOD_DATA
      : FOOD_DATA.filter((item) => item.category === isActive); //rice dishes

  const handleSendMesg = (foodname, foodprice) => {
    let number = "233203903254";
    let message = `Hello Xebi can you kindly send me a ${foodname},${foodprice}`;
    let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="menu-table" id="menu">
        <div className="menu-header-area">
          <span>🦀</span>
          <p className="menu-intro">Feeling Hungry?😋 </p>
          <h3>Your next favorite seafood meal is</h3>
          <span className="menu-subtext">just one tap away</span>
          <p className="menu-head">Our Menu</p>

          <h5 className="opening-hours-text">
            <i className="fa-regular fa-clock"></i> Opening Hours:
            Tuesday–Sunday 9am–8pm
          </h5>
          <Link to="/Menu" className="menu-link-text">
            View Full Menu Experience ⟶
          </Link>
          <p>Category</p>
          <div className="category-container">
            {CATEGORIES.map((cat) => (
              <>
                <button
                  key={cat.id}
                  onClick={() => setisActive(cat.id)}
                  className={`category-btn ${isActive === cat.id ? "active" : ""}`}
                >
                  {cat.icon}
                  <span className="cat-name">{cat.name}</span>
                </button>
              </>
            ))}
          </div>

          <div className="table-grid">
            {filtedFood.map((show) => (
              <>
                <div className="menu-item" key={show.id}>
                  <div className="item-info">
                    <img
                      src={show.img}
                      className="menu-img"
                      loading="lazy"
                      width="400" /* Recommended: Set width & height to prevent layout shifts */
                      height="300"
                    />
                    <div className="food-text-container">
                      <h3>{show.title}</h3>
                      <p>{show.desc}</p>
                      <div className="price-order-row">
                        <span className="item-price">{show.price}</span>
                        <button
                          className="food-order-btn"
                          onClick={() => handleSendMesg(show.title, show.price)}
                        >
                          {show.btn || "Order Now"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homemenu;
