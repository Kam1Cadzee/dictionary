import React, { useState } from 'react';
import { Button, Popover, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ITranslate } from '../../../typings/IEntity';
import { useMutation } from '@apollo/react-hooks';
import { MUTATION } from '../../../graphql/mutation';

const { Search } = Input;

interface IContent {
  onClose: any;
  idWord: number;
  onAdd: (idWord: number, data: ITranslate) => any;
}
const Content = ({ onClose, idWord, onAdd }: IContent) => {
  const [mutationAdd, { loading }] = useMutation(MUTATION.upsertTranslate);
  const handleSearch = async (value: string) => {
    if (value === '') return;
    const res = await mutationAdd({
      variables: {
        idWord,
        ru: value,
      },
    });
    const data: ITranslate = res.data.upsertTranslate;
    onAdd(idWord, data);
    onClose();
  };

  return (
    <Search
      placeholder="input search text"
      onSearch={handleSearch}
      allowClear
      enterButton
      loading={loading}
    />
  );
};

interface IAddTranslateProps {
  idWord: number;
  onAdd: (idWord: number, data: ITranslate) => any;
}
const CreateTranslateOfWord = ({ idWord, onAdd }: IAddTranslateProps) => {
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleVisibleChange = (visible: boolean) => {
    setIsShow(visible);
  };

  return (
    <Popover
      content={<Content onClose={handleClose} idWord={idWord} onAdd={onAdd} />}
      trigger="click"
      visible={isShow}
      onVisibleChange={handleVisibleChange}
      placement="rightBottom"
    >
      <Button
        size="middle"
        shape="circle"
        onClick={() => setIsShow(true)}
        icon={<PlusOutlined />}
      />
    </Popover>
  );
};

export default CreateTranslateOfWord;
