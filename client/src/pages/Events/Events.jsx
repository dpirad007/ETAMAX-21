import React, { Fragment } from "react";
import { Menu, Dropdown, Button } from "antd";

//components
import HomeCard from "../../components/Home/HomeCard/HomeCard";

import "./Events.css";

const menu = (
  <Menu>
    <Menu.Item>Day1</Menu.Item>
    <Menu.Item>Day2</Menu.Item>
    <Menu.Item>Day3</Menu.Item>
  </Menu>
);

const Events = () => {
  return (
    <Fragment>
      <div className="e-dropdown">
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>Categories</Button>
        </Dropdown>
      </div>
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
    </Fragment>
  );
};

export default Events;
