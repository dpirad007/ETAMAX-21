import React, { useState } from "react";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import DetailsModal from "../../Misc/DetailsModal/DetailsModal";

import "./EventCard.css";
import AddEvent from "./AddEvent";
const { SubMenu } = Menu;

const truncate = (str, n) =>
  str.length > n ? str.substr(0, n - 1) + "..." : str;

const ProfileCard = ({ data: { title, entryFee, teamMembers } }) => {
  let finalTeam = null;
  if (teamMembers.length) {
    finalTeam = teamMembers.map((member, i) => (
      <Menu.Item key={i}>{member}</Menu.Item>
    ));
  }
  return (
    <div className="ep-main">
      <div className="ep-main-add">
        <div className="ec-title">{truncate(title, 20)}</div>
        <div className="ep-cat">Fee: {entryFee}</div>
        {finalTeam ? (
          <Menu mode="inline">
            <SubMenu key="sub2" title="Team Members">
              {finalTeam}
            </SubMenu>
          </Menu>
        ) : null}
      </div>
    </div>
  );
};

const EventCard = ({
  data: {
    title,
    image,
    teamSize,
    category,
    eventCode,
    start,
    end,
    seats,
    maxSeats,
    entryFee,
  },
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
        <div className="ec-chips-main">
          {teamSize === 1 ? (
            <div className="ec-cat-in">Individual</div>
          ) : (
            <div className="ec-cat">Team Size: {teamSize}</div>
          )}

          <div className="ec-cat-se">
            <UserOutlined style={{ color: "#4b4b4b" }} /> {seats}/{maxSeats}
          </div>
          <div className="ec-cat-ti">
            <ClockCircleOutlined style={{ color: "#4b4b4b" }} />{" "}
            {start.slice(2)} - {end.slice(2)}
          </div>
          <div className="ec-cat-fe">₹ {entryFee}</div>
        </div>
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
