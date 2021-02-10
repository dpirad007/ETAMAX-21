import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout, Spin, Space } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import axios from "axios";
import "./App.css";

//Pages
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Details from "./pages/Details/Details";
// import Register from "./pages/Register/Register";

import Events from "./pages/Events/Events";

//components
import Navbar from "./components/Misc/Navbar/Navbar";
import PrivateRoute from "./components/Misc/PrivateRoute/PrivateRoute";

const { Header, Content } = Layout;

function App() {
  const [collapse, setCollapse] = useState(false);
  const [profileCheck, setProfileCheck] = useState({
    loading: true,
    auth: false,
    tok: false,
  });
  const toggle = () => {
    setCollapse(!collapse);
  };
  const [isLoggedIn, loginupdater] = useState(
    localStorage.getItem("usertoken") != null
  );

  const token = window.localStorage.getItem("usertoken");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    token
      ? axios
          .get(process.env.REACT_APP_WEB_URL+"/api/users/details", config)
          .then((res) => {
            setProfileCheck({ auth: res.data, loading: false, tok: true });
          })
          .catch((err) => {
            setProfileCheck({ auth: false, loading: false, tok: false });
            <Redirect to="/login" />;
          })
      : setProfileCheck({ auth: false, tok: false, loading: false });
  }, [token]);

  return profileCheck.loading === false ? (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Navbar
            collapse={collapse}
            isLoggedIn={isLoggedIn}
            loginupdater={loginupdater}
            setProfileCheck={setProfileCheck}
            profileCheck={profileCheck}
            setCollapse={setCollapse}
          />
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: 0, fontSize: "x-large", fontWeight: "700" }}
            >
              {React.createElement(
                collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => toggle(),
                }
              )}
              Etamax
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                minHeight: 280,
              }}
            >
              <Switch>
                <Route
                  exact
                  path="/login"
                  render={(props) => (
                    <Login
                      isLoggedIn={isLoggedIn}
                      loginupdater={loginupdater}
                      setProfileCheck={setProfileCheck}
                      profileCheck={profileCheck}
                      {...props}
                    />
                  )}
                />
                <Route
                  exact
                  path="/details"
                  render={(props) => (
                    <Details
                      setProfileCheck={setProfileCheck}
                      profileCheck={profileCheck}
                      {...props}
                    />
                  )}
                />
                <PrivateRoute
                  exact
                  path="/"
                  component={Home}
                  auth={profileCheck.auth}
                  tok={profileCheck.tok}
                />
                <PrivateRoute
                  exact
                  path="/profile"
                  component={Profile}
                  auth={profileCheck.auth}
                  tok={profileCheck.tok}
                />
                {/*<Route exact path="/register" component={Register} />*/}
                <PrivateRoute
                  exact
                  path="/events"
                  component={Events}
                  auth={profileCheck.auth}
                  tok={profileCheck.tok}
                />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  ) : (
    <Space
      size="middle"
      style={{
        height: "100vh",
        width: "100vw",
        display: "Grid",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </Space>
  );
}

export default App;
