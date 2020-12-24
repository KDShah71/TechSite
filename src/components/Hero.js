import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className=" ">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          duration={1}
          animateOnce={true}
        >
          <h2>We create Techonolgy of future</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam
            itaque blanditiis possimus nisi vitae necessitatibus
          </h3>
          <button className="btn">More</button>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Hero;
