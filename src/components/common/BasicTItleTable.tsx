import React, {useState} from 'react';
import {Button, Popover, Radio, Row} from 'antd';
import {RedoOutlined, UndoOutlined} from '@ant-design/icons';

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
  addComponent: React.FC<IContentTitleTableProps>;
  btnTitle: string;
}

export interface IContentTitleTableProps {
  onAdd: any;
  onClose: any;
  entity: string;
}

const BasicTitleTable = ({
                           disabled,
                           onUpdate,
                           onAdd,
                           loadingUpdate,
                           entity,
                           isCreate,
                           disabledNext,
                           onNext,
                           disabledPrev,
                           onPrev,
                           onChangeShowDeleted,
                           addComponent: AddComponent,
                           btnTitle
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
          icon={<UndoOutlined/>}
        />
        <Button
          size="small"
          type="link"
          onClick={onNext}
          disabled={disabledNext}
          icon={<RedoOutlined/>}
        />
        <Radio.Group onChange={e => onChangeShowDeleted(e.target.value)} defaultValue={0} buttonStyle="solid"
                     size="small">
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
          content={<AddComponent onClose={handleOk} onAdd={onAdd} entity={entity}/>}
          trigger="click"
          visible={isShow}
          onVisibleChange={handleVisibleChange}
          placement="rightBottom"
        >
          <Button onClick={() => setIsShow(true)}>{btnTitle}</Button>
        </Popover>
      </Button.Group>
    </Row>
  );
};

export default BasicTitleTable;
