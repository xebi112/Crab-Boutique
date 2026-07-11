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

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Crab Boutique. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
