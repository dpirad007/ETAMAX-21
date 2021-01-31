import React, { Fragment } from "react";
import HomeCarousel from "../../components/Home/HomeCarousel/HomeCarousel";
import HomeTimeLine from "../../components/Home/HomeTimeLine/HomeTimeLine";
import "./Home.css";

const Home = () => {
  return <Fragment>
            <HomeCarousel ></HomeCarousel>
            <HomeTimeLine ></HomeTimeLine>
          </Fragment> ;
};

export default Home;
