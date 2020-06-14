import React, { useState } from 'react';
import { Button, Form, Popover, Row } from 'antd';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';
import {IPhrase} from '../../../typings/IEntity';

const { Search } = Input;

interface ITitleTableProps {
  onAdd: any;
  onUpdate: any;
  loadingUpdate: boolean;
  disabled: boolean;
  entity: string;
  isCreate: boolean;
}

interface IContentTitleTableProps {
  onAdd: any;
  onClose: any;
  entity: string;
}

const ContentTitleTable = ({ onClose, onAdd, entity }: IContentTitleTableProps) => {
  const [mutationTranslate, {loading}] = useMutation(MUTATION.translatePhrase);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    onAdd(values);
    onClose();
  };

  const handleSearch = async (value: string, event: any) => {
    event.preventDefault();
    const res = await mutationTranslate({
      variables: {
        phrase: value,
        entity
      }
    });
    if(res.data === null) return;
    const phrase: IPhrase = res.data.translatePhrase;
    form.setFieldsValue({
      ru: phrase.ru
    })
  };

  return (
    <Form name="basic" onFinish={onFinish} form={form}>
      <Form.Item
        name="phrase"
        rules={[{ required: true, message: 'Please input your phrase!' }]}
      >
        <Search onSearch={handleSearch} placeholder="Phrase" enterButton loading={loading} />
      </Form.Item>
      <Input.Group compact size="default">
        <Form.Item
          name="ru"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />} />
        </Form.Item>
      </Input.Group>
    </Form>
  );
};
const TitleTablePhrase = ({
  disabled,
  onUpdate,
  onAdd,
  loadingUpdate,
  entity,
  isCreate
}: ITitleTableProps) => {
  const [isShow, setIsShow] = useState(false);

  const handleOk = () => {
    setIsShow(false);
  };

  const handleVisibleChange = (visible: boolean) => {
    setIsShow(visible);
  };

  return (
    <Row justify="end">
      <Button.Group>
        <Button
          onClick={onUpdate}
          type="primary"
          disabled={disabled || loadingUpdate}
          loading={loadingUpdate}
        >
          {isCreate ? 'Update' : 'Create'}
        </Button>
        <Popover
          content={<ContentTitleTable onClose={handleOk} onAdd={onAdd} entity={entity} />}
          trigger="click"
          visible={isShow}
          onVisibleChange={handleVisibleChange}
          placement="rightBottom"
        >
          <Button onClick={() => setIsShow(true)}>Add phrase</Button>
        </Popover>
      </Button.Group>
    </Row>
  );
};

export default TitleTablePhrase;
