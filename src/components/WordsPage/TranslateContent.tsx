import React from 'react';
import {IWord} from '../../typings/IEntity';
import {Table} from 'antd';
import {TagPartOfSpeech} from '../../utils/tagPartOfSpeech';

const { Column } = Table;

interface ITranslateContentProps {
  word: IWord;
}

const TranslateContent = ({word}: ITranslateContentProps) => {
  return (
    <Table dataSource={word.translate} pagination={false} size={'small'} showHeader={false}>
      <Column title="RU" dataIndex="ru" key="ru" width="65%" />
      <Column
        width="35%"
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
