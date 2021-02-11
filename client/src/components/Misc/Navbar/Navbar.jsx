import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Drawer, Menu, Button } from "antd";

import "./Navbar.css";

const Navbar = ({
  collapse,
  setCollapse,
  isLoggedIn,
  loginupdater,
  setProfileCheck,
  profileCheck,
}) => {
  const logout = () => {
    localStorage.removeItem("usertoken");
    loginupdater(false);
    setProfileCheck({ ...profileCheck, tok: false });
  };

  return (
    <div>
      <Drawer
        theme="dark"
        placement="left"
        onClick={() => setCollapse(false)}
        onClose={() => setCollapse(false)}
        visible={collapse}
      >
        <div className="logo">η</div>
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <Link to="/events">Events</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          {!isLoggedIn && (
            <Menu.Item key="4" icon={<LoginOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}

          {isLoggedIn && (
            <Menu.Item isSelected="false" key="4" icon={<LogoutOutlined />}>
              <Button
                onClick={() => logout()}
                style={{
                  backgroundColor: "transparent",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                  textAlign: "left",
                  paddingLeft: "0px",
                }}
              >
                Logout
              </Button>
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
