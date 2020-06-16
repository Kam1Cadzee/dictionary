import React, {useEffect, useRef, useState} from 'react';
import {Button, Row, Table} from 'antd';
import TitleTableWords from './TitleTableWords';
import {isEmptyObject} from '../../../utils/isEmptyObject';
import {PartOfSpeech} from '../../../typings/PartOfSpeech';
import SelectPartOfSpeech from './SelectPartOfSpeech';
import CreateTranslateOfWord from './CreateTranslateOfWord';
import {IDeleteSmth, ITranslate, IWord} from '../../../typings/IEntity';
import {useApolloClient, useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';
import {EditableCell, EditableRow} from '../../common/EditableTableComponent';
import {DeleteOutlined, RedoOutlined} from '@ant-design/icons';
import {RedoHistory} from '../../../utils/RedoHistory';

const {Column} = Table;

interface ITableEditWordsProps {
  words: IWord[];
  disconnectWords: IDeleteSmth[];
  entityId: number;
  title: string;
  isCreate: boolean;
}

interface ICreateWord {
  en: string;
  translate: string[];
  type: PartOfSpeech;
}

interface IDeleteTranslate {
  idWord: number,
  idTranslate?: number
}

interface IDataColumn {
  key: number;
  en: string;
  type: PartOfSpeech;
  children: IDataChildColumn[];
  dataIndex: string;
  isDelete: boolean;
}

interface IDataChildColumn {
  key: number;
  ru: string;
  type: PartOfSpeech;
  count: number;
  idWord: number;
  dataIndex: string;
  isDelete: boolean;
}

interface IChangeType {
  type?: PartOfSpeech,
  id: number,
  idWord: number,
  oldType?: PartOfSpeech
}

interface IChangeInputValue {
  row: IDataColumn & IDataChildColumn;
  oldValue: string;
}

interface ICache {
  [id: string]: IWord;
}

const getDataOfFilter = (words: IWord[], disconnectWords: IDeleteSmth[], isShowDelete: boolean) => {
  return words
    .filter((w) => !(isShowDelete ? [] : disconnectWords).some((d) => d.id === w.id!))
    .map((w, i) => {

      const filterTranslate = isShowDelete ? w.translate : w.translate.filter(
        (t) => !w.disconnectTranslate.some((d) => d.id === t.id),
      );
      const count = w.translate.filter(
        (t) => !w.disconnectTranslate.some((d) => d.id === t.id)).length;

      return {
        key: w.id || i,
        en: w.en,
        type: w.type,
        isDelete: isShowDelete ? disconnectWords.some(d => d.id === w.id) : false,
        children: filterTranslate.map((t, index) => ({
          key: t.id || index,
          ru: t.ru,
          type: t.type,
          count,
          idWord: w.id,
          isDelete: isShowDelete ? w.disconnectTranslate.some(d => d.id === t.id) : false,
        })),
      };
    });
};
const TableEditWords = (props: ITableEditWordsProps) => {
  const [mutationCreateWord] = useMutation(
    MUTATION.createOrUpdateWordWithTranslate,
  );
  const [mutationUpdate, {loading: loadingUpdate}] = useMutation(
    MUTATION.updateWordsByEntity,
  );
  const cache = useRef({} as ICache);
  const history = useRef(new RedoHistory());
  const client = useApolloClient();
  const [isCreate, setIsCreate] = useState(props.isCreate);
  const [isUpdate, setIsUpdate] = useState(props.isCreate);
  const [isShowDeleted, setShowDeleted] = useState(0);
  const [noDataWords, setNoDataWords] = useState(props.words);
  const [disconnectWords, setDisconnectWords] = useState(props.disconnectWords);
  const truthDataWords = getDataOfFilter(noDataWords, disconnectWords, !!isShowDeleted);

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  useEffect(() => {
    history.current.addHandler({
      addDeleteWord: (id: number) => {
        setDisconnectWords((dis) => {
          return [...dis, {id}];
        });
      },
      removeDeleteWord: (id: number) => {
        setDisconnectWords((dis) => {
          return dis.filter(d => d.id !== id);
        });
      }
    });
    history.current.addHandler({
      addDeleteTranslate: (obj: IDeleteTranslate) => {
        handlerDeleteTranslate(obj);
      },
      removeDeleteTranslate: (obj: IDeleteTranslate) => {
        handlerRemoveDeleteTranslate(obj);
      }
    });
    history.current.addHandler({
      actionForHandleChangeTypeNext: (obj: IChangeType) => {
        actionForHandleChangeTypeNext(obj)
      },
      actionForHandleChangeTypePrev: (obj: IChangeType) => {
        actionForHandleChangeTypePrev(obj)
      },
    });
    history.current.addHandler({
      actionForHandleChangeInputValueNext: (obj: IChangeInputValue) => {
        actionForHandleChangeInputValueNext(obj);
      },
      actionForHandleChangeInputValuePrev: (obj: IChangeInputValue) => {
        actionForHandleChangeInputValuePrev(obj)
      }
    })
  }, []);
  const handleDelete = async (dataDelete: IDataColumn & IDataChildColumn) => {
    if (dataDelete.children) {
      history.current.addAction({
        action: 'addDeleteWord',
        payload: dataDelete.key
      });
      setDisconnectWords((dis) => {
        return [...dis, {id: dataDelete.key}];
      });
      setIsCreate(false);
    } else {
      history.current.addAction({
        action: 'addDeleteTranslate',
        payload: {idTranslate: dataDelete.key, idWord: dataDelete.idWord}
      });
      handlerDeleteTranslate({idTranslate: dataDelete.key, idWord: dataDelete.idWord});
    }
  };
  const handlerDeleteTranslate = ({idTranslate, idWord}: IDeleteTranslate) => {
    setNoDataWords(words => {
      const findWord = words.find((w) => w.id === idWord)!;
      findWord.disconnectTranslate = [
        ...findWord.disconnectTranslate,
        {id: idTranslate!},
      ];
      cache.current[idWord] = findWord;
      return [...words]
    })
  };
  const handleSave = (row: IDataColumn & IDataChildColumn) => {
    setNoDataWords((words) => {
      const indexWord = words.findIndex(
        (w) => w.id === (row.idWord || row.key),
      )!;
      if (row.en) {
        if(words[indexWord].en === row.en) return words;
        history.current.addAction<IChangeInputValue>({
          action: 'actionForHandleChangeInputValueNext',
          payload: {
            row: row,
            oldValue: words[indexWord].en
          }
        });
        words[indexWord].en = row.en;
      }
      else {
        const indexRu = words[indexWord].translate.findIndex(
          (t) => t.id === row.key,
        )!;
        if(words[indexWord].translate[indexRu].ru === row.ru) return words;
        history.current.addAction<IChangeInputValue>({
          action: 'actionForHandleChangeInputValueNext',
          payload: {
            row: row,
            oldValue: words[indexWord].translate[indexRu].ru
          }
        });
        words[indexWord].translate[indexRu].ru = row.ru;
      }
      client.writeData({
        data: {
          step: 2
        }
      });
      cache.current[row.idWord || row.key] = words[indexWord];
      return [...words];
    });
  };

  const actionForHandleChangeInputValueNext = (data: IChangeInputValue) => {
    basicActionForHandleInputValue(data.row);
  };
  const actionForHandleChangeInputValuePrev = (data: IChangeInputValue) => {
    const row = {...data.row};
    row.en = row.en ? data.oldValue : '';
    row.ru = row.ru ? data.oldValue : '';
    basicActionForHandleInputValue(row);
  };
  const basicActionForHandleInputValue = (row: IDataColumn & IDataChildColumn) => {
    setNoDataWords((words) => {
      const indexWord = words.findIndex(
        (w) => w.id === (row.idWord || row.key),
      )!;
      if (row.en) {
        words[indexWord].en = row.en;
      } else {
        const indexRu = words[indexWord].translate.findIndex(
          (t) => t.id === row.key,
        )!;
        words[indexWord].translate[indexRu].ru = row.ru;
      }
      cache.current[row.idWord || row.key] = words[indexWord];
      return [...words];
    });
  };

  const handleChangeType = (type: PartOfSpeech, id: number, idWord: number) => {
    client.writeData({
      data: {
        step: 2
      }
    });
    setNoDataWords((words) => {
      const indexWord = words.findIndex((w) => w.id === (idWord || id))!;
      if (!idWord) {
        history.current.addAction<IChangeType>({
          action: 'actionForHandleChangeTypeNext',
          payload: {
            idWord,
            id,
            oldType: words[indexWord].type,
            type
          }
        });
        words[indexWord].type = type;
      } else {
        const indexRu = words[indexWord].translate.findIndex(
          (t) => t.id === id,
        )!;
        history.current.addAction<IChangeType>({
          action: 'actionForHandleChangeTypeNext',
          payload: {
            idWord,
            id,
            oldType: words[indexWord].translate[indexRu].type,
            type
          }
        });
        words[indexWord].translate[indexRu].type = type;
      }
      cache.current[idWord || id] = words[indexWord];
      return [...words];
    });
  };
  const actionForHandleChangeTypeNext = (data: IChangeType) => {
    const {id, idWord} = data;
    const type: any = data.type;
    basicActionForHandleChangeType(type, id, idWord);
  };
  const actionForHandleChangeTypePrev = (data: IChangeType) => {
    const {id, idWord} = data;
    const type: any = data.oldType;
    basicActionForHandleChangeType(type, id, idWord);
  };
  const basicActionForHandleChangeType = (type: PartOfSpeech, id: number, idWord: number) => {
    setNoDataWords((words) => {
      const indexWord = words.findIndex((w) => w.id === (idWord || id))!;
      if (!idWord) {
        words[indexWord].type = type;
      } else {
        const indexRu = words[indexWord].translate.findIndex(
          (t) => t.id === id,
        )!;
        words[indexWord].translate[indexRu].type = type;
      }
      cache.current[idWord || id] = words[indexWord];
      return [...words];
    });
  };

  const handleAdd = async (values: ICreateWord) => {
    client.writeData({
      data: {
        step: 2
      }
    });
    const res = await mutationCreateWord({
      variables: {
        entityId: props.entityId,
        type: values.type,
        en: values.en,
        translate: values.translate,
      },
    });
    const data: IWord = res.data.createOrUpdateWordWithTranslate;
    history.current.addAction({
      payload: data.id,
      action: 'removeDeleteWord'
    });
    setNoDataWords((words) => {
      return [...words, data];
    });
  };

  const handleAddTranslate = (idWord: number, data: ITranslate) => {
    const findIndex = noDataWords.findIndex((w) => w.id === idWord);
    const index = noDataWords[findIndex].translate.findIndex(
      (t) => t.id === data.id,
    );
    if (index === -1) {
      noDataWords[findIndex].translate.push(data);
      setNoDataWords([...noDataWords]);
    }
  };

  const handleUpdate = () => {
    mutationUpdate({
      variables: {
        data: {
          entityId: props.entityId,
          words: Object.values(cache.current).map((w) => ({
            type: w.type,
            id: w.id,
            disconnectTranslate: w.disconnectTranslate.map((d) => d.id),
            translate: w.translate.map((t) => ({
              id: t.id,
              type: t.type,
              ru: t.ru,
            })),
          })),
          disconnectWords: disconnectWords.map((d) => d.id),
        },
      },
    }).then((res) => {
      cache.current = {};
      setIsCreate(true);
      setIsUpdate(true);
      client.writeData({
        data: {
          step: 3
        }
      });
    });
  };

  const handleReturn = ({idTranslate, idWord}: { idWord: number, idTranslate?: number }) => {
    if (idTranslate) {
      history.current.addAction({
        action: 'removeDeleteTranslate',
        payload: {idTranslate, idWord}
      });
      handlerRemoveDeleteTranslate({idTranslate, idWord});
    } else {
      history.current.addAction({
        action: 'removeDeleteWord',
        payload: idWord
      });
      setDisconnectWords(dis => {
        return dis.filter(d => d.id !== idWord);
      })
      setIsCreate(false);
    }
  };

  const handlerRemoveDeleteTranslate = ({idWord, idTranslate}: IDeleteTranslate) => {
    setNoDataWords(words => {
      const findIndex = words.findIndex(w => w.id === idWord);
      words[findIndex].disconnectTranslate = words[findIndex].disconnectTranslate.filter(d => d.id !== idTranslate);
      return [...words];
    })
  };

  return (
    <Table
      bordered={false}
      showHeader={false}
      components={components}
      dataSource={truthDataWords}
      pagination={false}
      size={'small'}
      rowClassName={() => 'editable-row'}
      title={() => (
        <TitleTableWords
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          loadingUpdate={loadingUpdate}
          disabled={isCreate ? isEmptyObject(cache.current) : false}//false - onClick
          onChangeShowDeleted={setShowDeleted}
          disabledPrev={!history.current.isPrev()}
          disabledNext={!history.current.isNext()}
          onPrev={history.current.prev}
          onNext={history.current.next}
          entity={props.title}
          isCreate={isUpdate}
        />
      )}
    >
      <Column
        title="EN"
        dataIndex="en"
        key="en"
        width="40%"
        onCell={(record) => ({
          record,
          dataIndex: 'en',
          title: 'EN',
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
        title="Part of speech"
        dataIndex="type"
        key="type"
        width="15%"
        render={(
          type: PartOfSpeech,
          record: IDataColumn & IDataChildColumn,
        ) => {
          return (
            <SelectPartOfSpeech
              value={type}
              onChange={(type) =>
                handleChangeType(type, record.key, record.idWord)
              }
            />
          );
        }}
      />
      <Column
        title="Operation"
        dataIndex="operation"
        render={(text: any, record: IDataColumn & IDataChildColumn) => {
          const isEn = !record.idWord;
          const idWord = isEn ? record.key : record.idWord!;
          const idTranslate = isEn ? undefined : record.key;

          if (record.isDelete) {
            return (
              <Button
                size="small"
                shape="circle-outline"
                icon={<RedoOutlined/>}
                onClick={() => handleReturn({idWord, idTranslate})}
              />
            )
          }
          if (record.count && record.count === 1) {
            return null;
          }

          return (
            <Row align="middle">
              {isEn && (
                <CreateTranslateOfWord
                  idWord={record.key}
                  onAdd={handleAddTranslate}
                />
              )}
              <Button
                danger
                size="small"
                shape="circle"
                icon={<DeleteOutlined/>}
                onClick={() => handleDelete({...record})}
              />
            </Row>
          );
        }}
      />
    </Table>
  );
};

export default TableEditWords;
