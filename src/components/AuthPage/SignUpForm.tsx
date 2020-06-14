import React from 'react';
import { Button, Form, Input } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import QUERIES from '../../graphql/queries';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUpForm = () => {
  const [signup, { data }] = useMutation(QUERIES.SIGNUP, {
    update: (proxy, mutationResult) => {
      proxy.writeData({
        data: {
          isAuth: true,
          currentUser: mutationResult.data.login.user
        }
      });
      localStorage.setItem('token', mutationResult.data.login.token);
    }
  });
  const onFinish = async (values: any) => {
    const res = await signup({
      variables: {
        data: values,
      },
    });
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Repeat password"
        name="repeatPassword"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
