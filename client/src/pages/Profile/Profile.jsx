import React, { Fragment } from "react";
import { Progress, Steps, Switch } from "antd";

import "./Profile.css";

const { Step } = Steps;

const Profile = () => {
  return (
    <Fragment>
      <div className="p-main">
        <div className="p-circBar">
          <Progress type="circle" percent={80} />
        </div>
        <div className="p-steps">
          <Steps current={2}>
            <Step title="Select Events" description="oowaeii" />
            <Step title="Meet Criterion" description="oowaeiaa" />
            <Step title="Paid" description="oowaeioo" />
          </Steps>
        </div>
      </div>
      <div className="p-table">
        <div className="p-cri1">
          <Switch defaultChecked />
        </div>
        <div className="p-cri2">
          <Switch defaultChecked />
        </div>
        <div className="p-cri3">
          <Switch defaultChecked />
        </div>
        <div className="p-cri1-txt">Cultural</div>
        <div className="p-cri2-txt">Technical</div>
        <div className="p-cri3-txt">Donno</div>
      </div>
    </Fragment>
  );
};

export default Profile;
