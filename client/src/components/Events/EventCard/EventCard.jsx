import React, { useState } from "react";

import ModalView from "../../Misc/Modal/Modal";

import "./EventCard.css";

const EventCard = ({
  data: { title, description, image, teamSize, category },
}) => {
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const [modalVisible, setModalVisible] = useState(false);

  const changeModal = (bool) => {
    setModalVisible(bool);
  };
  return (
    <div className="ec-main">
      <img src={image} alt="Img" />
      <div className="ec-title">{title}</div>
      {teamSize === 1 ? (
        <div className="ec-cat-in">Individual</div>
      ) : (
        <div className="ec-cat">Team Size: {teamSize}</div>
      )}

      <div className="ec-desc">{truncate(description, 50)}</div>
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
