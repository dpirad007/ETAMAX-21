import React, { useState } from "react";

import DetailsModal from "../../Misc/DetailsModal/DetailsModal";

import "./EventCard.css";
import AddEvent from "./AddEvent";

const truncate = (str, n) => str.length > n ? str.substr(0, n - 1) + "..." : str;


const ProfileCard = ({
  data: { title, description, entryFee,teamMembers },
  addModalVisible,
  changeAddModal,
  data,
}) => {
  const displayTeam=teamMembers.map((member)=><p>🚩 {member}</p>)
  return (
    <div className="ec-main">
      <div className="ep-main-add">
        <div className="ec-title">{truncate(title, 20)}</div>

        <div className="ep-cat">Fee: {entryFee}</div>

        <div className="ec-desc">{truncate(description, 40)}</div>

        {teamMembers.length!==0?<div className="ec-team"><p>Team Members</p>{displayTeam}</div>:""}
      </div>
    </div>
  );
};

const EventCard = ({
  data: { title, description, image, teamSize, category, eventCode },
  data,
  displayAdd,
}) => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const changeAddModal = (bool) => {
    setAddModalVisible(bool);
  };

  const finalCards = !displayAdd ? (
    <ProfileCard
      data={data}
      addModalVisible={addModalVisible}
      changeAddModal={changeAddModal}
    />
  ) : (
    <div className="ec-main">
      <div
        className="ec-main-add"
        onClick={() => {
          changeAddModal(true);
        }}
      >
        <img src={image} alt="Img" />
        <div className="ec-title">{truncate(title, 15)}</div>
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

      <AddEvent teamSize={teamSize} category={category} eventCode={eventCode} />
    </div>
  );

  return finalCards;
};
export default EventCard;
