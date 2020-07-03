import React from 'react';
import {IDeleteSmth, IPhrase} from '../../typings/IEntity';
import {Card, Col, Row} from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;
const gridStyle: any = {
  width: '33.333333%',
  textAlign: 'center'
};

interface IPhrasesContentProps {
  phrases: IPhrase[]
  disconnectPhrases: IDeleteSmth[];
}
const PhrasesContent = ({phrases, disconnectPhrases}: IPhrasesContentProps) => {
  const data = phrases
    .filter((p) => !disconnectPhrases.some((d) => d.id === p.id!));

  return (
    <Row justify="center">
      {
        data.map(p => {
          return (
            <>
              <Col span={11}>
                <Text strong>{p.phrase}</Text>
                  <br/>
                <Text type="secondary">{p.ru}</Text>
              </Col>
            </>
          )
        })
      }
    </Row>
  )
};

export default PhrasesContent;
