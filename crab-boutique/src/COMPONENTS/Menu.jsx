import "./Menu.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FOOD_DATA, CATEGORIES } from "../foodData";
function Menu() {
  const handleSendMesg = (foodname, foodprice) => {
    let number = "233203903254";
    let message = `Hello Xebi can you kindly send me a ${foodname},${foodprice}`;
    let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Navbar />
      <header className="menu-head-container">
        <p className="menu-tagline">Freshly prepared.Beautifully served</p>
        <h4 className="menu-headline">Our Menu</h4>
        <p className="menu-description">
          Explore OUr finest selection of seafood dishes,crafted with the
          freshest ingrideients for an unforgettable experience.
        </p>
        <p className="menu-hours">
          <i className="fa-regular fa-clock"></i>Open:Tuesday–Sunday 9am–8pm
        </p>
      </header>
      <>
        <main>
          <div className="menu-header-text">
            <span className="line left-line"></span>
            <p className="menu-display-text">OUR SIGNATURE DISHES</p>
            <span className="line right-line"></span>
          </div>
          <div className="menu-category-container">
            {CATEGORIES.map((menucat) => (
              <div key={menucat.id} className="category-section">
                <h3 className="category-title">
                  {menucat.icon} {menucat.name}
                </h3>

                {/* ADDED THIS WRAPPER FOR THE GRID */}
                <div className="dishes-grid">
                  {FOOD_DATA.filter(
                    (filterfood) => filterfood.category === menucat.id,
                  ).map((food) => (
                    <div key={food.id} className="food-card">
                      <div className="food-img-container">
                        <img
                          src={food.img}
                          alt={food.title}
                          loading="lazy"
                          width="400" /* Recommended: Set width & height to prevent layout shifts */
                          height="300"
                        />
                      </div>
                      <div className="food-info">
                        <h4 className="food-title">{food.title}</h4>
                        <p className="food-desc">{food.desc}</p>
                        <div className="food-footer">
                          <span className="food-price">{food.price}</span>
                          <button
                            className="order-btn"
                            onClick={() =>
                              handleSendMesg(food.title, food.price)
                            }
                          >
                            {food.btn || "Order Now"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </main>
      </>
    </>
  );
}
export default Menu;
