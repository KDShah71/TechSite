import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { AiOutlineBulb } from "react-icons/ai";

function ServiceCard({ data }) {
  const { id, name } = data;
  return (
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      duration={1}
      animateOnce={true}
      // delay={100}
      className="service-box "
      key={id}
    >
      <div className="ta-c">
        <h2>
          <AiOutlineBulb />
        </h2>
      </div>
      <h3 className="">{name}</h3>
      <p></p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet!
      </p>
    </ScrollAnimation>
  );
}

export default ServiceCard;
