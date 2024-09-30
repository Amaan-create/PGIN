import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import icon from "../../assets/User.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon} alt="" />
                <div>
                  <h3>Customer1</h3>
                </div>
              </div>
              <p>
                "Bohot hi accha experience raha yaha. Metro station ke bilkul
                paas hone ki wajah se office jaana bahut aasaan ho gaya. Kashif
                bhai kaafi helpful hain, har chhoti se chhoti cheez ka dhyaan
                rakhte hain. Safety ke mamle mein bhi 5 star hai yeh PG."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon} alt="" />
                <div>
                  <h3>Customer2</h3>
                </div>
              </div>
              <p>
                "RK PG ekdum ghar jaise feel deta hai. Rooms clean hote hain aur
                facilities bhi sab modern hain. Kashif bhai ka nature bahut acha
                hai, hamesha madad ke liye tayar rehte hain. Vaishali ka area
                bhi kaafi safe aur convenient hai."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon} alt="" />
                <div>
                  <h3>Customer3</h3>
                </div>
              </div>
              <p>
                {" "}
                "Mujhe yaha rehkar bahut achha laga. Location bhi perfect hai,
                market aur metro dono paas mein hain. Kashif bhai kaafi
                samajhdaar aur cooperative hain, kabhi koi dikkat hui toh turant
                solve kar di. Yaha rehkar bilkul ghar jaisa sukoon mila."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon} alt="" />
                <div>
                  <h3>Customer4</h3>
                </div>
              </div>
              <p>
                "PG ki facilities aur location dono best hain. Kashif bhai ki
                wajah se yaha rehna aur bhi easy ho gaya. Vo hamesha residents
                ki help karte hain aur atmosphere bhi friendly hai. Agar
                Vaishali mein PG chahiye toh yeh ekdum perfect jagah hai."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon} alt="" />
                <div>
                  <h3>Tenet 5</h3>
                </div>
              </div>
              <p>
                "Staying at RK PG has been a wonderful experience. The proximity
                to the Vaishali Metro Station made commuting so easy, and the
                locality is very safe. Kashif, the owner, is extremely helpful
                and ensures everything runs smoothly. I highly recommend this
                place for anyone looking for a comfortable and secure stay."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon} alt="" />
                <div>
                  <h3>Tenet 6</h3>
                </div>
              </div>
              <p>
                "RK Paying Guest feels just like home. The rooms are clean, and
                the amenities are top-notch. Kashif is always available for any
                assistance and goes the extra mile to make sure everyone feels
                comfortable. The location is ideal, with everything close by,
                and the security is top-notch. It's a great place to live!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
