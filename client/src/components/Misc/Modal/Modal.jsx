import React from "react";
import { Modal, notification, Input, Form, Button } from "antd";
// eslint-disable-next-line
import axios from "axios";

import "./Modal.css";

// eslint-disable-next-line
const openNotification = (message) => {
  notification.success({
    message: message,
    duration: 3,
  });
};

const openErrorNotification = (message) => {
  notification.warning({
    message: message,
    duration: 3,
  });
};

const ModalView = ({
  changeModal,
  modalVisible,
  teamSize,
  eventCode,
  isTeamSizeStrict,
}) => {
  const onFinish = (values) => {
    changeModal(false);
    openErrorNotification("Registration Ended");
    // const token = window.localStorage.getItem("usertoken");
    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };

    // const body = { ...values, eventCode: eventCode };

    // axios
    //   .post(
    //     process.env.REACT_APP_WEB_URL + "/api/events/register-event",
    //     body,
    //     config
    //   )
    //   .then(function (response) {
    //     changeModal(false);
    //     openNotification("Registered for Event!");
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //       error.response.data.message
    //         ? openErrorNotification(error.response.data.message)
    //         : openErrorNotification("Error");
    //     }
    //   });
  };
  const items = [];
  if (isTeamSizeStrict) {
    for (let i = 1; i < teamSize; i++) {
      items.push(
        <Form.Item
          name={`member${i}`}
          rules={[
            {
              required: true,
              min: 6,
            },
          ]}
        >
          <Input className="m-input" placeholder={`Team Member ${i} Rollno`} />
        </Form.Item>
      );
    }
  } else {
    for (let i = 1; i < teamSize; i++) {
      items.push(
        <Form.Item
          name={`member${i}`}
          rules={[
            {
              min: 6,
            },
          ]}
        >
          <Input className="m-input" placeholder={`Team Member ${i} Rollno`} />
        </Form.Item>
      );
    }
  }

  return (
    <div>
      <Modal
        title="Team Details"
        centered
        visible={modalVisible}
        onCancel={() => changeModal(false)}
        footer={[
          <Button form="register" key="submit" htmlType="submit">
            Submit
          </Button>,
        ]}
      >
        <div style={{ padding: "0.5rem" }}>
          <span
            style={{
              borderRadius: "0.25rem",
              background: "rgb(255, 0, 0, 0.4)",
              padding: "0.25rem",
            }}
          >
            Note
          </span>{" "}
          Leader (you) will pay for all Members
        </div>
        <Form
          name="register"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="teamName"
            rules={[
              {
                required: true,
                max: 100,
              },
            ]}
          >
            <Input className="m-input" placeholder="Enter Team Name" />
          </Form.Item>

          {items}
        </Form>
      </Modal>
    </div>
  );
};

export default ModalView;
