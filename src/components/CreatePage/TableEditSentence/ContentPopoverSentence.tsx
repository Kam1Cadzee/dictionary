import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';
import {Button, Form, Input} from 'antd';
import {ISentence} from '../../../typings/IEntity';
import { PlusOutlined } from '@ant-design/icons';
import {IContentTitleTableProps} from '../../common/BasicTItleTable';

const { Search } = Input;

const ContentPopoverSentence = ({ onClose, onAdd, entity }: IContentTitleTableProps) => {
  const [mutationTranslate, {loading}] = useMutation(MUTATION.translateSentence);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    onAdd(values);
    onClose();
  };

  const handleSearch = async (value: string, event: any) => {
    event.preventDefault();
    const res = await mutationTranslate({
      variables: {
        sentence: value,
        entity
      }
    });
    if(res.data === null) return;
    const sentence: ISentence = res.data.translateSentence;
    form.setFieldsValue({
      ru: sentence.ru
    })
  };

  return (
    <Form name="basic" onFinish={onFinish} form={form}>
      <Form.Item
        name="sentence"
        rules={[{ required: true, message: 'Please input your sentence!' }]}
      >
        <Search onSearch={handleSearch} placeholder="Sentence" enterButton loading={loading} />
      </Form.Item>
      <Input.Group compact size="default">
        <Form.Item
          name="ru"
          rules={[{ required: true, message: 'Please input your sentence!' }]}
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

export default ContentPopoverSentence;
