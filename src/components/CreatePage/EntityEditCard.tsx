import React, { useState } from 'react';
import { IEntity } from '../../typings/IEntity';
import {Col, Collapse, Row} from 'antd';
import TableEditWords from './TableEditWords/TableEditWords';
import TableEditPhrase from './TableEditPhrase/TableEditPhrase';
import { CaretRightOutlined } from '@ant-design/icons';

const {Panel} = Collapse;

interface IEntityEditCardProps {
  entity: IEntity;
}

const EntityEditCard = ({ entity }: IEntityEditCardProps) => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? -90 : 0} />}
      className="site-collapse-custom-collapse"
      expandIconPosition={'right'}
    >
      <Panel header="Words" key="1" className="site-collapse-custom-panel">
        <TableEditWords
          words={entity.words}
          disconnectWords={entity.disconnectWords}
          entityId={entity.id}
          title={entity.title}
          isCreate={entity.isCreate}
        />
      </Panel>
      <Panel header="Phrases" key="2" className="site-collapse-custom-panel">
        <TableEditPhrase
          phrases={entity.phrases}
          disconnectPhrases={entity.disconnectPhrases}
          entityId={entity.id}
          title={entity.title}
          isCreate={entity.isCreate}
        />
      </Panel>
    </Collapse>
  );
};

export default EntityEditCard;
