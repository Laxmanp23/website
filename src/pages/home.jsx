import React from "react";
import Hero from "../components/hero";
import Header from "../components/Headerx";
import FeaturesSection from "../components/featuresSection";
import HowItWorksSection from "../components/HowItWorksSection";
const home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection/>
<HowItWorksSection/>

    </>
  )
};

export default home;
