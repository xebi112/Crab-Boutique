import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      hour: "numeric",
      hour12: false,
      timeZone: "Africa/Accra",
    }).format(new Date());

    const hour = parseInt(ghanaTime);

    return hour >= 9 && hour < 20;
  }
  return (
    <>
      <div className="Header">
        <div className="head">
          <p className="logo-name">
            🦀 <span>Crab</span> Boutique
          </p>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <section className="hero-section">
          <div data-aos="zoom-in">
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
              <button className="hero-order-btn">View Menu via Whatsapp</button>
              <button className="hero-order-num">Call Us:024 442 2614</button>
            </div>
          </div>
        </section>
      </div>

      <section className="details">
        <p>
          <i className="fas fa-map-marker-alt"></i> Address Kanfla Cl, Accra
        </p>
        <p>
          <i className="fas fa-utensils"></i> Menu
        </p>
        <p>
          <i className="fas fa-clock"></i> Opens 9am:
          {openingTime() ? "Yes We're Open" : " We’re Closed 😴"}
        </p>
      </section>

      <main className="container">
        {/* Story Section 1 - Left */}
        <div className="img-left" data-aos="fade-right">
          <img src="img-3.jpeg" alt="Togetherness" />
          <div className="story-text">
            <h3 className="sub-text">At Crab Boutique,</h3>
            <p>
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
            <p>
              We bring the finest crabs and seafood, prepared with care so every
              bite carries the taste of freshness and authenticity.
            </p>
          </div>
        </div>

        {/* Story Section 3 - Left */}
        <div className=" img-left" data-aos="fade-right">
          <img src="img-5.jpeg" alt="Artistry" />
          <div className="story-text">
            <h3 className="sub-text">Boutique Creations</h3>
            <p>
              Every dish is a blend of tradition and bold flavors, plated with
              artistry and served with passion to satisfy your soul.
            </p>
          </div>
        </div>

        {/* Story Section 4 - Right */}
        <div className=" img-right" data-aos="fade-left">
          <img src="img-6.jpeg" alt="Connection" />
          <div className="story-text">
            <h3 className="sub-text">An experience of connection.</h3>
            <p>
              At Crab Boutique, meals become stories, and stories become
              memories worth sharing with those you love.
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Menu Table */}
        <div className="menu-table" data-aos="fade-up">
          <p className="menu-head">The Menu</p>
          <Link to="/menu" className="menu-text">
            Check Out What We’ve Got &#10230;
          </Link>
          <div className="table-grid">
            <div className="menu-column">
              <h3>Whole Spiced Crab</h3>
              <p>House-cracked, ginger-chili butter, lime.</p>
              <h3>Garlic Butter Shrimp</h3>
              <p>Sautéed in premium herbs and garlic.</p>
            </div>
            <div className="menu-column">
              <h3>Lobster Thermidor</h3>
              <p>Rich creamy brandy sauce with parmesan.</p>
              <h3>Crab Cakes</h3>
              <p>Jumbo lump crab with spicy remoulade.</p>
            </div>
            <div className="menu-column">
              <h3>Seafood Platter</h3>
              <p>A mix of our best catches, grilled to perfection.</p>
              <h3>Spicy Crab Soup</h3>
              <p>Traditional recipe with a boutique twist.</p>
            </div>
          </div>
        </div>

        <footer className="about-footer">
          <p className="about-text">Find Us On The Map</p>
          <div className="map-container" data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15895.798849460549!2d-1.28045335!3d5.111807999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1778118849518!5m2!1sen!2sgh"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <p className="footer-mission">
            At Crab Boutique, every meal is crafted with passion, freshness, and
            unforgettable flavor.
          </p>

          <section className="about-details">
            <div>
              <h5> 📍Location</h5>
              <span>27 Kanfla close Asylum-Down</span>
            </div>
            <div>
              <h5>Call Us</h5>
              <span>+233 24 442 2614</span>
            </div>
            <div>
              <h5>Email</h5>
              <span>crabboutique@gmail.com</span>
            </div>
          </section>
        </footer>
      </main>
    </>
  );
}

export default Home;
