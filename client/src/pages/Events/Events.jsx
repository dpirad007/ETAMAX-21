import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import { Spin, Space } from "antd";

//components
import EventCard from "../../components/Events/EventCard/EventCard";

import "./Events.css";

const menu = [
  { value: 1, label: "First Day" },
  { value: 2, label: "Second Day" },
  { value: 3, label: "Third Day" },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(1);

  useEffect(() => {
    const token = window.localStorage.getItem("usertoken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(`http://localhost:5000/api/events?day=${selectedDay}`, config)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDay]);

  return (
    <Fragment>
      <div className="e-dropdown">
        <Dropdown
          className="e-dropdown-item"
          options={menu}
          onChange={(_onSelect) => setSelectedDay(_onSelect.value)}
          placeholder="Select Day"
        />
      </div>
      <div className="e-main">
        {events.length ? (
          events.map((obj, i) => {
            return (
              <div className="e-main-item">
                <EventCard key={i} data={obj} />
              </div>
            );
          })
        ) : (
          <Space size="middle" style={{ height: "50vh" }}>
            <Spin size="large" />
          </Space>
        )}
      </div>
    </Fragment>
  );
};

export default Events;
