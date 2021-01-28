import React from "react";
import { Card, Avatar } from "antd";

import { PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

const HomeCard = () => {
  return (
    <div>
      <Card
        style={{ maxWidth: 400, border: "#d6d6d6  1px solid" }}
        cover={
          <img
            style={{ border: "#d6d6d6  1px solid" }}
            alt="example"
            src="https://image.freepik.com/free-vector/banana-logo_10250-3606.jpg"
          />
        }
        actions={[<PlusOutlined key="plus" />]}
      >
        <Meta
          avatar={
            <Avatar src="https://cdn3.iconfinder.com/data/icons/iconset-1-1/24/icon_set_outlinder-05-512.png" />
          }
          title="Yolo solo"
          description="banananananaanan"
        />
      </Card>
    </div>
  );
};

export default HomeCard;
