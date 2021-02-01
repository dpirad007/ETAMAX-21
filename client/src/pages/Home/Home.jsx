import React, { Fragment } from "react";

import { Menu, Dropdown, Button } from "antd";

import HomeCarousel from "../../components/Home/HomeCarousel/HomeCarousel";
import HomeTimeLine from "../../components/Home/HomeTimeLine/HomeTimeLine";
import "./Home.css";

const menu = (
  <Menu>
    <Menu.Item>Day 1</Menu.Item>
    <Menu.Item>Day 1</Menu.Item>
    <Menu.Item>Day 1</Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const Home = () => {
  return (
    <Fragment>
      <div className="ho-dropdown">
        <Dropdown overlay={menu}>
          <Button>Day</Button>
        </Dropdown>
      </div>
      <div className="ho-main">
        <HomeCarousel />
        <HomeTimeLine />
      </div>
    </Fragment>
  );
};

export default Home;
