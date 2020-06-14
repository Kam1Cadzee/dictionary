import {useQuery} from '@apollo/react-hooks';
import QUERIES from '../graphql/queries';
import {IPartOfSpeech} from '../typings/PartOfSpeech';

export const usePartOfSpeech = () => {
  const {data} = useQuery(QUERIES.GET_PART_OF_SPEECH, {
    fetchPolicy: 'cache-first',
  });
  return (data ? data.partOfSpeechDescs : []) as IPartOfSpeech[];
};
