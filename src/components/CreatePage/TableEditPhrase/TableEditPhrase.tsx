import React, { useRef, useState } from 'react';
import { Button, Col, Popconfirm, Row, Table, Tooltip } from 'antd';
import { EditableCell, EditableRow } from '../../common/EditableTableComponent';
import { IDeleteSmth, IPhrase } from '../../../typings/IEntity';
import { DeleteOutlined } from '@ant-design/icons';
import TitleTablePhrase from './TitleTablePhrase';
import {useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';
import {isEmptyObject} from '../../../utils/isEmptyObject';

const { Column } = Table;

interface ITableEditPhraseProps {
  phrases: IPhrase[];
  disconnectPhrases: IDeleteSmth[];
  entityId: number;
  title: string;
  isCreate: boolean;
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
  const cache = useRef({} as ICache);

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const handleSave = async (row: IPhrase) => {
    cache.current[row.id] = row;
    const index = phrases.findIndex(p => p.id === row.id);
    phrases[index] = row;
    setPhrases(p => {
      return [...p];
    })
  };
  const handleDelete = (row: IPhrase) => {
    setDeletePhrases(p => {
      return [...p, {id: row.id}];
    })
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
    })
  };

  const handleAdd = async (value: IPhrase) => {
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

  const filterPhrases = phrases.filter(p => !deletePhrases.some(d => d.id === p.id));
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
          isCreate={isCreate}
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
        render={(text: any, record: any) => {
          return (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete({ ...record })}
            >
              <Button
                danger
                size="small"
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          );
        }}
      />
    </Table>
  );
};

export default TableEditPhrase;
