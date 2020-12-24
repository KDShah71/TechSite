import React from "react";
import Hero from "../components/Hero";
import SectionWrapper from "../components/SectionWrapper";

import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import { services, works } from "../data/data";

function Home() {
  return (
    <div className="">
      <Hero />

      <SectionWrapper title="Our Services">
        <div className="cards">
          {" "}
          {services.map((service) => {
            console.log(service);
            return <ServiceCard data={service} />;
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Our Works">
        <div className="workCard">
          {works.map((work) => {
            return <WorkCard data={work} />;
          })}
        </div>
      </SectionWrapper>

      {/* <SectionWrapper title="What they say about us">
        {works.map((work) => {
          return <WorkCard data={work} />;
        })}
      </SectionWrapper> */}
    </div>
  );
}

export default Home;
