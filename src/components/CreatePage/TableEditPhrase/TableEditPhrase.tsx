import React, {useEffect, useRef, useState} from 'react';
import { Button, Col, Popconfirm, Row, Table, Tooltip } from 'antd';
import { EditableCell, EditableRow } from '../../common/EditableTableComponent';
import { IDeleteSmth, IPhrase } from '../../../typings/IEntity';
import { DeleteOutlined,RedoOutlined } from '@ant-design/icons';
import TitleTablePhrase from './TitleTablePhrase';
import {useApolloClient, useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';
import {isEmptyObject} from '../../../utils/isEmptyObject';
import {RedoHistory} from '../../../utils/RedoHistory';

const { Column } = Table;

interface ITableEditPhraseProps {
  phrases: IPhrase[];
  disconnectPhrases: IDeleteSmth[];
  entityId: number;
  title: string;
  isCreate: boolean;
}
interface IChangePhrase {
  oldValue: IPhrase;
  newValue: IPhrase;
}
interface ICache {
  [id: string]: IPhrase;
}

const TableEditPhrase = (props: ITableEditPhraseProps) => {
  const [mutationAddPhrase] = useMutation(MUTATION.upsertPhrase);
  const [mutationUpdate, {loading}] = useMutation(MUTATION.updatePhraseByEntity);
  const [phrases, setPhrases] = useState(props.phrases);
  const [deletePhrases, setDeletePhrases] = useState(props.disconnectPhrases);
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
      deletePhrase: (id: number) => {
        setDeletePhrases((dis) => {
          return [...dis, {id}];
        });
      },
      recoverPhrase: (id: number) => {
        setDeletePhrases((dis) => {
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
    })
  }, []);

  const handleSave = async (row: IPhrase) => {
    const index = phrases.findIndex(p => p.id === row.id);
    if(phrases[index].phrase === row.phrase && phrases[index].ru === row.ru) return ;
    client.writeData({
      data: {
        step: 2
      }
    });
    cache.current[row.id] = row;
    history.current.addAction<IChangePhrase>({
      payload: {
        oldValue: {...phrases[index]},
        newValue: {...row}
      },
      action: 'actionForHandleSaveNext'
    });
    phrases[index] = row;
    setPhrases(p => {
      return [...p];
    })
  };

  const actionForHandleSaveNext = (obj: IChangePhrase) => {
    basicActionForHandleSave(obj.newValue);
  };
  const actionForHandleSavePrev = (obj: IChangePhrase) => {
    basicActionForHandleSave(obj.oldValue);
  };

  const basicActionForHandleSave = async (row: IPhrase) => {
    setPhrases(phrases => {
      cache.current[row.id] = row;
      const index = phrases.findIndex(p => p.id === row.id);
      phrases[index] = row;
      return [...phrases];
    })

  };
  const handleDelete = (row: IPhrase) => {
    setDeletePhrases(p => {
      return [...p, {id: row.id}];
    });
    history.current.addAction({
      action: 'deletePhrase',
      payload: row.id
    });

    setIsCreate(false);
  };

  const handleUpdate = () => {
    mutationUpdate({
      variables: {
        data: {
          entityId: props.entityId,
          disconnectPhrases: deletePhrases.map(d => d.id),
          phrases: Object.values(cache.current).map(p => ({
            id: p.id,
            ru: p.ru,
            phrase: p.phrase
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

  const handleAdd = async (value: IPhrase) => {
    client.writeData({
      data: {
        step: 2
      }
    });
    const res =  await mutationAddPhrase({
      variables: {
        phrase: value.phrase,
        ru: value.ru,
        entityId: props.entityId,
      }
    });
    const phrase: IPhrase = res.data.upsertPhrase;
    setPhrases(p => {
      return [...p, phrase]
    });
  };

  const filterPhrases = !isShowDeleted ?
    phrases.filter(p => !deletePhrases.some(d => d.id === p.id)) : phrases;

  function handleReturn(id: number) {
    setDeletePhrases(phrases => {
      return phrases.filter(p => p.id !== id);
    });

    history.current.addAction({
      action: 'recoverPhrase',
      payload: id
    });
    setIsCreate(false);
  }

  return (
    <Table
      bordered={false}
      showHeader={false}
      components={components}
      dataSource={filterPhrases}
      pagination={false}
      size={'small'}
      rowClassName={() => 'editable-row'}
      title={() => (
        <TitleTablePhrase
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
        />
      )}
    >
      <Column
        title="Phrase"
        dataIndex="phrase"
        key="phrase"
        width="40%"
        onCell={(record) => ({
          record,
          editable: true,
          dataIndex: 'phrase',
          title: 'Phrase',
          handleSave: handleSave,
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
          if(deletePhrases.some(d => d.id === record.id)) {
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

export default TableEditPhrase;
