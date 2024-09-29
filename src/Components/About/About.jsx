import React from "react";
import "./About.css";
import about_img from "../../assets/About.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about" />
      </div>
      <div className="about-right">
        <h3>KNOW YOUR OWNER</h3>
        <h2>Trying to add a little value in your Success Stories</h2>
        <p>
          Kashif Ahmed, the owner of RK Paying Guest, is a dedicated and
          compassionate individual whose extensive experience in hospitality
          sets him apart in the industry. With over a decade of experience in
          managing accommodations, Kashif has cultivated a deep understanding of
          the needs and preferences of his residents.
        </p>
        <p>
          This PG offers unmatched accessibility, making daily commutes a breeze
          for working professionals and students alike. The locality is not only
          well-connected but also boasts a peaceful and secure environment, with
          24/7 surveillance and easy access to essential services like
          hospitals, shopping complexes, and dining spots. RK Paying Guest takes
          pride in providing a homely atmosphere, ensuring that residents feel
          safe and cared for. With spacious, well-maintained rooms, modern
          amenities, and a focus on hygiene, RK PG is perfect for individuals
          who value both comfort and convenience.
        </p>
      </div>
    </div>
  );
};

export default About;
