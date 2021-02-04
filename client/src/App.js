import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
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
  const [completedProfile, setCompletedProfile] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  const [isLoggedIn, loginupdater ]  = useState(localStorage.getItem("usertoken") != null);


  useEffect(() => {
    var token = window.localStorage.getItem("usertoken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("http://localhost:5000/api/users/details", config)
      .then((res) => {
        setCompletedProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Navbar collapse={collapse} isLoggedIn={isLoggedIn} loginupdater={loginupdater} />
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
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route exact path="/login" render={(props) => <Login isLoggedIn={isLoggedIn} loginupdater={loginupdater} {...props} />} />
                <PrivateRoute
                  exact
                  path="/"
                  component={Home}
                  completedProfile={completedProfile}
                />
                <PrivateRoute
                  exact
                  path="/profile"
                  component={Profile}
                  completedProfile={completedProfile}
                />
                {/*<Route exact path="/register" component={Register} />*/}
                <PrivateRoute
                  exact
                  path="/events"
                  component={Events}
                  completedProfile={completedProfile}
                />
                <Route exact path="/details" component={Details} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
