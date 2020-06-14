import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import QUERIES from '../../graphql/queries';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginForm = () => {
  const [login, { data, error }] = useMutation(QUERIES.LOGIN, {
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
    await login({
      variables: {
        loginData: values,
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

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
