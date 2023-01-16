import React from "react";
import hero_image from "../images/photolab.jpg";
import "../css/hero.css";

function Hero() {
  return (
    <div className="hero--main">
      <img src={hero_image} alt="hero" className="hero--image" />
      <div className="hero--info">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities, led by one-of-a-kind host-all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
