import { Link } from "react-router-dom";
import { useState } from "react";
import { FOOD_DATA, CATEGORIES } from "../foodData";

function Menu() {
  const [isActive, setisActive] = useState("all");
  const filtedFood =
    isActive === "all"
      ? FOOD_DATA
      : FOOD_DATA.filter((item) => item.category === isActive);

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
          <Link to="/menu" className="menu-link-text">
            View Full Menu Experience ⟶
          </Link>
          <p>Category</p>
          {CATEGORIES.map((cat) => (
            <>
              <button
                key={cat.id}
                onClick={() => setisActive(cat.id)}
                className={`category-btn ${isActive === cat.id ? "active" : ""}`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            </>
          ))}
          <div className="table-grid">
            {filtedFood.map((show) => (
              <>
                <div className="menu-item" key={show.id}>
                  <div className="item-info">
                    <img src={show.img} className="menu-img" />
                    <div className="food-text-container">
                      <h3>{show.title}</h3>
                      <p>{show.desc}</p>
                      <span className="item-price">{show.price}</span>
                      <button className="food-order-btn">{show.btn}</button>
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

export default Menu;
