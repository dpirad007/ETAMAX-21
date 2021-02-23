import React, { Fragment, useState } from "react";
import { Popconfirm } from "antd";
import { notification } from "antd";
// eslint-disable-next-line
import axios from "axios";

import ModalView from "../../Misc/Modal/Modal";

function AddEvent(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const changeModal = (bool) => {
    setModalVisible(bool);
  };
  const openNotification = (message) => {
    notification.warning({
      message: message,
      duration: 3,
    });
  };

  const addEvent = () => {
    openNotification("Registeration Ended");
    // const token = window.localStorage.getItem("usertoken");
    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };

    // const body = { eventCode: props.eventCode };

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
    //     console.log(error);
    //     if (error.response) {
    //       error.response.data.message
    //         ? openNotification(error.response.data.message)
    //         : openNotification("Error");
    //     }
    //   });
  };

  return (
    <div>
      {props.teamSize === 1 ? (
        <Fragment>
          <Popconfirm
            title="Are you sure you want to Register for this Event?"
            okText="Yes"
            cancelText="No"
            onConfirm={addEvent}
          >
            <div className="ec-add-btn">+</div>
          </Popconfirm>
        </Fragment>
      ) : (
        <Fragment>
          <div
            className="ec-add-btn"
            onClick={() => {
              changeModal(true);
            }}
          >
            +
          </div>
          <ModalView
            modalVisible={modalVisible}
            changeModal={changeModal}
            teamSize={props.teamSize}
            eventCode={props.eventCode}
          />
        </Fragment>
      )}
    </div>
  );
}

export default AddEvent;
