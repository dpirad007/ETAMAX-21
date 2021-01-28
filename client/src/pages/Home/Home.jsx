import React, { Fragment } from "react";
import { Row, Col } from "antd";

//components
import HomeCard from "../../components/Home/HomeCard";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Home;
