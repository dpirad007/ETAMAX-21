import React, { Fragment } from "react";
import { Progress, Steps } from "antd";

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
          <Steps current={2} responsive={true}>
            <Step title="Select Events" description="oowaeii" />
            <Step title="Meet Criterion" description="oowaeiaa" />
            <Step title="Paid" description="oowaeioo" />
          </Steps>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
