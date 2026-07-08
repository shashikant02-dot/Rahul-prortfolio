import React from "react";
import "./Protfolio.css";
import vite from '../assets/vite.svg'
import image1 from'../assets/pb.jpeg'
import image2 from'../assets/hp.jpeg'

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="heading">Project Under Working</h2>
      <div className="line"></div>


      <div className="project-container">
        <div className="projects">
<a
  href="https://www.punjabdastak.com"
  target="_blank"
  rel="noopener noreferrer"
>
<img src={image1} alt=""></img></a>            <div className="card">
                <h3>Punjab Dastak</h3>
                <p>Published and optimized SEO-friendly news articles on WordPress, including keyword research, content formatting, meta tag optimization, image SEO, and internal linking to improve search visibility. </p>
               
            </div>
        </div>
        <div className="projects">
<a
  href="https://hpcab.com/"
  target="_blank"
  rel="noopener noreferrer"
>
<img src={image2} alt=""></img></a>            
<div className="card">
                <h3>HPCab.com</h3>
                <p>Built high-quality backlinks through guest posting, profile creation, business listings, and other off-page SEO techniques to improve website authority and organic rankings. </p>
            </div>
        </div>
        {/* <div className="projects">
             <img src={image1} alt=""></img>
            <div className="card">
                <h3>ONLINE TUTOR APK</h3>
                <p>Build a Front-End E-learning website with login search and card features </p>
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
        </div> */}
        {/* <div className="projects">
             <img src={image2} alt=""></img>
            <div className="card">
                <h3>ONLINE FOOD APK</h3>
                <p>Build a Front-End website with designing the user interface,order menus and
implementing the ordering process </p>
                <span>HTML</span><span>CSS</span>
            </div>
        </div> */}
      </div>
   
    </div>
    
  );
};

export default Portfolio;
