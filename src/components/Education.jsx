import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div id="education">
      <h2 className="heading"> Education</h2>
      <div className="line"></div>
      <div className="edtech">
       
        <div className="edsecound">
             <div className="goal"></div>
          <div className="year">2021-2023</div>
          <h3 className="degree">Bechlor of Commerce </h3>
          <p className="college">HPU Shimla</p>
          
        </div>
         <div className="edsecound">
             <div className="goal"></div>
          <div className="year">2024</div>
          <h3 className="degree">Basic Computer Course </h3>
          <p className="college">Hamirpur</p>
          
        </div>
        <div className="linear"></div>
      </div>
    </div>
  );
};

export default Education;
