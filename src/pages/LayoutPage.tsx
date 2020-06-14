import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {RouteComponentProps, Route, Switch} from 'react-router-dom';
import {
  UserOutlined,
  PieChartOutlined,
  LogoutOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import css from './Style.module.css';
import withProtected from '../useHooks/withProtected';
import {useApolloClient, useQuery} from '@apollo/react-hooks';
import {useHistory} from 'react-router';
import {useCurrentUser} from '../useHooks/useCurrentUser';
import UsersPage from './UsersPage';
import WordsPage from './WordsPage';
import NotFoundPage from './NotFoundPage';
import CreatePage from './CreatePage';

const { Content, Sider } = Layout;

const LayoutPage = (props: RouteComponentProps<any>) => {
  let itemKey: string = props.match.params['item'] || 'words';
  const client = useApolloClient();
  const history = useHistory();
  const {isAdmin, user} = useCurrentUser();
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const handleExit = async () => {
    await client.cache.reset();
    localStorage.removeItem('token');
    history.replace('/')
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className={css.profile}>
          {user && user.name}
        </div>
        <Menu theme="dark" defaultSelectedKeys={[itemKey]} mode="inline">
          <Menu.Item key="create" icon={<PlusCircleOutlined />} onClick={() => props.history.push('/main/create')}>
            Create
          </Menu.Item>
          <Menu.Item key="words" icon={<PieChartOutlined />} onClick={() => props.history.push('/main/words')}>
            Words
          </Menu.Item>
          {
            isAdmin && (
              <Menu.Item key="users" icon={<UserOutlined />} onClick={() => props.history.push('/main/users')}>
                Users
              </Menu.Item>
            )
          }
          <Menu.Item key="exit" icon={<LogoutOutlined />} onClick={handleExit}>
            Exit
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content>
          <Switch>
            <Route path="/main/users" component={UsersPage} />
            <Route path="/main/words" component={WordsPage} />
            <Route path="/main/create" component={CreatePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default withProtected(LayoutPage);
