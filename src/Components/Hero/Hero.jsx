import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  const phoneNumber = "919555521206"; // Replace with your phone number in international format
  const message = "Hello! I would like to know more about your services."; // Customize your message

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank"); // Redirects to WhatsApp chat
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure you with a home away from home.</h1>
        <p>
          RK Paying Guest in Vaishali is the ideal accommodation choice for
          those seeking a comfortable, safe, and convenient stay in one of the
          best localities near the metro. Situated just a stone’s throw away
          from the Vaishali Metro Station, this PG offers unmatched
          accessibility, making daily commutes a breeze for working
          professionals and students alike.
        </p>
        <button className="btn" onClick={handleWhatsAppClick}>
          Connect With Us on WhatsApp <img src={dark_arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
