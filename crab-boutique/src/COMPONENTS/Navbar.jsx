import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`Header ${isSticky ? "sticky" : ""}`}>
        <div className="overlay">
          <div className="head">
            <div className="logo" data-aos="fade-right">
              <p className="logo-name">🦀</p>
              <div className="logo-text-stack">
                <span className="logo-line-top">CRAB</span>
                <span className="logo-line-bottom">BOUTIQUE</span>
              </div>
            </div>

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
              <ScrollLink
                to="Home"
                className="home-img"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-house"></i> Home
              </ScrollLink>
              <ScrollLink
                to="menu"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-utensils"></i> Menu
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={300}
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-circle-users"></i> About Us
              </ScrollLink>
              <Link
                to="/contact"
                className="contact-img"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-phone-volume"></i> Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
