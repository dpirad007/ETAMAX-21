import React, { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

//components
import HomeCard from "../../components/Home/HomeCard";

import "./Home.css";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapse}
        collapsedWidth="60"
        width="150"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Events
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => toggle(),
            }
          )}
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
