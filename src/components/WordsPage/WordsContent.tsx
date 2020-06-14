import React from 'react';
import { IDeleteSmth, IWord } from '../../typings/IEntity';
import { Table } from 'antd';
import { TagPartOfSpeech } from '../../utils/tagPartOfSpeech';

const { Column } = Table;

interface IWordsContentProps {
  words: IWord[];
  disconnectWords: IDeleteSmth[];
}
const WordsContent = ({ words, disconnectWords }: IWordsContentProps) => {
  const data = words
    .filter((w) => !disconnectWords.some((d) => d.id === w.id!))
    .map((w, i) => ({
      key: w.id,
      en: w.en,
      type: w.type,
      children: w.translate,
    }));

  return (
    <Table
      dataSource={data}
      pagination={false}
      size={'small'}
      showHeader={false}
    >
      <Column title="EN" dataIndex="en" key="en" width="35%" />
      <Column title="RU" dataIndex="ru" key="ru" width="35%" />
      <Column
        width="30%"
        title="Part of speech"
        dataIndex="type"
        key="type"
        render={(tags) => {
          return <TagPartOfSpeech type={tags} />;
        }}
      />
    </Table>
  );
};

export default WordsContent;
