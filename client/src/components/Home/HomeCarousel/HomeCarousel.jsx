import { Carousel } from "antd";
import { Fragment } from "react";
import logo1 from "../../../assets/16088.jpg";
import logo2 from "../../../assets/1506250.jpg";
import logo3 from "../../../assets/3499265.jpg";
import "./HomeCarousel.css";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

const HomeCarousel = () => {
  return (
    <Fragment>
      <Carousel autoplay effect="fade">
        <div>
          <div
            className="backImg"
            style={{
              ...contentStyle,
              backgroundImage: `url(${logo1})`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="backImg"
            style={{
              ...contentStyle,
              backgroundImage: `url(${logo2})`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="backImg"
            style={{
              ...contentStyle,
              backgroundImage: `url(${logo3})`,
            }}
          ></div>
        </div>
      </Carousel>
    </Fragment>
  );
};
export default HomeCarousel;
