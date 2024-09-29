import React from "react";
import "./Programs.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="p1" />
        <div className="caption">
          <p>Nearby Metro</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="p2" />
        <div className="caption">
          <p>Greenery Around</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="p3" />
        <div className="caption">
          <p>Safe Environment</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
