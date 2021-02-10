import React, { Fragment, useEffect, useState } from "react";
import { Progress, Steps, Spin, Space } from "antd";
import axios from "axios";
import MyEvents from "../../components/Profile/MyEvents";
import "./Profile.css";

const { Step } = Steps;

const Profile = () => {
  const [currentCompletion, setCurrent] = useState({
    per: 0,
    cur: 0,
  });
  const [err, setErr] = useState(0);
  const [totalAmt, settotalAmt] = useState(0);
  const [criteriaDescription, setDescription] = useState(
    "🔴 day1 🔴 day2 🔴 day3 🔴 Cultural 🔴 Technical 🔴 Fun"
  );

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_WEB_URL + "/api/users/profile-details", {
        headers: {
          Authorization: `bearer ${localStorage.getItem("usertoken")}`,
        },
      })
      .then((response) => {
        settotalAmt(response.data.moneyOwed);

        // setting up description of criteria
        let desc = "";
        for (var field in response.data.criteria) {
          desc += response.data.criteria[field] ? " 🟢 " : " 🔴 ";
          if (field === "1" || field === "2" || field === "3") {
            desc += "Day " + field + "‎‎ ";
          }
          if (field === "C") {
            desc += "Cultural ";
          }
          if (field === "T") {
            desc += "Technical ";
          }
          if (field === "F") {
            desc += "Fun ";
          }
        }
        setDescription(desc);

        // checking for criteria
        let isCriteria = Object.values(response.data.criteria).every(
          (val) => val === true
        );
        if (response.data.hasFilledProfile) {
          setCurrent({ per: 33, cur: 1 });
          if (isCriteria) {
            setCurrent({ per: 66, cur: 2 });
            if (response.data.moneyOwed === 0) {
              setCurrent({ per: 100, cur: 3 });
            }
          }
        }
      })
      .catch((e) => setErr(1));
  }, []);
  const paidDescription = `Payment for events!`;
  return (
    <Fragment>
      {err ? (
        <Space size="middle" style={{ height: "50vh", marginLeft: "46%" }}>
          <Spin size="large" />
        </Space>
      ) : (
        <div>
          <div className="p-main">
            <div className="p-circBar">
              <Progress type="circle" percent={currentCompletion.per} />
            </div>
            <div className="p-steps">
              <Steps
                current={currentCompletion.cur}
                responsive={true}
                direction={"vertical"}
              >
                <Step
                  title="Update Profile"
                  description="Fill the form to update your name and phone no!"
                />
                <Step
                  title="Meet Criterion"
                  description={criteriaDescription}
                />
                <Step title={`₹ ${totalAmt}`} description={paidDescription} />
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
