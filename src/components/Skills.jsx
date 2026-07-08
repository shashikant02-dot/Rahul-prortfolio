import React from "react";
import "./Skills.css";
import seo from "../assets/seo.png";
import smm from "../assets/smm.png";
import ads from "../assets/ads.png";
import bg from "../assets/bg.png";
import cm from "../assets/cm.png";
import em from "../assets/em.png";
const Skills = () => {
  return (
    <div id="skills">
      <h2 className="heading">Skills</h2>
      <div className="line"></div>
      <div className="grid-container">
        <div className="item">
          <img src={seo} alt="" className="skill-icon" />
          <h3>SEO</h3>
        </div>
        <div className="item">
          <img src={smm} alt="" />
          <h3>SMM</h3>
        </div>
        <div className="item">
          <img src={ads} alt="" />
          <h3>Google Ads</h3>
        </div>
        <div className="item">
          <img src={bg} alt="" />
          <h3>Facebook & Instagram Marketing</h3>
        </div>
        <div className="item">
          <img src={cm} alt="" className="skill-icon" />
          <h3>Content Marketing</h3>
        </div>
        <div className="item">
          <img src={em} alt="" />
          <h3>Email Marketing</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
