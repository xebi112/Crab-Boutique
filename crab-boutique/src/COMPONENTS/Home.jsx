import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  // Use state to detect if the user has scrolled down the page
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    // Function to handle scroll and check window positioning
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function openingTime() {
    const ghanaTime = new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      weekday: "long",
      hour12: false,
      timeZone: "Africa/Accra",
    }).format(new Date());

    // Fix: Clean up formatting variables across execution runtime environments
    const cleanTime = ghanaTime.replace(",", "");
    const parts = cleanTime.split(" ");
    const daystring = parts[0];
    const hour = parseInt(parts[1], 10);

    if (daystring === "Monday") {
      return "MONDAY_CLOSED";
    }

    return hour >= 9 && hour < 20;
  }

  const shopStatus = openingTime();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* The outermost head wrapper changes state based on window position. 
        Applying the sticky class conditionally injects the structural fix.
      */}
      <div className={`Header ${isSticky ? "sticky" : ""}`}>
        <div className="head">
          <p className="logo-name">
            🦀 <span>Crab</span> Boutique
          </p>
          <div className="toggle-menus">
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

          {/* Logic Fix: Ensures links are conditionally modified when active state is true */}
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <Link to="/" className="home-img" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={300}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </ScrollLink>
            <Link
              to="/contact"
              className="contact-img"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>

        <section className="hero-section">
          <div className="small-screen-hero-mesg">
            <p className="small-screen-logo-name">
              Freshly Made,
              <br />
              Sea Food and Crab Restaurant
            </p>

            <div className="header-location">
              <p>Accra-Ghana</p>
              <Link to="/" className="view-btn">
                Explore Our Menu ⟶
              </Link>
            </div>
          </div>
          <div data-aos="zoom-in" className="hero-mesg">
            <p className="hero-location">Accra-Ghana</p>
            <h1>
              Freshly <span>Made </span>,
              <br />
              SeaFood and Crab
            </h1>
            <p className="hero-sub">
              Fresh ingredients <span>unique</span> flavours and
              <br />
              experience you'll love.
            </p>
            <div className="btns">
              <button className="hero-order-btn">Explore Our Menu →</button>
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
                ? "Sorry, We are not open on Mondays"
                : shopStatus
                  ? " WE ARE OPEN"
                  : "CLOSED UNTIL 9AM"}
            </p>
          </div>
        </div>
      </section>

      <main className="container">
        <div>
          <p className="story">OUR STORY</p>
        </div>
        <div className="img-left" data-aos="fade-right">
          <img src="img-3.jpeg" alt="Togetherness" />
          <div className="story-text">
            <h3 className="sub-text">At Crab Boutique,</h3>
            <p className="text">
              Every table is more than a place to eat it’s where friendships
              grow, laughter fills the air, and games turn into memories. Each
              dish is part of the fun.
            </p>
          </div>
        </div>

        <div className="img-right" data-aos="fade-left">
          <img src="img-4.jpeg" alt="Freshness" />
          <div className="story-text">
            <h3 className="sub-text">From the ocean’s depth to your plate,</h3>
            <p className="text">
              We bring the finest crabs and seafood, prepared with care so every
              bite carries the taste of freshness and authenticity.
            </p>
          </div>
        </div>

        <div className="img-left" data-aos="fade-right">
          <img src="img-5.jpeg" alt="Artistry" />
          <div className="story-text">
            <h3 className="sub-text">Boutique Creations</h3>
            <p className="text">
              Every dish is a blend of tradition and bold flavors, plated with
              artistry and served with passion to satisfy your soul.
            </p>
          </div>
        </div>

        <div className="img-right">
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

        <div className="menu-table" id="menu">
          <div className="menu-header-area">
            <p className="menu-head">our Menu</p>
            <Link to="/menu" className="menu-text">
              View Full Experience ⟶
            </Link>
          </div>

          <div className="table-grid">
            <div className="menu-item">
              <div className="item-info">
                <img src="homebg.jpeg" className="menu-img" alt="Menu item" />
                <h3>Whole Spiced Crab</h3>
                <p>House-cracked, ginger-chili butter, lime.</p>
                <span className="item-price">GH₵ — 200</span>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-info">
                <img src="homebg.jpeg" className="menu-img" alt="Menu item" />
                <h3>Garlic Butter Shrimp</h3>
                <p>Sautéed in premium herbs and garlic.</p>
                <span className="item-price">GH₵ — 150</span>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-info">
                <img src="homebg.jpeg" className="menu-img" alt="Menu item" />
                <h3>Lobster Thermidor</h3>
                <p>Rich creamy brandy sauce with parmesan.</p>
                <span className="item-price">GH₵ —100</span>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-info">
                <img src="homebg.jpeg" className="menu-img" alt="Menu item" />
                <h3>Crab Cakes</h3>
                <p>Jumbo lump crab with spicy remoulade.</p>
                <span className="item-price">GH₵ —250</span>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-info">
                <img src="homebg.jpeg" className="menu-img" alt="Menu item" />
                <h3>Seafood Platter</h3>
                <p>A mix of our best catches, grilled to perfection.</p>
                <span className="item-price">GH₵ —120</span>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-info">
                <img src="homebg.jpeg" className="menu-img" alt="Menu item" />
                <h3>Spicy Crab Soup</h3>
                <p>Traditional recipe with a boutique twist.</p>
                <span className="item-price">GH₵ — 67</span>
              </div>
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
                style={{ border: 0, borderRadius: "2px" }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
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
                  <i className="fas fa-phone-alt"></i>For Orders Call Us
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
                © {new Date().getFullYear()} Crab Boutique. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;
