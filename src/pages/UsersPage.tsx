import React from 'react';
import {Col, Descriptions, Row, Table, Tag} from 'antd';
import {UserRole} from '../typings/IUser';
import {useQuery} from '@apollo/react-hooks';
import QUERIES from '../graphql/queries';
import {usePartOfSpeech} from '../useHooks/usePartOfSpeech';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
    render: (role: UserRole) => {
      let color = role === UserRole.ADMIN ? 'geekblue' : 'green';
      return (
        <Tag color={color} key={role}>
          {role.toUpperCase()}
        </Tag>
      );
    },
  },
];

const recurse = (obj: any, name: string) => {
  for (const key of Object.keys(obj)) {
    if(key === name) {
      return obj[key];
    }
    if(typeof obj[key] === 'object') {
      const res: any = recurse(obj[key], name);
      if(res) return res;
    }
  }
};

const UsersPage = () => {
  const d = usePartOfSpeech();
  const {data} = useQuery(QUERIES.USERS, {});
  const {data: dataTranslate} = useQuery(QUERIES.COUNT_TRANSLATE, {
    returnPartialData: true,
  });
  const {data: dataWords} = useQuery(QUERIES.COUNT_WORDS, {
    returnPartialData: true,
  });
  const {data: dataEntity} = useQuery(QUERIES.COUNT_ENTITY, {
    returnPartialData: true,
  });
  const users = data ? data.users : [];
  const countTranslate = recurse(dataTranslate, 'count');
  const countWords = recurse(dataWords, 'count');
  const countEntity = recurse(dataEntity, 'count');

  return (
    <Row>
      <Col span={24}>
        <Descriptions title="Vocabulary Info">
          {countEntity &&  <Descriptions.Item label="Entity">{countEntity}</Descriptions.Item>}
          {countWords &&  <Descriptions.Item label="Words">{countWords}</Descriptions.Item>}
          {countTranslate &&  <Descriptions.Item label="Translate">{countTranslate}</Descriptions.Item>}
        </Descriptions>
      </Col>
      <Col span={24}>
      <Table columns={columns} dataSource={users}/>
      </Col>
    </Row>
  )
};

export default UsersPage;
