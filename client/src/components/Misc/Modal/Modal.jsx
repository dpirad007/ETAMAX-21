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

const ModalView = ({ changeModal, modalVisible }) => {
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
        <Input className="m-input" placeholder="Team Mate 1" />
        <Input className="m-input" placeholder="Team Mate 2" />
        <Input className="m-input" placeholder="Team Mate 3" />
      </Modal>
    </div>
  );
};

export default ModalView;
