import React from 'react';
import {IPhrase} from '../../typings/IEntity';
import {Card, Col, Row} from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;
const gridStyle: any = {
  width: '33.333333%',
  textAlign: 'center'
};

interface IPhrasesContentProps {
  phrases: IPhrase[]
}
const PhrasesContent = ({phrases}: IPhrasesContentProps) => {

  return (
    <Row>
      {
        phrases.map(p => {
          return (
            <>
              <Col span={12}>
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
