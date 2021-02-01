import React from "react";

import HomeCarousel from "../../components/Home/HomeCarousel/HomeCarousel";
import HomeTimeLine from "../../components/Home/HomeTimeLine/HomeTimeLine";
import "./Home.css";

const Home = () => {
  return (
    <div className="ho-main">
      <HomeCarousel />
      <HomeTimeLine />
    </div>
  );
};

export default Home;
