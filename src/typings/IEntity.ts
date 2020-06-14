import { PartOfSpeech } from './PartOfSpeech';

export interface IPhrase {
  id: number;
  phrase: string;
  ru: string;
}
export interface ITranslate {
  id: number;
  ru: string;
  type: PartOfSpeech;
}
export interface IWord {
  id: number;
  en: string;
  type: PartOfSpeech;
  translate: ITranslate[];
  disconnectTranslate: IDeleteSmth[];
}
export interface IIrrVerb {
  id: number;
  form1EN: string;
  form2EN: string;
  form3EN: string;
  ru: string;
}
export interface ISentence {
  id: number;
  sentence: string;
  ru: string;
}
export interface IEntity {
  id: number;
  title: string;
  irrverb: IIrrVerb | null;
  sentences: ISentence[];
  phrases: IPhrase[];
  words: IWord[];
  isCreate: boolean;
  backTranslations?: string[] | null;
  disconnectWords: IDeleteSmth[];
  disconnectSentences: IDeleteSmth[];
  disconnectPhrases: IDeleteSmth[];
}
export interface IDeleteSmth {
  id: number;
}
export interface ITranslateWordWithParseReturn {
  tag: PartOfSpeech;
  original: string;
}
