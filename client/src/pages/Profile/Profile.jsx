import React, { Fragment, useEffect, useState } from "react";
import { Progress, Steps,Spin,Space } from "antd";
import axios from 'axios'
import MyEvents from '../../components/Events/MyEvents'
import "./Profile.css";

const { Step } = Steps;

const Profile = () => {
  const [currentCompletion, setCurrent] = useState(0)
  const [err, setErr] = useState(0)
  const [totalAmt,settotalAmt ] = useState(0)
  useEffect(() => {
    axios.get('http://localhost:5000/api/users/profile-details', {
      headers: { Authorization: `bearer ${localStorage.getItem('usertoken')}` }
    }).then((response) => {
      settotalAmt(response.data.moneyOwed)
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
      .catch(e => setErr(1));
  }, []);
  const paidDescription=`Pay ${totalAmt} ₹ as total entry fee of participation in events`
  return (

    <Fragment>
      {err? (
        <Space size="middle" style={{ height: "50vh",marginLeft:"46%"}}>
          <Spin size="large" />
        </Space>
      ) : (
          <div>
            <div className="p-main">
              <div className="p-circBar">
                <Progress type="circle" percent={currentCompletion * 33.33} />
              </div>
              <div className="p-steps">
                <Steps current={currentCompletion} responsive={true} direction={"vertical"}>
                  <Step title="Update Profile" description="Fill the form to update your name and phone no." />
                  <Step title="Meet Criterion" description="Register for events! Criteria is not yet satisfied" />
                  <Step title="Paid" description={paidDescription} />
                </Steps>
              </div>
            </div>
          </div>
        )}

      <MyEvents />
    </Fragment>
  );
};

export default Profile;
