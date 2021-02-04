import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout, Button } from "antd";
import { SmileOutlined } from '@ant-design/icons';
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";

//Pages
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Events from "./pages/Events/Events";

//components
import Navbar from "./components/Misc/Navbar/Navbar";
import PrivateRoute from "./components/Misc/PrivateRoute/PrivateRoute";

const { Header, Content } = Layout;

function App() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  const isLoggedIn = localStorage.getItem('usertoken') != null;
  
  const logout = () => {
    console.log('Logout Request!');
    localStorage.removeItem('usertoken');

  };

  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Navbar collapse={collapse} />
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
              {isLoggedIn &&
                <Button onClick={()=> logout()} style={{ background: "rgba(0, 0, 0, 0.85)", color: "white", float:"right", marginRight:"2%", marginTop:"1%" }} icon={<SmileOutlined rotate={180} />}>Logout</Button>
              }
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
                <Route exact path="/login" component={Login} />
                {/*<Route exact path="/register" component={Register} />*/}
                <PrivateRoute exact path="/events" component={Events} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
