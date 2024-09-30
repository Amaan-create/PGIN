import React from "react";
import {useEffect} from 'react';
import "./Pg.css";
import p1 from "../../assets/P1.jpg";
import p2 from "../../assets/P2.jpg";
import p3 from "../../assets/P3.jpg";
import p4 from "../../assets/P4.jpg";
import p5 from "../../assets/P5.jpg";
import p6 from "../../assets/P6.jpg";
import p7 from "../../assets/P7.jpg";
import p8 from "../../assets/P8.jpg";
import p9 from "../../assets/P9.jpg";
import p10 from "../../assets/P10.jpg";
import p11 from "../../assets/P11.jpg";
import p12 from "../../assets/P12.jpg";
import p13 from "../../assets/P13.jpg";
import p14 from "../../assets/P14.jpg";
import p15 from "../../assets/P15.jpg";
import p16 from "../../assets/P16.jpg";
import p17 from "../../assets/P17.jpg";
import p18 from "../../assets/P18.jpg";
import p19 from "../../assets/P19.jpg";
import p20 from "../../assets/P20.jpg";
import p21 from "../../assets/P21.jpg";
import p22 from "../../assets/P22.jpg";
import p23 from "../../assets/P23.jpg";
import p24 from "../../assets/P24.jpg";
import p25 from "../../assets/P25.jpg";
import p26 from "../../assets/P26.jpg";
import p27 from "../../assets/P27.jpg";
import p28 from "../../assets/P28.jpg";
import p29 from "../../assets/P29.jpg";
import p30 from "../../assets/P30.jpg";
import p31 from "../../assets/P31.jpg";
import p32 from "../../assets/P32.jpg";
import p33 from "../../assets/P33.jpg";
import p34 from "../../assets/P34.jpg";
import p35 from "../../assets/P35.jpg";
import p36 from "../../assets/P36.jpg";
import p37 from "../../assets/P37.jpg";
import p38 from "../../assets/P38.jpg";
import p39 from "../../assets/P39.jpg";
import p40 from "../../assets/P40.jpg";

const Pg = () => {
   useEffect(() => {
    const gallerySection = document.querySelector("#gallery"); // Adjust this based on your gallery section
    const originalPosition = window.pageYOffset;
    const scrollDuration = 3000; // 3 seconds
    const totalSteps = 60; // Increase for smoother and slower scroll
    let currentStep = 0;

    const scrollInterval = setInterval(() => {
      const galleryPosition =
        gallerySection.getBoundingClientRect().top + window.pageYOffset;
      const scrollStep = (galleryPosition - originalPosition) / totalSteps;

      window.scrollBy(0, scrollStep);

      currentStep += 1;
      if (currentStep >= totalSteps) {
        clearInterval(scrollInterval);

        // Scroll back after reaching the gallery
        setTimeout(() => {
          let backStep = 0;
          const backInterval = setInterval(() => {
            window.scrollBy(0, -scrollStep);
            backStep += 1;
            if (backStep >= totalSteps) {
              clearInterval(backInterval);
            }
          }, scrollDuration / totalSteps);
        }, 5000); // Wait for 3 seconds at the gallery
      }
    }, scrollDuration / totalSteps);
  }, []);

  return (
    <div id="gallery" className="campus">
      <div className="gallery">
        <img src={p1} alt="" />
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
      </div>
      <div className="gallery">
        <img src={p5} alt="" />
        <img src={p6} alt="" />
        <img src={p7} alt="" />
        <img src={p8} alt="" />
      </div>
      <div className="gallery">
        <img src={p9} alt="" />
        <img src={p10} alt="" />
        <img src={p11} alt="" />
        <img src={p12} alt="" />
      </div>
      <div className="gallery">
        <img src={p13} alt="" />
        <img src={p14} alt="" />
        <img src={p15} alt="" />
        <img src={p16} alt="" />
      </div>
      <div className="gallery">
        <img src={p17} alt="" />
        <img src={p18} alt="" />
        <img src={p19} alt="" />
        <img src={p20} alt="" />
      </div>
      <div className="gallery">
        <img src={p21} alt="" />
        <img src={p22} alt="" />
        <img src={p23} alt="" />
        <img src={p24} alt="" />
      </div>
      <div className="gallery">
        <img src={p25} alt="" />
        <img src={p26} alt="" />
        <img src={p27} alt="" />
        <img src={p28} alt="" />
      </div>
      <div className="gallery">
        <img src={p29} alt="" />
        <img src={p30} alt="" />
        <img src={p31} alt="" />
        <img src={p32} alt="" />
      </div>
      <div className="gallery">
        <img src={p33} alt="" />
        <img src={p34} alt="" />
        <img src={p35} alt="" />
        <img src={p36} alt="" />
      </div>
      <div className="gallery">
        <img src={p37} alt="" />
        <img src={p38} alt="" />
        <img src={p39} alt="" />
        <img src={p40} alt="" />
      </div>
    </div>
  );
};

export default Pg;
