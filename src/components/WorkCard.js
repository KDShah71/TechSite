import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function WorkCard({ data }) {
  const { id, url, name } = data;
  return (
    <div className="workItems">
      <ScrollAnimation
        animateIn="animate__fadeInUp"
        duration={1}
        animateOnce={true}
        key={id}
        //  style={{  backgroundColor: "grey" }}
      >
        <figure
          style={{
            position: "relative",
          }}
        >
          <img alt="" src={url} className="workImg" />
          <figcaption>
            <h3 style={{ position: "absolute", bottom: "0.5em", left: "1em" }}>
              {name}
            </h3>
          </figcaption>
        </figure>
        <p style={{ paddingTop: "2em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          officia.
        </p>
      </ScrollAnimation>
    </div>
  );
}

export default WorkCard;
