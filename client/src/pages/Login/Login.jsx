import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import logo from "../../assets/loginbackground.jpeg";

const Login = ({ loginupdater, setProfileCheck, profileCheck }) => {
  let history = useHistory();
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    axios
      .post(process.env.REACT_APP_WEB_URL + "/api/users/login", {
        rollNo: values.username,
        password: values.password,
      })
      .then(function (response) {
        localStorage.setItem("usertoken", response.data.token);
        // use => localStorage.getItem('usertoken') for accessing usertoken

        // code - when login is successful
        loginupdater(true);
        setProfileCheck({ ...profileCheck, tok: true });
        history.push("/details");
        var name = "Logged In";
        openSuccessNotification({ message: name });
      })
      .catch(function (error) {
        openErrorNotification({ message: "Username or Password is Incorrect" });
        // code - display error on screen when error occurs
      });
  };

  const openSuccessNotification = (error) => {
    const args = {
      message: error.message,

      duration: 3,
    };
    notification.success(args);
  };

  const openErrorNotification = (error) => {
    const args = {
      message: error.message,

      duration: 3,
    };
    notification.warning(args);
  };

  return (
    <Fragment>
      <div className="login-container" style={{ backgroundImage: `url(${logo})` }}>
        <div className="login-card">
          <div className="login-form">
            <Form
              name="normal_login"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              style={{ padding: "1rem" }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Rollnumber!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="FCRIT Rollnumber"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
            </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="p-condet-main">
            <div className="p-condet">For non FCRIT Students please contact:</div>
            <div className="p-condet">
              Dylan Pinto: <a href="tel:+917738087256">+91 7738087256</a>
            </div>
            <div className="p-condet">
              Rohan M: <a href="tel:+919867608101">+91 9867608101</a>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Login;
