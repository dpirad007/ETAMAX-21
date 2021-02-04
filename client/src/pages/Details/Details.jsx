import React, { Fragment } from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;
const Details = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Fragment>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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
