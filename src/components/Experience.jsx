import React from "react";
import "./Experience.css";
import logo11 from "../assets/logo11.png";
import logo2 from "../assets/logo2.png";
const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <div className="my-experience">
        <h2>My Experiences</h2>
        <p>
          One of the most beautiful parts of every person's life, the part of
          their work life, I am very happy to have spent this part of my life
          with the people I loved, and it has made my interest in my work more
          and more
        </p>
      </div>

      <div className="cards-cont">
        <div className="cards">
          <div className="top-row">
            <img src={logo2} className="imgslogo" alt="company logo" />
            <span className="joining">27/JAN/2025 - 27/JUL/2025</span>
          </div>

          <div className="intern">
            <h3>Training - KP IT Experts</h3>
          </div>

          <div className="desc">
            <p>
              Learned SEO, Google Ads, Social Media Marketing, and Content
              Marketing.
            </p>
            <p>Worked on keyword research and website optimization.</p>
            <p>
              {" "}
              Gained practical experience with digital marketing tools and
              strategies.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="cards">
          <div className="top-row">
            <img src={logo2} className="imgslogo" alt="company logo" />
            <span className="joining">23/March/2025 - 27/Sept/2025</span>
          </div>

          <div className="intern">
            <h3>Internship - KP IT Experts</h3>
          </div>

          <div className="desc">
            <p>
              Worked on SEO, Social Media Marketing, and Content Marketing
              projects.
            </p>
            <p>
             Gained practical experience with Google Analytics, Google Search Console, and Canva.
            </p>
            <p>Improved brand visibility and audience engagement through digital marketing strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
