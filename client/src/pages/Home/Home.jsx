import React, { Fragment, useState, useEffect } from "react";

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

const Home = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  useEffect(() => {
    console.log(selectedDay);
  }, [selectedDay]);

  return (
    <Fragment>
      <div className="ho-dropdown">
        <Dropdown
          className="ho-dropdown-item"
          options={options}
          onChange={(_onSelect) => setSelectedDay(_onSelect.value)}
          placeholder="Select Day"
        />
      </div>
      <div className="ho-main">
        <HomeCarousel />
        <HomeTimeLine selectedDay={selectedDay} />
      </div>
    </Fragment>
  );
};

export default Home;
