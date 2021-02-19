import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import { Spin, Space, Radio } from "antd";

//components
import EventCard from "../../components/Events/EventCard/EventCard";

import "./Events.css";

const menu = [
  { value: 1, label: "First Day" },
  { value: 2, label: "Second Day" },
  { value: 3, label: "Third Day" },
];

const options = [
  { label: "Technical", value: "T" },
  { label: "Cultural", value: "C" },
  { label: "Fun", value: "F" },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedCat, setSelectedCat] = useState("T");

  useEffect(() => {
    const token = window.localStorage.getItem("usertoken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(
        process.env.REACT_APP_WEB_URL +
          `/api/events?day=${selectedDay}&category=${selectedCat}`,
        config
      )
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDay, selectedCat]);

  let finalEvents = [];
  if (events.length === 0) {
    finalEvents = (
      <div className="e-noevent">
        <h1>No Events</h1>
      </div>
    );
  } else if (events.length > 0) {
    finalEvents = events.map((obj, i) => (
      <div className="e-main-item">
        <EventCard key={i} data={obj} displayAdd={true} />
      </div>
    ));
  } else {
    finalEvents = (
      <Space size="middle" className="e-loader">
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <Fragment>
      <div className="e-top-main">
        <div className="e-dropdown">
          <Dropdown
            className="e-dropdown-item"
            value={menu[0].label}
            options={menu}
            onChange={(_onSelect) => setSelectedDay(_onSelect.value)}
            placeholder="Select Day"
          />
        </div>
        <div className="e-radio">
          <Radio.Group
            size="medium"
            options={options}
            onChange={(e) => setSelectedCat(e.target.value)}
            value={selectedCat}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
      </div>

      <div className="e-main">{finalEvents}</div>
    </Fragment>
  );
};

export default Events;
