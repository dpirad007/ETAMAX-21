import React, { Fragment } from "react";
import Dropdown from "react-dropdown";

//components
import EventCard from "../../components/Events/EventCard/EventCard";

import "./Events.css";

const menu = [
  { value: 1, label: "First Day" },
  { value: 2, label: "Second Day" },
  { value: 3, label: "Third Day" },
];

const Events = () => {
  return (
    <Fragment>
      <div className="ho-dropdown">
        <Dropdown className="ho-dropdown-item" options={menu} placeholder="Select Day" />
      </div>
      <div className="e-main">
        <div className="e-main-item">
          <EventCard />
        </div>
        <div className="e-main-item">
          <EventCard />
        </div>
        <div className="e-main-item">
          <EventCard />
        </div>

        <div className="e-main-item">
          <EventCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Events;
