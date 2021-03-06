import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Form, Input, Tooltip} from 'antd';
import {generateClassName} from '../../utils/generateClassName';
import {ZhihuOutlined} from '@ant-design/icons';
import './table.css';


const EditableContext = React.createContext(null as any);

export const EditableRow = ({index, ...props}: any) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
export const EditableCell = ({
                               title,
                               editable,
                               extra,
                               children,
                               dataIndex,
                               record,
                               handleSave,
                               handleTranslate,
                               ...restProps
                             }: any) => {
  const [editing, setEditing] = useState(false);
  const inputRef: any = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e: any) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({...record, ...values, dataIndex});
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save}
               className={generateClassName('editable-cell-value-wrap', {
                 'cell-ru': dataIndex === 'ru'
               })}/>
      </Form.Item>
    ) : (
      <div
        className={generateClassName('editable-cell-value-wrap', {
          'cell-ru': dataIndex === 'ru'
        })}
        onClick={toggleEdit}
      >
        {children}
        {
          extra && record.isNeededTranslate && (
            <Tooltip title="Translate">
              <Button onClick={() => handleTranslate({...record})} className="btnTranslate" shape="round"
                      size="small" icon={<ZhihuOutlined/>}>
              </Button>
            </Tooltip>
          )
        }
      </div>
    );
  }
  if (dataIndex === 'en' && record.children === undefined) return null;
  if (dataIndex === 'ru' && record.children) return null;
  return <td {...restProps}>{childNode}</td>;
};
