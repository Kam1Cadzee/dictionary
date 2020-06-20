import React from 'react';
import { IDeleteSmth, IWord } from '../../typings/IEntity';
import {Col, Table, Typography} from 'antd';
import { TagPartOfSpeech } from '../../utils/tagPartOfSpeech';

const { Column } = Table;
const { Text } = Typography;

interface IWordsContentProps {
  words: IWord[];
  disconnectWords: IDeleteSmth[];
}
const Cell = ({dataIndex, record, children, ...restProps}: any) => {
  if (dataIndex === 'en' && record.children === undefined) return null;
  if (dataIndex === 'ru' && record.children) return null;
  return <td {...restProps}>
    {
      dataIndex === 'en' ? (
        <Text strong>{children}</Text>
      ) : (
        <Text type="secondary">{children}</Text>
      )
    }
  </td>;
};

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
      components={{
        body: {
          cell: Cell
        }
      }}
    >
      <Column title="EN" dataIndex="en" key="en" width="40%"
              onCell={(record) => ({
                record,
                dataIndex: 'en',
                title: 'EN'
              })}
      />
      <Column title="RU" dataIndex="ru" key="ru"
              onCell={(record) => ({
                record,
                dataIndex: 'ru',
                title: 'RU',
              })}
      />
      <Column
        width="60%"
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
