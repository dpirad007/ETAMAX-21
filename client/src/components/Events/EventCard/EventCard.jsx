import React from "react";

import "./EventCard.css";

const EventCard = () => {
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
      <div className="ec-add-btn">+</div>
    </div>
  );
};
export default EventCard;
