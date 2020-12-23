import React from "react";

function SectionWrapper({ children, title }) {
  return (
    <div className="section">
      <div className="conainer-mt">
        <h2 className="ta-c mb-5">{title}</h2>
        <div className="cards">{children}</div>
      </div>
    </div>
  );
}

export default SectionWrapper;
