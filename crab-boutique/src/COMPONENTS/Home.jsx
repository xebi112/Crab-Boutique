import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  function openingTime() {
    // Forces the hour to be calculated based on Accra, Ghana time
    const ghanaTime = new Intl.DateTimeFormat("en-GB", {
      hour: "numeric", //ask js for only the hour forgets the minand sec
      weekday: "long", //gives us the day frm 0-6 monday to sunday
      hour12: false,
      timeZone: "Africa/Accra",
    }).format(new Date());

    const [daystring, timestring] = ghanaTime.split(", ");
    const hour = parseInt(timestring, 10); //turns the string hour into a number

    if (daystring === "Monday") {
      return "MONDAY_CLOSED";
    }

    return hour >= 9 && hour < 20; // if the number is >=9 and less dan 8:00 its open or close
  }
  const shopStatus = openingTime();
  //use state for togle
  const [isOpen, setIsOpen] = useState(false);

  // toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="Header">
        <div className="head">
          <p className="logo-name">
            🦀 <span>Crab</span> Boutique
          </p>
          <div className="toggle-menus">
            {/* 3. Logic: If NOT open, show Burger. If open, show Times (X) */}
            {!isOpen ? (
              <div className="menu-burger" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
              </div>
            ) : (
              <div className="close-btn" onClick={toggleMenu}>
                <i className="fa-solid fa-times"></i>
              </div>
            )}
          </div>

          {/* 4. Links show only when isOpen is true */}
          <div className={`nav-links ${isOpen ? "" : "active"}`}>
            <Link to="/">Home</Link>
            <ScrollLink to="menu" smooth={true} duration={500}>
              Menu
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={300}>
              About Us
            </ScrollLink>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <section className="hero-section">
          <div className="small-screen-hero-mesg">
            <h1 className="small-screen-logo-name">
              <span>Crab</span> Boutique
            </h1>
            <p className="small-screen-hero-submesg">
              For orders call
              <span>0244422614/0559646474 </span> Tues- Sunday.9am-10pm
            </p>
            <div className="header-location">
              <p>Accra-Ghana</p>
              <Link to="/" className="view-btn">
                View via Whatsapp ⟶
              </Link>
            </div>
          </div>
          <div data-aos="zoom-in" className="hero-mesg">
            <p className="hero-location">Accra-Ghana</p>
            <h1>
              Delicious Meals,
              <br />
              <span>Made </span> for You
            </h1>
            <p className="hero-sub">
              Fresh ingredients <span>unique</span> flavours and
              <br />
              experience you'll love.
            </p>
            <div className="btns">
              <button className="hero-order-btn">
                View Menu via Whatsapp &rarr;
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="details-container">
        <div className="details-item">
          <div className="icon-box">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="details-text">
            <span className="label">Location</span>
            <p className="value">Kanfla Cl, Accra</p>
          </div>
        </div>
        <div className="details-item">
          <div className="icon-box">
            <i className="fas fa-star"></i>
          </div>
          <div className="details-text">
            <span className="label">Rating 4.3</span>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>

        <div className="details-item">
          <div className="icon-box">
            <i className="fas fa-utensils"></i>
          </div>
          <div className="details-text">
            <span className="label">Experience</span>
            <p className="value">Curated Menu</p>
          </div>
        </div>

        <div className="details-item">
          <div className="icon-box">
            <i className="fas fa-clock"></i>
          </div>
          <div className="details-text">
            <span className="label">Daily Hours</span>
            <p
              className={`status-value ${shopStatus === true ? "open" : "closed"}`}
            >
              {shopStatus === "MONDAY_CLOSED"
                ? "Sorry,We are not open on Mondays"
                : shopStatus
                  ? "OPEN"
                  : "CLOSED UNTIL 9AM"}
            </p>
          </div>
        </div>
      </section>

      <main className="container">
        {/* Story Section 1 - Left */}
        <div className="img-left" data-aos="fade-right">
          <img src="img-3.jpeg" alt="Togetherness" />
          <div className="story-text">
            <h3 className="sub-text">At Crab Boutique,</h3>
            <p className="text">
              Every table is more than a place to eat — it’s where friendships
              grow, laughter fills the air, and games turn into memories. Each
              crab dish is part of the fun.
            </p>
          </div>
        </div>

        {/* Story Section 2 - Right */}
        <div className=" img-right" data-aos="fade-left">
          <img src="img-4.jpeg" alt="Freshness" />
          <div className="story-text">
            <h3 className="sub-text">From the ocean’s depth to your plate,</h3>
            <p className="text">
              We bring the finest crabs and seafood, prepared with care so every
              bite carries the taste of freshness and authenticity.
            </p>
          </div>
        </div>

        {/* Story Section 3 - Left */}
        <div className=" img-left">
          <img src="img-5.jpeg" alt="Artistry" />
          <div className="story-text">
            <h3 className="sub-text">Boutique Creations</h3>
            <p className="text">
              Every dish is a blend of tradition and bold flavors, plated with
              artistry and served with passion to satisfy your soul.
            </p>
          </div>
        </div>

        {/* Story Section 4 - Right */}
        <div className=" img-right">
          <img src="img-6.jpeg" alt="Connection" />
          <div className="story-text">
            <h3 className="sub-text">An experience of connection.</h3>
            <p className="text">
              At Crab Boutique, meals become stories, and stories become
              memories worth sharing with those you love.
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Menu Table */}
        <div className="menu-table">
          <div className="menu-header-area">
            <p className="menu-head" id="menu">
              The Menu
            </p>
            <Link to="/menu" className="menu-text">
              View Full Experience ⟶
            </Link>
          </div>

          <div className="table-grid">
            {/* Item 1 */}
            <div className="menu-item">
              <div className="item-info">
                <h3>Whole Spiced Crab</h3>
                <p>House-cracked, ginger-chili butter, lime.</p>
              </div>
              <span className="item-price">GH₵ —</span>
            </div>

            {/* Item 2 */}
            <div className="menu-item">
              <div className="item-info">
                <h3>Garlic Butter Shrimp</h3>
                <p>Sautéed in premium herbs and garlic.</p>
              </div>
              <span className="item-price">GH₵ —</span>
            </div>

            {/* Item 3 */}
            <div className="menu-item">
              <div className="item-info">
                <h3>Lobster Thermidor</h3>
                <p>Rich creamy brandy sauce with parmesan.</p>
              </div>
              <span className="item-price">GH₵ —</span>
            </div>

            {/* Item 4 */}
            <div className="menu-item">
              <div className="item-info">
                <h3>Crab Cakes</h3>
                <p>Jumbo lump crab with spicy remoulade.</p>
              </div>
              <span className="item-price">GH₵ —</span>
            </div>

            {/* Item 5 */}
            <div className="menu-item">
              <div className="item-info">
                <h3>Seafood Platter</h3>
                <p>A mix of our best catches, grilled to perfection.</p>
              </div>
              <span className="item-price">GH₵ —</span>
            </div>

            {/* Item 6 */}
            <div className="menu-item">
              <div className="item-info">
                <h3>Spicy Crab Soup</h3>
                <p>Traditional recipe with a boutique twist.</p>
              </div>
              <span className="item-price">GH₵ — 67</span>
            </div>
          </div>
        </div>

        <footer className="about-footer" id="about">
          <div className="map-section">
            <p className="about-text">Find Us On The Map</p>
            <div className="map-container" data-aos="zoom-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0123456789!2d-0.2012345!3d5.5612345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnNDAuNCJOIDDCsDEyJDA0LjQiVw!5e0!3m2!1sen!2sgh!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="footer-content">
            <hr className="footer-divider" />

            <section className="about-details">
              <div className="footer-info-block">
                <h5>
                  <i className="fas fa-location-dot"></i> Location
                </h5>
                <span>27 Kanfla Close, Asylum-Down</span>
              </div>

              <div className="footer-info-block">
                <h5>
                  <i className="fas fa-phone-alt"></i> Call Us
                </h5>
                <span>+233 24 442 2614</span>
              </div>

              <div className="footer-info-block">
                <h5>
                  <i className="fas fa-envelope"></i> Email
                </h5>
                <span>crabboutique@gmail.com</span>
              </div>
            </section>

            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Crab Boutique. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;
