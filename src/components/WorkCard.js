import React from "react";

function WorkCard({ data }) {
  const { id, url, name } = data;
  return (
    <div key={id} className="workCard" style={{ paddingBottom: "4em" }}>
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
    </div>
  );
}

export default WorkCard;
