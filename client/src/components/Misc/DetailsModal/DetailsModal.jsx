import React from "react";
import { Modal, Button } from "antd";

import "./DetailsModal.css";

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
