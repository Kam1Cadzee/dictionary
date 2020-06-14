import React, { useState } from 'react';
import { IEntity } from '../../typings/IEntity';
import { Col, Row } from 'antd';
import TableEditWords from './TableEditWords/TableEditWords';
import TableEditPhrase from './TableEditPhrase/TableEditPhrase';

interface IEntityEditCardProps {
  entity: IEntity;
}

const EntityEditCard = ({ entity }: IEntityEditCardProps) => {
  return (
    <Row justify="center">
      <Col span={24}>
        <TableEditWords
          words={entity.words}
          disconnectWords={entity.disconnectWords}
          entityId={entity.id}
          title={entity.title}
          isCreate={entity.isCreate}
        />
      </Col>
      <Col span={24}>
        <TableEditPhrase
          phrases={entity.phrases}
          disconnectPhrases={entity.disconnectPhrases}
          entityId={entity.id}
          title={entity.title}
          isCreate={entity.isCreate}
        />
      </Col>
    </Row>
  );
};

export default EntityEditCard;
