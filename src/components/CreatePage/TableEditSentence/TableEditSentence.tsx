import React, {useEffect, useRef, useState} from 'react';
import {Button, Table} from 'antd';
import { DeleteOutlined,RedoOutlined } from '@ant-design/icons';
import {IDeleteSmth, IPhrase, ISentence} from '../../../typings/IEntity';
import {useApolloClient, useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';
import {RedoHistory} from '../../../utils/RedoHistory';
import {EditableCell, EditableRow} from '../../common/EditableTableComponent';
import BasicTitleTable from '../../common/BasicTItleTable';
import {isEmptyObject} from '../../../utils/isEmptyObject';
import ContentPopoverPhrase from '../TableEditPhrase/ContentPopoverPhrase';
import ContentPopoverSentence from './ContentPopoverSentence';

const { Column } = Table;

interface ITableEditPhraseProps {
  sentences: ISentence[];
  disconnectSentences: IDeleteSmth[];
  entityId: number;
  title: string;
  isCreate: boolean;
}

interface IChangePhrase {
  oldValue: ISentence;
  newValue: ISentence;
}

interface ICache {
  [id: string]: ISentence;
}

const TableEditSentence = (props: ITableEditPhraseProps) => {
  const [mutationTranslate] = useMutation(MUTATION.translateSentence);
  const [mutationAddSentence] = useMutation(MUTATION.upsertSentence);
  const [mutationUpdate, {loading}] = useMutation(MUTATION.updateSentencesByEntity);
  const [sentences, setSentences] = useState(props.sentences);
  const [deleteSentences, setDeleteSentences] = useState(props.disconnectSentences);
  const [isCreate, setIsCreate] = useState(props.isCreate);
  const [isUpdate, setIsUpdate] = useState(props.isCreate);
  const client = useApolloClient();
  const [isShowDeleted, setShowDeleted] = useState(0);
  const cache = useRef({} as ICache);
  const history = useRef(new RedoHistory());

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };


  useEffect(() => {
    history.current.addHandler({
      deleteSentence: (id: number) => {
        setDeleteSentences((dis) => {
          return [...dis, {id}];
        });
      },
      recoverSentence: (id: number) => {
        setDeleteSentences((dis) => {
          return dis.filter(d => d.id !== id);
        });
      }
    });
    history.current.addHandler({
      actionForHandleSaveNext: (obj: IChangePhrase) => {
        actionForHandleSaveNext(obj);
      },
      actionForHandleSavePrev: (obj: IChangePhrase) => {
        actionForHandleSavePrev(obj);
      }
    });

  }, []);

  const handleSave = async (row: ISentence) => {
    const index = sentences.findIndex(p => p.id === row.id);
    if(sentences[index].sentence === row.sentence && sentences[index].ru === row.ru) return ;
    client.writeData({
      data: {
        step: 2
      }
    });
    cache.current[row.id] = row;
    history.current.addAction<IChangePhrase>({
      payload: {
        oldValue: {...sentences[index]},
        newValue: {...row}
      },
      action: 'actionForHandleSaveNext'
    });
    row.isNeededTranslate = !row.isNeededTranslate;
    sentences[index] = row;
    setSentences(p => {
      return [...p];
    })
  };


  const actionForHandleSaveNext = (obj: IChangePhrase) => {
    basicActionForHandleSave(obj.newValue);
  };
  const actionForHandleSavePrev = (obj: IChangePhrase) => {
    basicActionForHandleSave(obj.oldValue);
  };

  const basicActionForHandleSave = async (row: ISentence) => {
    setSentences(sentences => {
      cache.current[row.id] = row;
      const index = sentences.findIndex(p => p.id === row.id);
      sentences[index] = row;
      return [...sentences];
    })

  };

  const handleDelete = (row: IPhrase) => {
    setDeleteSentences(p => {
      return [...p, {id: row.id}];
    });
    history.current.addAction({
      action: 'deleteSentence',
      payload: row.id
    });

    setIsCreate(false);
  };

  const handleUpdate = () => {
    mutationUpdate({
      variables: {
        data: {
          entityId: props.entityId,
          disconnectSentences: deleteSentences.map(d => d.id),
          sentences: Object.values(cache.current).map(p => ({
            id: p.id,
            ru: p.ru,
            sentence: p.sentence
          }))
        }
      }
    }).then(() => {
      cache.current = {};
      setIsCreate(true);
      setIsUpdate(true);
      client.writeData({
        data: {
          step: 3
        }
      });
    })
  };

  const handleAdd = async (value: ISentence) => {
    client.writeData({
      data: {
        step: 2
      }
    });
    const res =  await mutationAddSentence({
      variables: {
        sentence: value.sentence,
        ru: value.ru,
        entityId: props.entityId,
      }
    });
    const sentences: ISentence = res.data.upsertSentence;
    setSentences(p => {
      return [...p, sentences]
    });
  };

  const handleTranslate = async (value: ISentence) => {
    const res = await mutationTranslate({
      variables: {
        sentence: value.sentence,
        entity: props.title
      }
    });
    if(res.data === null) {
      const index = sentences.findIndex(p => p.id === value.id);
      value.isNeededTranslate = false;
      sentences[index] = value;
      setSentences(p => {
        return [...p];
      });
      return;
    }
    const sentence: ISentence = res.data.translateSentence;
    value.ru = sentence.ru;
    await handleSave(value);
  };

  const filterSentences = !isShowDeleted ?
    sentences.filter(p => !deleteSentences.some(d => d.id === p.id)) : sentences;

  function handleReturn(id: number) {
    setDeleteSentences(sentences => {
      return sentences.filter(p => p.id !== id);
    });

    history.current.addAction({
      action: 'recoverSentence',
      payload: id
    });
    setIsCreate(false);
  }
  return (
    <Table
      bordered={false}
      showHeader={false}
      components={components}
      dataSource={filterSentences}
      pagination={false}
      size={'small'}
      rowClassName={() => 'editable-row'}
      title={() => (
        <BasicTitleTable
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          loadingUpdate={loading}
          disabled={isCreate ? isEmptyObject(cache.current) : false}
          entity={props.title}
          isCreate={isUpdate}
          onNext={history.current.next}
          onPrev={history.current.prev}
          disabledPrev={!history.current.isPrev()}
          disabledNext={!history.current.isNext()}
          onChangeShowDeleted={setShowDeleted}
          addComponent={ContentPopoverSentence}
          btnTitle="Add sentence"
        />
      )}
    >
      <Column
        title="Sentence"
        dataIndex="sentence"
        key="sentence"
        width="40%"
        onCell={(record) => ({
          record,
          editable: true,
          extra: true,
          dataIndex: 'sentence',
          title: 'Sentence',
          handleSave: handleSave,
          handleTranslate
        })}
      />
      <Column
        title="RU"
        dataIndex="ru"
        key="ru"
        width="45%"
        onCell={(record) => ({
          record,
          editable: true,
          dataIndex: 'ru',
          title: 'RU',
          handleSave: handleSave,
        })}
      />
      <Column
        title="Operation"
        dataIndex="operation"
        render={(text: any, record: IPhrase) => {
          if(deleteSentences.some(d => d.id === record.id)) {
            return (
              <Button
                size="small"
                shape="circle-outline"
                icon={<RedoOutlined/>}
                onClick={() => handleReturn(record.id)}
              />
            )
          }
          return (
            <Button
              danger
              size="small"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => handleDelete({ ...record })}
            />
          );
        }}
      />
    </Table>
  );
};

export default TableEditSentence;
