import React, {useState} from 'react';
import {Card, Col, Row} from 'antd';
import {useQuery} from '@apollo/react-hooks';
import QUERIES from '../graphql/queries';
import {useCurrentUser} from '../useHooks/useCurrentUser';
import {IEntity} from '../typings/IEntity';
import EntityCard from '../components/WordsPage/EntityCard';
import {usePartOfSpeech} from '../useHooks/usePartOfSpeech';


const WordsPage = () => {
  const d = usePartOfSpeech();
  const {user} = useCurrentUser();
  const {data} = useQuery(QUERIES.GET_ENTITIES, {
    variables: {
      id: user!.id
    },

  });
  const entities: IEntity[] = data ? data.entities : [];

  return (
    <Row>
      <Col span={24}>
        <Card title="Vocabulary" size={'small'}>
          {
            entities.map(e => {
              return (
                <EntityCard key={e.id} entity={e}/>
              )
            })
          }
        </Card>
      </Col>
    </Row>
  )
};

export default WordsPage;
