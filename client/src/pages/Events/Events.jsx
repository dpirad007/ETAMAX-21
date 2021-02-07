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
  { label: "Techical", value: "T" },
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
        `http://localhost:5000/api/events?day=${selectedDay}&category=${selectedCat}`,
        config
      )
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDay, selectedCat]);

  return (
    <Fragment>
      <div className="e-top-main">
        <div className="e-dropdown">
          <Dropdown
            className="e-dropdown-item"
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
