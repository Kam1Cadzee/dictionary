import React from 'react';
import { Tabs, Row, Col } from 'antd';
import LoginForm from '../components/AuthPage/LoginForm';
import SignUpForm from '../components/AuthPage/SignUpForm';
import css from './Style.module.css';
import withAuthRedirect from '../useHooks/withAuthRedirect';

const { TabPane } = Tabs;

const AuthPage = () => {
  return (
    <Row justify="center" align="middle" className={css.authFull}>
      <Col span={6} className={css.blockAuth}>
        <Tabs defaultActiveKey="1" animated={{inkBar: true, tabPane: false}}>
          <TabPane tab="Login" key="1">
            <LoginForm/>
          </TabPane>
          <TabPane tab="Sign up" key="2" disabled >
            <SignUpForm/>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
};

export default withAuthRedirect(AuthPage);
