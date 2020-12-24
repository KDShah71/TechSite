import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function WorkCard({ data }) {
  const { id, url, name } = data;
  return (
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      duration={1}
      animateOnce={true}
      key={id}
      className="workCard"
      style={{ paddingBottom: "4em" }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img alt="" src={url} className="workImg" />
        <h3 style={{ position: "absolute", bottom: "0.5em", left: "1em" }}>
          {name}
        </h3>
      </div>
      <p style={{ paddingTop: "2em" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        officia.
      </p>
    </ScrollAnimation>
  );
}

export default WorkCard;
