import { Carousel } from "antd";
import { Fragment } from "react";
import logo1 from "../../../assets/PicsArt_02-17-02.39.53.jpg";
import logo2 from "../../../assets/Hackathon.png";
import logo3 from "../../../assets/16088.jpg";
import "./HomeCarousel.css";

const contentStyle = {
  height: "100%",
  width: "100%",
  background: "#364d79",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

const HomeCarousel = () => {
  return (
    <Fragment>
      <Carousel autoplay effect="fade" dotPosition="top">
        <div>
          <img style={contentStyle} src={logo1} alt="logo" />
        </div>
        <div>
          <img style={contentStyle} src={logo2} alt="logo" />
        </div>
        <div>
          <img style={contentStyle} src={logo3} alt="logo" />
        </div>
      </Carousel>
    </Fragment>
  );
};
export default HomeCarousel;
