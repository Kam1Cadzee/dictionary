import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Form, Input, Row} from 'antd';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {IEntity} from '../typings/IEntity';
import EntityEditCard from '../components/CreatePage/EntityEditCard';
import {MUTATION} from '../graphql/mutation';

const {Search} = Input;
const CreatePage = () => {
  const [entities, setEntities] = useState([] as IEntity[]);
  const [mutationGetEntities] = useMutation(MUTATION.GET_ENTITIES_BY_WORD);
  const handleFinish = async (search: any) => {
    const res = await mutationGetEntities({
      variables: {
        word: search
      }
    });
    if(res.data)
      setEntities(res.data.getEntitiesByWord);
  };

  return (
    <Row>
      <Col span={24}>
        <Card size={'small'}>
        <Search
          placeholder="Input text for create entity of word"
          enterButton="Search"
          size="large"
          onSearch={handleFinish}
        />
        </Card>
      </Col>
      {
        entities.map((e: any, index: any) => {
          return (
            <Col flex="1" key={e.id || index}>
              <EntityEditCard entity={e}/>
            </Col>
          )
        })
      }
    </Row>
  )
};

export default CreatePage;
