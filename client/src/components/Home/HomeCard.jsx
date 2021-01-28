import React from "react";
import { Card, Avatar } from "antd";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const HomeCard = () => {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            style={{ border: "#d6d6d6 1px solid" }}
            alt="example"
            src="https://image.freepik.com/free-vector/banana-logo_10250-3606.jpg"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Yolo solo"
          description="banananananaanan"
        />
      </Card>
    </div>
  );
};

export default HomeCard;
