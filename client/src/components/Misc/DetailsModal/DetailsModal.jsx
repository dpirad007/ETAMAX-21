import React from "react";
import { Modal, Button } from "antd";

import "./DetailsModal.css";

function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

const catTocat = {
  T: "Techincal",
  C: "Cultural",
  F: "Fun",
};

const DetailsModal = ({
  changeAddModal,
  addModalVisible,
  data: {
    title,
    description,
    category,
    prizeMoney,
    maxSeats,
    entryFee,
    seats,
    start,
    day,
    end,
  },
}) => {
  return (
    <div>
      <Modal
        title="Event Details"
        centered
        visible={addModalVisible}
        onCancel={() => changeAddModal(false)}
        footer={[
          <Button
            key="Close"
            type="primary"
            onClick={() => changeAddModal(false)}
          >
            Close
          </Button>,
        ]}
      >
        <div className="dm-main">
          <div className="dm-title">
            Day {day} - {title}
          </div>
          <div className="dm-cat">{catTocat[category]}</div>
          <div className="dm-cat">
            Time: {start.slice(2)} - {end.slice(2)}
          </div>
          <div className="dm-desc">{description}</div>
          <div className="dm-prize">Prize: {prizeMoney[0]}</div>
          <div className="dm-seats">Seats: {seats + "/" + maxSeats}</div>
          <div className="dm-entryfee">Fee: {entryFee}</div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsModal;
