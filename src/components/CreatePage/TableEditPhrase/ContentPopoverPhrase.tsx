import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';
import {Button, Form, Input} from 'antd';
import {IPhrase} from '../../../typings/IEntity';
import { PlusOutlined } from '@ant-design/icons';
import {IContentTitleTableProps} from '../../common/BasicTItleTable';

const { Search } = Input;

const ContentPopoverPhrase = ({ onClose, onAdd, entity }: IContentTitleTableProps) => {
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

export default ContentPopoverPhrase;
