import React, { Fragment, useState } from "react";
import { Popconfirm, notification } from "antd";
import axios from "axios";

import ModalView from "../../Misc/Modal/Modal";
import DetailsModal from "../../Misc/DetailsModal/DetailsModal";

import "./EventCard.css";

const openNotification = (message) => {
  notification.open({
    message: message,
    duration: 2,
  });
};

const EventCard = ({
  data: { title, description, image, teamSize, category, eventCode },
  data,
}) => {
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

  const changeModal = (bool) => {
    setModalVisible(bool);
  };

  const changeAddModal = (bool) => {
    setAddModalVisible(bool);
  };

  const addEvent = () => {
    const token = window.localStorage.getItem("usertoken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const body = { eventCode: eventCode };
    console.log(body);

    axios
      .post("http://localhost:5000/api/events/register-event", body, config)
      .then(function (response) {
        console.log(response.data);
        changeModal(false);
        openNotification("Event Added!");
      })
      .catch(function (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response.data.message);
          error.response.data.message
            ? openNotification(error.response.data.message)
            : openNotification("Error");
        }
      });
  };

  return (
    <div className="ec-main">
      <div
        className="ec-main-add"
        onClick={() => {
          changeAddModal(true);
        }}
      >
        <img src={image} alt="Img" />
        <div className="ec-title">{title}</div>
        {teamSize === 1 ? (
          <div className="ec-cat-in">Individual</div>
        ) : (
          <div className="ec-cat">Team Size: {teamSize}</div>
        )}

        <div className="ec-desc">{truncate(description, 40)}</div>
      </div>
      {teamSize === 1 ? (
        <Fragment>
          <Popconfirm
            title="Are you sure you want to Add this Event?"
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
            teamSize={teamSize}
            eventCode={eventCode}
          />
        </Fragment>
      )}

      <DetailsModal
        addModalVisible={addModalVisible}
        changeAddModal={changeAddModal}
        data={data}
      />
    </div>
  );
};
export default EventCard;
