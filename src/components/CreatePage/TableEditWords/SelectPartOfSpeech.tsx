import React from 'react';
import { TagPartOfSpeech } from '../../../utils/tagPartOfSpeech';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';
import { usePartOfSpeech } from '../../../useHooks/usePartOfSpeech';
import { PartOfSpeech } from '../../../typings/PartOfSpeech';

const { Option } = Select;

function tagRender(props: any) {
  const { label } = props;

  return <TagPartOfSpeech type={label} />;
}
const SelectPartOfSpeech = (props: SelectProps<PartOfSpeech>) => {
  const parts = usePartOfSpeech();

  return (
    <Select
      tagRender={tagRender}
      style={{ width: '100%' }}
      bordered={false}
      suffixIcon={null}
      {...props}
    >
      {parts.map((p) => {
        return (
          <Option value={p.type} key={p.type}>
            <TagPartOfSpeech type={p.type} />
          </Option>
        );
      })}
    </Select>
  );
};

export default SelectPartOfSpeech;
