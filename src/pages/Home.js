import React from "react";

import Header from "../components/Header";
import CallUsToday from "../components/Home/CallUsToday";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import WhatWeDo from "../components/Home/WhatWeDo";
import OurServices from "../components/Home/OurServices";
import QualityProducts from "../components/Home/QualityProducts";
import OurProjects from "../components/Home/OurProjects";
import WeWorkWith from "../components/Home/WeWorkWith";
import News from "../components/Home/News";
import Map from "../components/Home/Map";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <CallUsToday />
      <WhyChooseUs />
      <WhatWeDo />
      <OurServices />
      <QualityProducts />
      <OurProjects />
      <WeWorkWith />
      <News />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
