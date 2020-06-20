import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';
import {Button, Form, Input, Row, Select} from 'antd';
import {PartOfSpeech} from '../../../typings/PartOfSpeech';
import SelectPartOfSpeech from './SelectPartOfSpeech';
import {IContentTitleTableProps} from '../../common/BasicTItleTable';
import { PlusOutlined } from '@ant-design/icons';

const {Search} = Input;
const {Option} = Select;

const ContentPopoverWord = ({onClose, onAdd, entity}: IContentTitleTableProps) => {
  const [options, setOptions] = useState([]);
  const [mutationTranslateWord] = useMutation(MUTATION.TRANSLATE_WORD);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    onAdd(values);
    onClose();
  };

  const handleChange = (value: PartOfSpeech) => {
    form.setFieldsValue({type: value});
  };

  const handleSearch = async (value: string, event: any) => {
    event.preventDefault();
    if (value === '') return;
    const res = await mutationTranslateWord({
      variables: {
        word: value,
        entity
      }
    });

    if(res.data === null) return ;
    const translateWord: any = res.data.translateWord;
    setOptions(translateWord.translate.map((t: any) => t.ru));
    form.setFieldsValue({
      translate: translateWord.translate.map((t: any) => t.ru),
    });
    handleChange(translateWord.type);
  };

  return (
    <Form name="basic" onFinish={onFinish} form={form} size={'middle'}>
      <Form.Item
        name="en"
        rules={[{required: true, message: 'Please input your word!'}]}
      >
        <Search onSearch={handleSearch} placeholder="Word" enterButton/>
      </Form.Item>
      <Form.Item
        name="translate"
        rules={[{required: true, message: 'Please input translate!'}]}
      >
        <Select mode="tags" tokenSeparators={[',']}>
          {options.map((o) => {
            return <Option value={o}>{o}</Option>;
          })}
        </Select>
      </Form.Item>
      <Row>
        <Form.Item
          name="type"
          rules={[{required: true, message: 'Please select part of speech!'}]}
          initialValue={PartOfSpeech.OTHER}
        >
          <SelectPartOfSpeech onChange={handleChange}/>
        </Form.Item>
        <Form.Item>
          <Button
            size="middle"
            type="primary"
            htmlType="submit"
            shape="circle"
            icon={<PlusOutlined/>}
          />
        </Form.Item>
      </Row>
    </Form>
  );
};

export default ContentPopoverWord;
