import React, {useState} from 'react';
import {Button, Card} from 'antd';
import {IEntity} from '../../typings/IEntity';
import TranslateContent from './TranslateContent';
import WordsContent from './WordsContent';
import PhrasesContent from './PhrasesContent';

const gridStyle: any = {
  width: '50%',
  textAlign: 'center'
};

const tabListNoTitle = [
  {
    key: 'translate',
    tab: 'Translate',
    component: TranslateContent
  },
  {
    key: 'words',
    tab: 'Words',
    component: WordsContent
  },
  {
    key: 'phrases',
    tab: 'Phrases',
    component: PhrasesContent
  },
  {
    key: 'sentences',
    tab: 'Sentences',
    component: TranslateContent
  },
];

interface IEntityCardProps {
  entity: IEntity;
}
const EntityCard = ({entity}:IEntityCardProps) => {
  const [key, setKey] = useState('translate');

  const onTabChange = (key: string) => {
    setKey(key);
  };


  const word = entity.words.find(w => w.en === entity.title)!;
  const words = entity.words.filter(w => w.en !== entity.title);
  const Content = tabListNoTitle.find(t => t.key === key)!.component;
  return (
    <Card.Grid style={gridStyle}>
      <Card
        tabList={tabListNoTitle}
        activeTabKey={key}
        onTabChange={onTabChange}
        size={'small'}
        title={entity.title}
        extra={<Button>Edit</Button>}
      >
        <Content word={word} disconnectWords={entity.disconnectWords} words={words} phrases={entity.phrases} />
      </Card>
    </Card.Grid>
  )
};

export default EntityCard;
