import React, {useState} from 'react';
import {Button, Form, Input, Popover, Row, Select, Switch, Radio} from 'antd';
import { UndoOutlined, PlusOutlined, RedoOutlined} from '@ant-design/icons';
import SelectPartOfSpeech from './SelectPartOfSpeech';
import {PartOfSpeech} from '../../../typings/PartOfSpeech';
import {useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../../graphql/mutation';

const {Search} = Input;
const {Option} = Select;

interface ITitleTableProps {
  onAdd: any;
  onUpdate: any;
  loadingUpdate: boolean;
  disabled: boolean;
  onChangeShowDeleted: (value: number) => any;
  onPrev: any;
  onNext: any;
  disabledPrev: boolean;
  disabledNext: boolean;
  entity: string;
  isCreate: boolean;
}

interface IContentTitleTableProps {
  onAdd: any;
  onClose: any;
  entity: string;
}

const ContentTitleTable = ({onClose, onAdd, entity}: IContentTitleTableProps) => {
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

const TitleTableWords = ({
                           onAdd,
                           onUpdate,
                           loadingUpdate,
                           disabled,
                           onChangeShowDeleted,
                           onPrev,
                           onNext,
                           disabledNext,
                           disabledPrev,
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
    <Row justify="space-between">
      <div>
        <Button
          size="small"
          type="link"
          onClick={onPrev}
          disabled={disabledPrev}
          icon={<UndoOutlined />}
        />
        <Button
          size="small"
          type="link"
          onClick={onNext}
          disabled={disabledNext}
          icon={<RedoOutlined />}
        />
        <Radio.Group onChange={e => onChangeShowDeleted(e.target.value)} defaultValue={0}  buttonStyle="solid" size="small">
          <Radio.Button value={1}>Show</Radio.Button>
          <Radio.Button value={0}>Hide</Radio.Button>
        </Radio.Group>
      </div>
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
          content={<ContentTitleTable onClose={handleOk} onAdd={onAdd} entity={entity}/>}
          trigger="click"
          visible={isShow}
          onVisibleChange={handleVisibleChange}
          placement="rightBottom"
        >
          <Button onClick={() => setIsShow(true)}>Add word</Button>
        </Popover>
      </Button.Group>
    </Row>
  );
};

export default TitleTableWords;
