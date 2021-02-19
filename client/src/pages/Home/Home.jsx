import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import HomeCarousel from "../../components/Home/HomeCarousel/HomeCarousel";
import HomeTimeLine from "../../components/Home/HomeTimeLine/HomeTimeLine";
import "./Home.css";

const options = [
  { value: 1, label: "First Day" },
  { value: 2, label: "Second Day" },
  { value: 3, label: "Third Day" },
];

class DownloadLink extends React.Component {
  render() {
    return (
      <a style={this.props.style} href={this.props.src} download>{this.props.children}</a>
    )
  }
}

const Home = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <Fragment>
      <div className="ho-dropdown">
        <Dropdown
          className="ho-dropdown-item"
          options={options}
          value={options[0].label}
          onChange={(_onSelect) => setSelectedDay(_onSelect.value)}
          placeholder="Select Day"
        />
        <div className="ho-brochure">
          <div className="ho-brochure-btn"><DownloadLink style={{color: "white"}} src="/ETAMAX ESPERANZA 21.pdf">Brochure</DownloadLink></div>
          <Link to="/hackathon">
            <div className="ho-brochure-btn1">Hackathon</div>
          </Link>
        </div>
      </div>
      <div className="ho-main">
        <HomeCarousel />
        <HomeTimeLine selectedDay={selectedDay} />
      </div>
    </Fragment>
  );
};

export default Home;
