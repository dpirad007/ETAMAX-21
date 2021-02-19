import React from "react";
import { Modal, Button } from "antd";

import "./PayModal.css";

const PayModal = ({ addModalVisible, changeAddModal }) => {
  return (
    <div>
      <Modal
        title="Payment Details"
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
        <h4>IFSC: IOBA0000596</h4>
        <h4>Account No: 059601000007942</h4>
        <h4>Beneficiary: FCRIT, Vashi</h4>
      </Modal>
    </div>
  );
};

export default PayModal;
