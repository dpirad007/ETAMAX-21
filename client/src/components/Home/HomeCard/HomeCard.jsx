import React from "react";
import { Card, notification } from "antd";

import { PlusOutlined } from "@ant-design/icons";

import "./HomeCard.css";

const openNotification = () => {
  notification.open({
    message: "Added your lame event",
    description: "Waasup",
    duration: 2,
  });
};

const HomeCard = () => {
  return (
    <div>
      <Card
        style={{ maxWidth: 300, border: "#d6d6d6  1px solid" }}
        cover={
          <img
            style={{ border: "#d6d6d6  1px solid" }}
            alt="example"
            src="https://image.freepik.com/free-vector/banana-logo_10250-3606.jpg"
          />
        }
        actions={[<PlusOutlined key="plus" onClick={openNotification} />]}
      >
        <div>
          <div className="hc-title">Bananana</div>
          <div className="hc-desc">Team size: 10</div>
          <div className="hc-desc">sup</div>
        </div>
      </Card>
    </div>
  );
};

export default HomeCard;
