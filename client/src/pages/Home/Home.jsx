import React, { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";

//components
import HomeCard from "../../components/Home/HomeCard";
import Navbar from "../../components/Misc/Navbar/Navbar";

import "./Home.css";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar collapse={collapse} setCollapse={setCollapse} />
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, fontSize: "large" }}
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
          <Row gutter={[16, 16]} type="flex" align="middle">
            <Col
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeCard />
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeCard />
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeCard />
            </Col>
          </Row>
          <Row gutter={[16, 16]} type="flex" align="middle">
            <Col
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeCard />
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeCard />
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeCard />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
