import React, { useState } from "react";

import ModalView from "../../Misc/Modal/Modal";

import "./EventCard.css";

const EventCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const changeModal = (bool) => {
    setModalVisible(bool);
  };
  return (
    <div className="ec-main">
      <img
        src="https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg"
        alt="Img"
      />
      <div className="ec-title">Solo Dance</div>
      <div className="ec-cat">Team Size: 10</div>
      <div className="ec-desc">
        This is singing dummies just sing along, and sing and sing!!
      </div>
      <div
        className="ec-add-btn"
        onClick={() => {
          changeModal(true);
        }}
      >
        +
      </div>
      <ModalView modalVisible={modalVisible} changeModal={changeModal} />
    </div>
  );
};
export default EventCard;
