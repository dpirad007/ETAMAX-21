import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import "./Navbar.css";

const { Sider } = Layout;

const Navbar = ({ collapse, setCollapse }) => {
  return (
    <div>
      <Sider
        style={{ height: "100%" }}
        trigger={null}
        collapsible
        collapsed={collapse}
        collapsedWidth="60"
        width="150"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <Link to="/events">Events</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Navbar;
