import React from 'react';
import {IDeleteSmth, IPhrase, ISentence} from '../../typings/IEntity';
import {Card, Col, Row} from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

interface ISentencesContentProps {
  sentences: ISentence[]
  disconnectSentences: IDeleteSmth[];
}
const SentencesContent = ({sentences, disconnectSentences}: ISentencesContentProps) => {
  const data = sentences
    .filter((p) => !disconnectSentences.some((d) => d.id === p.id!));
  return (
    <Row>
      {
        data.map(s => {
          return (
            <>
              <Col span={24}>
                <Text strong>{s.sentence}</Text>
                <br/>
                <Text type="secondary">{s.ru}</Text>
              </Col>
            </>
          )
        })
      }
    </Row>
  )
};

export default SentencesContent;
