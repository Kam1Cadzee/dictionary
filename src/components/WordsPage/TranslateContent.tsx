import React from 'react';
import {IWord} from '../../typings/IEntity';
import {Table} from 'antd';
import {TagPartOfSpeech} from '../../utils/tagPartOfSpeech';

const { Column } = Table;

interface ITranslateContentProps {
  word: IWord;
}

const TranslateContent = ({word}: ITranslateContentProps) => {
  word.translate = word.translate.filter(t => !word.disconnectTranslate.some(d => d.id === t.id));
  return (
    <Table dataSource={word.translate} pagination={false} size={'small'} showHeader={false}>
      <Column title="RU" dataIndex="ru" key="ru" width="50%" />
      <Column
        width="50%"
        title="Part of speech"
        dataIndex="type"
        key="type"
        render={tags => {
          return <TagPartOfSpeech type={tags} />
        }}
      />
    </Table>
  )
};

export default TranslateContent;
