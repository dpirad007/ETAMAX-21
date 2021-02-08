import React, { Fragment } from "react";
import axios from "axios";
import { Form, Input, Button, Select } from "antd";
import { useHistory } from "react-router-dom";

const { Option } = Select;

const Details = ({ setProfileCheck, profileCheck }) => {
  let history = useHistory();
  if (profileCheck.auth) {
    console.log("details: ", profileCheck.auth);
    history.push("/");
  }

  const onFinish = (values) => {
    console.log(values);
    const token = window.localStorage.getItem("usertoken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "http://localhost:5000/api/users/update-profile",
        {
          name: values.userName,
          collegeName: values.college,
          department: values.department,
          phoneNumber: values.phoneNo,
          semester: values.sem,
        },
        config
      )
      .then(function (response) {
        setProfileCheck({ ...profileCheck, auth: true });
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
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
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="phoneNo"
          rules={[
            {
              required: true,
              max: 10,
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
        <Form.Item
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
        </Form.Item>

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
