import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import ServiceArea from "../components/sections/ServiceArea";
import Services from "../components/sections/Services";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Services topDivider />
      <ServiceArea topDivider />

      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />

      <Cta split />
    </>
  );
};

export default Home;
