import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Pg from "./Components/Pg/Pg";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Facilities" title="What We Offer" />
        <Programs />
        <About />
        <Title
          subTitle="Gallery"
          title="Prices starting from 4999/- Triple Sharing, Double Sharing 6500/-, Triple Sharing 5000/- AC Room"
        />
        <Pg />
        <Title subTitle="TESTIMONIALS" title="Our Tenets" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
