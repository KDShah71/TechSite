import React from "react";
import { AiOutlineBulb } from "react-icons/ai";

function ServiceCard({ data }) {
  const { id, name } = data;
  return (
    <div className="service-box " key={id}>
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
    </div>
  );
}

export default ServiceCard;
