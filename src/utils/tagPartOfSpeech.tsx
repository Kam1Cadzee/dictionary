import {PartOfSpeech} from '../typings/PartOfSpeech';
import {usePartOfSpeech} from '../useHooks/usePartOfSpeech';
import {Tag} from 'antd';
import React from 'react';

interface ITagPartOfSpeechProps {
  type: PartOfSpeech;
}

export const TagPartOfSpeech = ({type}: ITagPartOfSpeechProps) => {
  const findItem = useFindPartOfSpeech(type);
  if (typeof findItem === 'object') {
    const color = defineTagColor(findItem.type);
    return (
      <React.Fragment>
        <Tag color={color}>{findItem.en.toUpperCase()}</Tag>
        <Tag color={color}>{findItem.ua.toUpperCase()}</Tag>
        <Tag color={color}>{findItem.ru.toUpperCase()}</Tag>
      </React.Fragment>
    )
  }

  return <Tag color={defineTagColor(type)}>{type.toUpperCase()}</Tag>
};
export const useFindPartOfSpeech = (type: PartOfSpeech) => {
  const parts = usePartOfSpeech();
  const findItem = parts.find(item => item.type === type);
  if (findItem === null) {
    return type;
  }
  return findItem;
};

export const defineTagColor = (type: PartOfSpeech) => {
  switch (type) {
    case PartOfSpeech.ADJ:
      return 'magenta';
    case PartOfSpeech.ADV:
      return 'gold';
    case PartOfSpeech.OTHER:
      return 'default';
    case PartOfSpeech.VERB:
      return 'geekblue';
    case PartOfSpeech.NOUN:
      return 'green';
    case PartOfSpeech.CONJ:
      return 'lime';
    case PartOfSpeech.MODAL:
      return 'blue';
    case PartOfSpeech.DET:
      return 'default';
    case PartOfSpeech.PREP:
      return 'cyan';
    case PartOfSpeech.PRON:
      return 'purple';
  }
  return 'default';
}
