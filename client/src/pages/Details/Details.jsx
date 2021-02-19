import React, { Fragment } from "react";
import axios from "axios";
import { Form, Input, Button, Select, notification } from "antd";
import { useHistory } from "react-router-dom";
const { Option } = Select;

const openErrorNotification = (error) => {
  const args = {
    message: error,

    duration: 3,
  };
  notification.warning(args);
};

const Details = ({ setProfileCheck, profileCheck }) => {
  let history = useHistory();
  if (profileCheck.auth) {
    history.push("/");
  }
  const openNotification = (message) => {
    notification.open({
      message: message,
      duration: 2,
    });
  };
  const onFinish = (values) => {
    const token = window.localStorage.getItem("usertoken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        process.env.REACT_APP_WEB_URL + "/api/users/update-profile",
        {
          name: values.userName,
          collegeName: values.college,
          phoneNumber: values.phoneNo,
          semester: values.sem,
        },
        config
      )
      .then(function (response) {
        setProfileCheck({ ...profileCheck, auth: true });
        openNotification("Profile updated successfully!")
        history.push("/");
      })
      .catch(function (error) {
        if (error.response) {
          error.response.data
            ? openErrorNotification(error.response.data)
            : openNotification("Error");
        }
      });
  };

  return (
    <Fragment>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ padding: "1rem" }}
      >
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              max: 100,
            },
          ]}
        >
          <Input placeholder="FirstName LastName" />
        </Form.Item>
        <Form.Item
          name="phoneNo"
          rules={[
            {
              required: true,
              max: 10,
              min: 10,
            },
          ]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item
          name="college"
          rules={[
            {
              required: true,
              max: 100,
            },
          ]}
        >
          <Input placeholder="CollegeName" />
        </Form.Item>

        <Form.Item name="sem">
          <Select placeholder="Select your Semester" allowClear>
            <Option value={1}>Sem1</Option>
            <Option value={2}>Sem2</Option>
            <Option value={3}>Sem3</Option>
            <Option value={4}>Sem4</Option>
            <Option value={5}>Sem5</Option>
            <Option value={6}>Sem6</Option>
            <Option value={7}>Sem7</Option>
            <Option value={8}>Sem8</Option>
          </Select>
        </Form.Item>
        {/*<Form.Item
          name="department"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select your Department" allowClear>
            <Option value="IT">IT</Option>
            <Option value="Computer">Computer</Option>
            <Option value="Mechanical">Mechanical</Option>
            <Option value="Electrical">Electrical</Option>
            <Option value="EXTC">EXTC</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>*/}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Details;
