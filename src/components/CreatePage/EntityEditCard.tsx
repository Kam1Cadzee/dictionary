import React from 'react';
import { IEntity } from '../../typings/IEntity';
import {Collapse} from 'antd';
import TableEditWords from './TableEditWords/TableEditWords';
import TableEditPhrase from './TableEditPhrase/TableEditPhrase';
import { CaretRightOutlined } from '@ant-design/icons';
import TableEditSentence from './TableEditSentence/TableEditSentence';

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
      <Panel header="Sentences" key="3" className="site-collapse-custom-panel">
        <TableEditSentence
          sentences={entity.sentences}
          disconnectSentences={entity.disconnectSentences}
          entityId={entity.id}
          title={entity.title}
          isCreate={entity.isCreate}
        />
      </Panel>
    </Collapse>
  );
};

export default EntityEditCard;
