import React, { Fragment, useEffect, useState } from "react";
import { Progress, Steps } from "antd";
import axios from 'axios'

import "./Profile.css";

const { Step } = Steps;

const Profile = () => {
  const [currentCompletion, setCurrent] = useState(0)
  useEffect(() => {
    axios.get('http://localhost:5000/api/users/profile-details', {
      headers: { Authorization: `bearer ${localStorage.getItem('usertoken')}` }
    }).then((response) => {
        let isCriteria = Object.values(response.data.criteria).every(val => val === true)
        if (response.data.hasFilledProfile) {
          setCurrent(1)
          if (isCriteria) {
            setCurrent(2)
            if (response.data.moneyOwed === 0) {
              setCurrent(3)
            }
          }
        }
      })
      .catch(e=>console.log(e));
  }, []);
  return (
    <Fragment>
      <div className="p-main">
        <div className="p-circBar">
          <Progress type="circle" percent={currentCompletion * 33.33} />
        </div>
        <div className="p-steps">
          <Steps current={currentCompletion} responsive={true}>
            <Step title="Update Profile" description="Fill the form to update your name and phone no." />
            <Step title="Meet Criterion" description="Register for events! Criteria is not yet satisfied" />
            <Step title="Paid" description="Pay whole amount you got on your profile" />
          </Steps>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
