import React, { Fragment, useState } from "react";
import { Popconfirm } from "antd";

import ModalView from "../../Misc/Modal/Modal";
import DetailsModal from "../../Misc/DetailsModal/DetailsModal";

import "./EventCard.css";

const EventCard = ({
  data: { title, description, image, teamSize, category },
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

        <div className="ec-desc">{truncate(description, 50)}</div>
      </div>
      {teamSize === 1 ? (
        <Fragment>
          <Popconfirm
            title="Are you sure you want to Add this Event?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              console.log("poppy");
            }}
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
