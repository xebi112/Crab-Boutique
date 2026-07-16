function Footer() {
  return (
    <>
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
              title="Location Map"
            ></iframe>
          </div>
        </div>
        <div className="footer-content">
          {/* Column 1: Logo & Brand Caption */}
          <div className="footer-logo">
            {/* Changed alignItems to "center" and aligned the text to center */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "6px",
                width: "100%",
              }}
            >
              <p
                className="footer-logo-name"
                style={{ margin: 0, fontSize: "2.5rem" }}
              >
                🦀
              </p>
              <div
                className="footer-logo-text-stack"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="footer-logo-line-top">CRAB</span>
                <span className="footer-logo-line-bottom">BOUTIQUE</span>
              </div>
            </div>
            <p
              className="footer-logo-caption"
              style={{ textAlign: "center", margin: "15px auto 0" }}
            >
              Premium Seafood. Unmatched flavor. Unforgettable experience.
              Welcome to Crab Boutique.
            </p>
            <div className="social-links">
              <a
                href="https://instagram.com/_xebicronwell"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://wa.me/233244422614"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Column 2: ADDED QUICK LINKS SECTION */}
          <section className="footer-menu">
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Menu</p>
            <p>About Us</p>
            <p>Contact</p>
          </section>

          {/* Column 3: Our Menu */}
          <section className="footer-menu">
            <h3>Our Menu</h3>
            <p>Crab dish</p>
            <p>Shrimp dish</p>
            <p>Rice dish</p>
            <p>Slides </p>
            <p>Drinks </p>
            <p>Desserts </p>
          </section>

          {/* Column 4: Contact Us Details */}
          <section className="about-details">
            <div className="footer-info-block">
              <p>Contact Us</p>
              <h5>
                <i className="fas fa-location-dot"></i> Location
              </h5>
              <span>27 Kanfla Close, Asylum-Down</span>
            </div>

            <div className="footer-info-block">
              <h5>
                <i className="fas fa-phone-alt"></i> For Orders Call Us
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
        </div>
      </footer>
    </>
  );
}
export default Footer;
