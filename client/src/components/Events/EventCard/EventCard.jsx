import React, { useState } from "react";


import DetailsModal from "../../Misc/DetailsModal/DetailsModal";

import "./EventCard.css";
import AddEvent from "./AddEvent";



const EventCard = ({
  data: { title, description, image, teamSize, category, eventCode },
  data,
  displayAdd
}) => {
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };


  const [addModalVisible, setAddModalVisible] = useState(false);



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

        <div className="ec-desc">{truncate(description, 40)}</div>
      </div>


      <DetailsModal
        addModalVisible={addModalVisible}
        changeAddModal={changeAddModal}
        data={data}
      />
      {displayAdd?<AddEvent teamSize={teamSize} category={category} eventCode={eventCode} />:<br/>}


    </div>
  );
};
export default EventCard;
