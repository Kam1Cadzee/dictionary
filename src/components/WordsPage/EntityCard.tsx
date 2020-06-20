import React, {useState} from 'react';
import {Button, Card} from 'antd';
import {Link} from 'react-router-dom'
import {IEntity} from '../../typings/IEntity';
import TranslateContent from './TranslateContent';
import WordsContent from './WordsContent';
import PhrasesContent from './PhrasesContent';
import SentencesContent from './SentencesContent';
import css from './WordsPage.module.css';

const gridStyle: any = {

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
    component: SentencesContent
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
    <Card.Grid className={css.entityCard}  >
      <Card
        tabList={tabListNoTitle}
        activeTabKey={key}
        onTabChange={onTabChange}
        type={'inner'}
        title={entity.title}
        extra={<Link to={{
          pathname: '/main/create/',
          state: {
            id: entity.id
          }
        }
        }>Edit</Link>}
      >
        <Content
          word={word}
          sentences={entity.sentences}
          disconnectWords={entity.disconnectWords}
          words={words}
          phrases={entity.phrases}
          disconnectSentences={entity.disconnectSentences}
          disconnectPhrases={entity.disconnectPhrases}
        />
      </Card>
    </Card.Grid>
  )
};

export default EntityCard;
