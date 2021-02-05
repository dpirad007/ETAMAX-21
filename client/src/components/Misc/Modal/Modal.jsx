import React from "react";
import { Modal, notification, Input } from "antd";

import "./Modal.css";

const openNotification = () => {
  notification.open({
    message: "Added your lame event",
    description: "Waasup",
    duration: 2,
  });
};

const ModalView = ({ changeModal, modalVisible, teamSize }) => {
  const items = [];
  for (let i = 0; i < teamSize; i++) {
    items.push(<Input className="m-input" placeholder="Team Mate" />);
  }

  return (
    <div>
      <Modal
        title="Additional Details"
        centered
        visible={modalVisible}
        onOk={() => {
          changeModal(false);
          openNotification();
        }}
        onCancel={() => changeModal(false)}
      >
        {items}
      </Modal>
    </div>
  );
};

export default ModalView;
