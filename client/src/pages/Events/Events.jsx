import React from "react";

//components
import HomeCard from "../../components/Home/HomeCard/HomeCard";

import "./Events.css";

const Events = () => {
  return (
    <div className="e-main">
      <div className="e-main-item">
        <HomeCard />
      </div>
      <div className="e-main-item">
        <HomeCard />
      </div>
      <div className="e-main-item">
        <HomeCard />
      </div>
      <div className="e-main-item">
        <HomeCard />
      </div>
    </div>
  );
};

export default Events;
