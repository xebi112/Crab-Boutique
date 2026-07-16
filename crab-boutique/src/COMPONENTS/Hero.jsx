import { Link } from "react-router-dom";
function Hero() {
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
    console.log(hour);
    if (daystring === "Monday") {
      return "MONDAY_CLOSED";
    }

    return hour >= 9 && hour < 20;
  }

  const shopStatus = openingTime();
  return (
    <>
      <section className="hero-section">
        <div className="small-screen-hero-mesg" id="Home">
          <p className="small-screen-logo-name" data-aos="fade-right">
            Your Favorite,
            <br />
            SeaFood and Crab Restaurant
          </p>

          <div className="header-location">
            <p>Accra-Ghana</p>
            <Link to="/" className="view-btn">
              <i className="fas fa-utensils"></i> Explore Our Menu ⟶
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
            <Link to="/Menu">
              <button className="hero-order-btn">Explore Our Menu →</button>
            </Link>
          </div>
        </div>
      </section>
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
                ? " We are not open on Mondays"
                : shopStatus
                  ? " WE ARE OPEN"
                  : "CLOSED UNTIL 9AM"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
