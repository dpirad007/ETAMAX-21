import React, { useState } from "react";
import { Card } from "antd";

import { PlusOutlined } from "@ant-design/icons";

import ModalView from "../../Misc/Modal/Modal";

import "./HomeCard.css";

const HomeCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const changeModal = (bool) => {
    setModalVisible(bool);
  };
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
        actions={[
          <PlusOutlined
            key="plus"
            onClick={() => {
              changeModal(true);
            }}
          />,
        ]}
      >
        <ModalView modalVisible={modalVisible} changeModal={changeModal} />
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
