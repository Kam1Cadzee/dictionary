export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AggregateEntity = {
  __typename?: 'AggregateEntity';
  count: Scalars['Int'];
};


export type AggregateEntityCountArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};

export type AggregateIrrverb = {
  __typename?: 'AggregateIrrverb';
  count: Scalars['Int'];
};


export type AggregateIrrverbCountArgs = {
  after?: Maybe<IrrverbWhereUniqueInput>;
  before?: Maybe<IrrverbWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IrrverbOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<IrrverbWhereInput>;
};

export type AggregateMobileApp = {
  __typename?: 'AggregateMobileApp';
  count: Scalars['Int'];
};


export type AggregateMobileAppCountArgs = {
  after?: Maybe<MobileAppWhereUniqueInput>;
  before?: Maybe<MobileAppWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MobileAppOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MobileAppWhereInput>;
};

export type AggregatePartOfSpeechDesc = {
  __typename?: 'AggregatePartOfSpeechDesc';
  count: Scalars['Int'];
};


export type AggregatePartOfSpeechDescCountArgs = {
  after?: Maybe<PartOfSpeechDescWhereUniqueInput>;
  before?: Maybe<PartOfSpeechDescWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartOfSpeechDescOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartOfSpeechDescWhereInput>;
};

export type AggregatePhrase = {
  __typename?: 'AggregatePhrase';
  count: Scalars['Int'];
};


export type AggregatePhraseCountArgs = {
  after?: Maybe<PhraseWhereUniqueInput>;
  before?: Maybe<PhraseWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PhraseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PhraseWhereInput>;
};

export type AggregateSentence = {
  __typename?: 'AggregateSentence';
  count: Scalars['Int'];
};


export type AggregateSentenceCountArgs = {
  after?: Maybe<SentenceWhereUniqueInput>;
  before?: Maybe<SentenceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SentenceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SentenceWhereInput>;
};

export type AggregateTranslate = {
  __typename?: 'AggregateTranslate';
  count: Scalars['Int'];
};


export type AggregateTranslateCountArgs = {
  after?: Maybe<TranslateWhereUniqueInput>;
  before?: Maybe<TranslateWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TranslateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TranslateWhereInput>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count: Scalars['Int'];
};


export type AggregateUserCountArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type AggregateWord = {
  __typename?: 'AggregateWord';
  count: Scalars['Int'];
};


export type AggregateWordCountArgs = {
  after?: Maybe<WordWhereUniqueInput>;
  before?: Maybe<WordWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WordOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WordWhereInput>;
};

export type AnotherUser_Firstname_Lastname_KeyCompoundUniqueInput = {
  en: Scalars['String'];
  userId: Scalars['Int'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type CreateTranslateInput = {
  idWord: Scalars['Float'];
  translation: TranslationInput;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type Entity = {
  __typename?: 'Entity';
  createdAt: Scalars['DateTime'];
  disconnectPhrases?: Maybe<Array<Phrase>>;
  disconnectSentences?: Maybe<Array<Sentence>>;
  disconnectWords?: Maybe<Array<Word>>;
  id: Scalars['Int'];
  irrverb?: Maybe<Irrverb>;
  irrverbId?: Maybe<Scalars['Int']>;
  isNeededEdit: Scalars['Boolean'];
  phrases?: Maybe<Array<Phrase>>;
  sentences?: Maybe<Array<Sentence>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  User: User;
  userId: Scalars['Int'];
  words?: Maybe<Array<Word>>;
};


export type EntityDisconnectPhrasesArgs = {
  after?: Maybe<PhraseWhereUniqueInput>;
  before?: Maybe<PhraseWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PhraseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PhraseWhereInput>;
};


export type EntityDisconnectSentencesArgs = {
  after?: Maybe<SentenceWhereUniqueInput>;
  before?: Maybe<SentenceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SentenceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SentenceWhereInput>;
};


export type EntityDisconnectWordsArgs = {
  after?: Maybe<WordWhereUniqueInput>;
  before?: Maybe<WordWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WordOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WordWhereInput>;
};


export type EntityPhrasesArgs = {
  after?: Maybe<PhraseWhereUniqueInput>;
  before?: Maybe<PhraseWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PhraseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PhraseWhereInput>;
};


export type EntitySentencesArgs = {
  after?: Maybe<SentenceWhereUniqueInput>;
  before?: Maybe<SentenceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SentenceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SentenceWhereInput>;
};


export type EntityWordsArgs = {
  after?: Maybe<WordWhereUniqueInput>;
  before?: Maybe<WordWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WordOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WordWhereInput>;
};

export type EntityCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseCreateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceCreateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectEntitiesInput>;
  irrverb?: Maybe<IrrverbCreateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseCreateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutEntitiesInput;
  words?: Maybe<WordCreateManyWithoutEntitiesInput>;
};

export type EntityCreateManyWithoutDisconnectPhrasesInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutDisconnectPhrasesInput>>;
};

export type EntityCreateManyWithoutDisconnectSentencesInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutDisconnectSentencesInput>>;
};

export type EntityCreateManyWithoutDisconnectWordsInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutDisconnectWordsInput>>;
};

export type EntityCreateManyWithoutPhrasesInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutPhrasesInput>>;
};

export type EntityCreateManyWithoutSentencesInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutSentencesInput>>;
};

export type EntityCreateManyWithoutUserInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutUserInput>>;
};

export type EntityCreateManyWithoutWordsInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutWordsInput>>;
};

export type EntityCreateOneWithoutIrrverbInput = {
  connect?: Maybe<EntityWhereUniqueInput>;
  create?: Maybe<EntityCreateWithoutIrrverbInput>;
};

export type EntityCreateWithoutDisconnectPhrasesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectSentences?: Maybe<SentenceCreateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectEntitiesInput>;
  irrverb?: Maybe<IrrverbCreateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseCreateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutEntitiesInput;
  words?: Maybe<WordCreateManyWithoutEntitiesInput>;
};

export type EntityCreateWithoutDisconnectSentencesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseCreateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectEntitiesInput>;
  irrverb?: Maybe<IrrverbCreateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseCreateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutEntitiesInput;
  words?: Maybe<WordCreateManyWithoutEntitiesInput>;
};

export type EntityCreateWithoutDisconnectWordsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseCreateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceCreateManyWithoutDisconnectEntitiesInput>;
  irrverb?: Maybe<IrrverbCreateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseCreateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutEntitiesInput;
  words?: Maybe<WordCreateManyWithoutEntitiesInput>;
};

export type EntityCreateWithoutIrrverbInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseCreateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceCreateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectEntitiesInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseCreateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutEntitiesInput;
  words?: Maybe<WordCreateManyWithoutEntitiesInput>;
};

export type EntityCreateWithoutPhrasesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseCreateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceCreateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectEntitiesInput>;
  irrverb?: Maybe<IrrverbCreateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  sentences?: Maybe<SentenceCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutEntitiesInput;
  words?: Maybe<WordCreateManyWithoutEntitiesInput>;
};

export type EntityCreateWithoutSentencesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseCreateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceCreateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectEntitiesInput>;
  irrverb?: Maybe<IrrverbCreateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutEntitiesInput;
  words?: Maybe<WordCreateManyWithoutEntitiesInput>;
};

export type EntityCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseCreateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceCreateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectEntitiesInput>;
  irrverb?: Maybe<IrrverbCreateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseCreateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  words?: Maybe<WordCreateManyWithoutEntitiesInput>;
};

export type EntityCreateWithoutWordsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseCreateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceCreateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectEntitiesInput>;
  irrverb?: Maybe<IrrverbCreateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseCreateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceCreateManyWithoutEntitiesInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutEntitiesInput;
};

export type EntityFilter = {
  every?: Maybe<EntityWhereInput>;
  none?: Maybe<EntityWhereInput>;
  some?: Maybe<EntityWhereInput>;
};

export type EntityOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  irrverbId?: Maybe<OrderByArg>;
  isNeededEdit?: Maybe<OrderByArg>;
  title?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type EntityScalarWhereInput = {
  AND?: Maybe<Array<EntityScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  disconnectPhrases?: Maybe<PhraseFilter>;
  disconnectSentences?: Maybe<SentenceFilter>;
  disconnectWords?: Maybe<WordFilter>;
  id?: Maybe<IntFilter>;
  irrverbId?: Maybe<NullableIntFilter>;
  isNeededEdit?: Maybe<BooleanFilter>;
  NOT?: Maybe<Array<EntityScalarWhereInput>>;
  OR?: Maybe<Array<EntityScalarWhereInput>>;
  phrases?: Maybe<PhraseFilter>;
  sentences?: Maybe<SentenceFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntFilter>;
  words?: Maybe<WordFilter>;
};

export type EntityUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  irrverb?: Maybe<IrrverbUpdateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseUpdateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutEntitiesInput>;
  words?: Maybe<WordUpdateManyWithoutEntitiesInput>;
};

export type EntityUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EntityUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EntityUpdateManyWithoutDisconnectPhrasesInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutDisconnectPhrasesInput>>;
  delete?: Maybe<Array<EntityWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EntityScalarWhereInput>>;
  disconnect?: Maybe<Array<EntityWhereUniqueInput>>;
  set?: Maybe<Array<EntityWhereUniqueInput>>;
  update?: Maybe<Array<EntityUpdateWithWhereUniqueWithoutDisconnectPhrasesInput>>;
  updateMany?: Maybe<Array<EntityUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<EntityUpsertWithWhereUniqueWithoutDisconnectPhrasesInput>>;
};

export type EntityUpdateManyWithoutDisconnectSentencesInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutDisconnectSentencesInput>>;
  delete?: Maybe<Array<EntityWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EntityScalarWhereInput>>;
  disconnect?: Maybe<Array<EntityWhereUniqueInput>>;
  set?: Maybe<Array<EntityWhereUniqueInput>>;
  update?: Maybe<Array<EntityUpdateWithWhereUniqueWithoutDisconnectSentencesInput>>;
  updateMany?: Maybe<Array<EntityUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<EntityUpsertWithWhereUniqueWithoutDisconnectSentencesInput>>;
};

export type EntityUpdateManyWithoutDisconnectWordsInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutDisconnectWordsInput>>;
  delete?: Maybe<Array<EntityWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EntityScalarWhereInput>>;
  disconnect?: Maybe<Array<EntityWhereUniqueInput>>;
  set?: Maybe<Array<EntityWhereUniqueInput>>;
  update?: Maybe<Array<EntityUpdateWithWhereUniqueWithoutDisconnectWordsInput>>;
  updateMany?: Maybe<Array<EntityUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<EntityUpsertWithWhereUniqueWithoutDisconnectWordsInput>>;
};

export type EntityUpdateManyWithoutPhrasesInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutPhrasesInput>>;
  delete?: Maybe<Array<EntityWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EntityScalarWhereInput>>;
  disconnect?: Maybe<Array<EntityWhereUniqueInput>>;
  set?: Maybe<Array<EntityWhereUniqueInput>>;
  update?: Maybe<Array<EntityUpdateWithWhereUniqueWithoutPhrasesInput>>;
  updateMany?: Maybe<Array<EntityUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<EntityUpsertWithWhereUniqueWithoutPhrasesInput>>;
};

export type EntityUpdateManyWithoutSentencesInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutSentencesInput>>;
  delete?: Maybe<Array<EntityWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EntityScalarWhereInput>>;
  disconnect?: Maybe<Array<EntityWhereUniqueInput>>;
  set?: Maybe<Array<EntityWhereUniqueInput>>;
  update?: Maybe<Array<EntityUpdateWithWhereUniqueWithoutSentencesInput>>;
  updateMany?: Maybe<Array<EntityUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<EntityUpsertWithWhereUniqueWithoutSentencesInput>>;
};

export type EntityUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutUserInput>>;
  delete?: Maybe<Array<EntityWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EntityScalarWhereInput>>;
  disconnect?: Maybe<Array<EntityWhereUniqueInput>>;
  set?: Maybe<Array<EntityWhereUniqueInput>>;
  update?: Maybe<Array<EntityUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<EntityUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<EntityUpsertWithWhereUniqueWithoutUserInput>>;
};

export type EntityUpdateManyWithoutWordsInput = {
  connect?: Maybe<Array<EntityWhereUniqueInput>>;
  create?: Maybe<Array<EntityCreateWithoutWordsInput>>;
  delete?: Maybe<Array<EntityWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EntityScalarWhereInput>>;
  disconnect?: Maybe<Array<EntityWhereUniqueInput>>;
  set?: Maybe<Array<EntityWhereUniqueInput>>;
  update?: Maybe<Array<EntityUpdateWithWhereUniqueWithoutWordsInput>>;
  updateMany?: Maybe<Array<EntityUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<EntityUpsertWithWhereUniqueWithoutWordsInput>>;
};

export type EntityUpdateManyWithWhereNestedInput = {
  data: EntityUpdateManyDataInput;
  where: EntityScalarWhereInput;
};

export type EntityUpdateOneWithoutIrrverbInput = {
  connect?: Maybe<EntityWhereUniqueInput>;
  create?: Maybe<EntityCreateWithoutIrrverbInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<EntityUpdateWithoutIrrverbDataInput>;
  upsert?: Maybe<EntityUpsertWithoutIrrverbInput>;
};

export type EntityUpdateWithoutDisconnectPhrasesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectSentences?: Maybe<SentenceUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  irrverb?: Maybe<IrrverbUpdateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseUpdateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutEntitiesInput>;
  words?: Maybe<WordUpdateManyWithoutEntitiesInput>;
};

export type EntityUpdateWithoutDisconnectSentencesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  irrverb?: Maybe<IrrverbUpdateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseUpdateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutEntitiesInput>;
  words?: Maybe<WordUpdateManyWithoutEntitiesInput>;
};

export type EntityUpdateWithoutDisconnectWordsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  irrverb?: Maybe<IrrverbUpdateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseUpdateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutEntitiesInput>;
  words?: Maybe<WordUpdateManyWithoutEntitiesInput>;
};

export type EntityUpdateWithoutIrrverbDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseUpdateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutEntitiesInput>;
  words?: Maybe<WordUpdateManyWithoutEntitiesInput>;
};

export type EntityUpdateWithoutPhrasesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  irrverb?: Maybe<IrrverbUpdateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  sentences?: Maybe<SentenceUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutEntitiesInput>;
  words?: Maybe<WordUpdateManyWithoutEntitiesInput>;
};

export type EntityUpdateWithoutSentencesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  irrverb?: Maybe<IrrverbUpdateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutEntitiesInput>;
  words?: Maybe<WordUpdateManyWithoutEntitiesInput>;
};

export type EntityUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  irrverb?: Maybe<IrrverbUpdateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseUpdateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  words?: Maybe<WordUpdateManyWithoutEntitiesInput>;
};

export type EntityUpdateWithoutWordsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectPhrases?: Maybe<PhraseUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectSentences?: Maybe<SentenceUpdateManyWithoutDisconnectEntitiesInput>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectEntitiesInput>;
  id?: Maybe<Scalars['Int']>;
  irrverb?: Maybe<IrrverbUpdateOneWithoutEntityInput>;
  isNeededEdit?: Maybe<Scalars['Boolean']>;
  phrases?: Maybe<PhraseUpdateManyWithoutEntitiesInput>;
  sentences?: Maybe<SentenceUpdateManyWithoutEntitiesInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutEntitiesInput>;
};

export type EntityUpdateWithWhereUniqueWithoutDisconnectPhrasesInput = {
  data: EntityUpdateWithoutDisconnectPhrasesDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpdateWithWhereUniqueWithoutDisconnectSentencesInput = {
  data: EntityUpdateWithoutDisconnectSentencesDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpdateWithWhereUniqueWithoutDisconnectWordsInput = {
  data: EntityUpdateWithoutDisconnectWordsDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpdateWithWhereUniqueWithoutPhrasesInput = {
  data: EntityUpdateWithoutPhrasesDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpdateWithWhereUniqueWithoutSentencesInput = {
  data: EntityUpdateWithoutSentencesDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpdateWithWhereUniqueWithoutUserInput = {
  data: EntityUpdateWithoutUserDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpdateWithWhereUniqueWithoutWordsInput = {
  data: EntityUpdateWithoutWordsDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpsertWithoutIrrverbInput = {
  create: EntityCreateWithoutIrrverbInput;
  update: EntityUpdateWithoutIrrverbDataInput;
};

export type EntityUpsertWithWhereUniqueWithoutDisconnectPhrasesInput = {
  create: EntityCreateWithoutDisconnectPhrasesInput;
  update: EntityUpdateWithoutDisconnectPhrasesDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpsertWithWhereUniqueWithoutDisconnectSentencesInput = {
  create: EntityCreateWithoutDisconnectSentencesInput;
  update: EntityUpdateWithoutDisconnectSentencesDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpsertWithWhereUniqueWithoutDisconnectWordsInput = {
  create: EntityCreateWithoutDisconnectWordsInput;
  update: EntityUpdateWithoutDisconnectWordsDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpsertWithWhereUniqueWithoutPhrasesInput = {
  create: EntityCreateWithoutPhrasesInput;
  update: EntityUpdateWithoutPhrasesDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpsertWithWhereUniqueWithoutSentencesInput = {
  create: EntityCreateWithoutSentencesInput;
  update: EntityUpdateWithoutSentencesDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpsertWithWhereUniqueWithoutUserInput = {
  create: EntityCreateWithoutUserInput;
  update: EntityUpdateWithoutUserDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityUpsertWithWhereUniqueWithoutWordsInput = {
  create: EntityCreateWithoutWordsInput;
  update: EntityUpdateWithoutWordsDataInput;
  where: EntityWhereUniqueInput;
};

export type EntityWhereInput = {
  AND?: Maybe<Array<EntityWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  disconnectPhrases?: Maybe<PhraseFilter>;
  disconnectSentences?: Maybe<SentenceFilter>;
  disconnectWords?: Maybe<WordFilter>;
  id?: Maybe<IntFilter>;
  irrverb?: Maybe<IrrverbWhereInput>;
  irrverbId?: Maybe<NullableIntFilter>;
  isNeededEdit?: Maybe<BooleanFilter>;
  NOT?: Maybe<Array<EntityWhereInput>>;
  OR?: Maybe<Array<EntityWhereInput>>;
  phrases?: Maybe<PhraseFilter>;
  sentences?: Maybe<SentenceFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  User?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
  words?: Maybe<WordFilter>;
};

export type EntityWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  unique_title_userId?: Maybe<Unique_Title_UserIdCompoundUniqueInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Irrverb = {
  __typename?: 'Irrverb';
  Entity?: Maybe<Entity>;
  form1EN: Scalars['String'];
  form2EN: Scalars['String'];
  form3EN: Scalars['String'];
  id: Scalars['Int'];
  ru: Scalars['String'];
};

export type IrrverbCreateInput = {
  Entity?: Maybe<EntityCreateOneWithoutIrrverbInput>;
  form1EN: Scalars['String'];
  form2EN: Scalars['String'];
  form3EN: Scalars['String'];
  ru: Scalars['String'];
};

export type IrrverbCreateOneWithoutEntityInput = {
  connect?: Maybe<IrrverbWhereUniqueInput>;
  create?: Maybe<IrrverbCreateWithoutEntityInput>;
};

export type IrrverbCreateWithoutEntityInput = {
  form1EN: Scalars['String'];
  form2EN: Scalars['String'];
  form3EN: Scalars['String'];
  ru: Scalars['String'];
};

export type IrrverbOrderByInput = {
  form1EN?: Maybe<OrderByArg>;
  form2EN?: Maybe<OrderByArg>;
  form3EN?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  ru?: Maybe<OrderByArg>;
};

export type IrrverbUpdateInput = {
  Entity?: Maybe<EntityUpdateOneWithoutIrrverbInput>;
  form1EN?: Maybe<Scalars['String']>;
  form2EN?: Maybe<Scalars['String']>;
  form3EN?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
};

export type IrrverbUpdateManyMutationInput = {
  form1EN?: Maybe<Scalars['String']>;
  form2EN?: Maybe<Scalars['String']>;
  form3EN?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
};

export type IrrverbUpdateOneWithoutEntityInput = {
  connect?: Maybe<IrrverbWhereUniqueInput>;
  create?: Maybe<IrrverbCreateWithoutEntityInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<IrrverbUpdateWithoutEntityDataInput>;
  upsert?: Maybe<IrrverbUpsertWithoutEntityInput>;
};

export type IrrverbUpdateWithoutEntityDataInput = {
  form1EN?: Maybe<Scalars['String']>;
  form2EN?: Maybe<Scalars['String']>;
  form3EN?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
};

export type IrrverbUpsertWithoutEntityInput = {
  create: IrrverbCreateWithoutEntityInput;
  update: IrrverbUpdateWithoutEntityDataInput;
};

export type IrrverbWhereInput = {
  AND?: Maybe<Array<IrrverbWhereInput>>;
  Entity?: Maybe<EntityWhereInput>;
  form1EN?: Maybe<StringFilter>;
  form2EN?: Maybe<StringFilter>;
  form3EN?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<IrrverbWhereInput>>;
  OR?: Maybe<Array<IrrverbWhereInput>>;
  ru?: Maybe<StringFilter>;
};

export type IrrverbWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MobileApp = {
  __typename?: 'MobileApp';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  status: StatusMobile;
  url: Scalars['String'];
  version: Scalars['String'];
};

export type MobileAppCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<StatusMobile>;
  url: Scalars['String'];
  version: Scalars['String'];
};

export type MobileAppOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  url?: Maybe<OrderByArg>;
  version?: Maybe<OrderByArg>;
};

export type MobileAppUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusMobile>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type MobileAppUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusMobile>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type MobileAppWhereInput = {
  AND?: Maybe<Array<MobileAppWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<MobileAppWhereInput>>;
  OR?: Maybe<Array<MobileAppWhereInput>>;
  status?: Maybe<StatusMobileFilter>;
  url?: Maybe<StringFilter>;
  version?: Maybe<StringFilter>;
};

export type MobileAppWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEntity: Entity;
  createFullEntity: Scalars['Float'];
  createIrrverb: Irrverb;
  createMobileApp: MobileApp;
  createOrUpdateTranslate: TranslateReturn;
  createOrUpdateWordWithTranslate: Word;
  createPartOfSpeechDesc: PartOfSpeechDesc;
  createPhrase: Phrase;
  createSentence: Sentence;
  deleteEntity?: Maybe<Entity>;
  deleteIrrverb?: Maybe<Irrverb>;
  deleteManyEntity: BatchPayload;
  deleteManyIrrverb: BatchPayload;
  deleteManyMobileApp: BatchPayload;
  deleteManyPartOfSpeechDesc: BatchPayload;
  deleteManyPhrase: BatchPayload;
  deleteManySentence: BatchPayload;
  deleteManyTranslate: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteManyWord: BatchPayload;
  deleteMobileApp?: Maybe<MobileApp>;
  deletePartOfSpeechDesc?: Maybe<PartOfSpeechDesc>;
  deletePhrase?: Maybe<Phrase>;
  deleteSentence?: Maybe<Sentence>;
  deleteTranslate?: Maybe<Translate>;
  deleteUser?: Maybe<User>;
  deleteWord?: Maybe<Word>;
  login?: Maybe<UserReturn>;
  refreshUser: User;
  signup?: Maybe<UserReturn>;
  updateEntity?: Maybe<Entity>;
  updateIrrverb?: Maybe<Irrverb>;
  updateManyEntity: BatchPayload;
  updateManyIrrverb: BatchPayload;
  updateManyMobileApp: BatchPayload;
  updateManyPartOfSpeechDesc: BatchPayload;
  updateManyPhrase: BatchPayload;
  updateManySentence: BatchPayload;
  updateManyTranslate: BatchPayload;
  updateManyUser: BatchPayload;
  updateManyWord: BatchPayload;
  updateMobileApp?: Maybe<MobileApp>;
  updatePartOfSpeechDesc?: Maybe<PartOfSpeechDesc>;
  updatePhrase?: Maybe<Phrase>;
  updateSentence?: Maybe<Sentence>;
  updateTranslate?: Maybe<Translate>;
  updateUser?: Maybe<User>;
  updateWord?: Maybe<Word>;
  upsertEntity: Entity;
  upsertIrrverb: Irrverb;
  upsertMobileApp: MobileApp;
  upsertPartOfSpeechDesc: PartOfSpeechDesc;
  upsertPhrase: Phrase;
  upsertSentence: Sentence;
  upsertTranslate: Translate;
  upsertUser: User;
  upsertWord: Word;
};


export type MutationCreateEntityArgs = {
  data: EntityCreateInput;
};


export type MutationCreateFullEntityArgs = {
  data: TranslateWordWithParseInput;
};


export type MutationCreateIrrverbArgs = {
  data: IrrverbCreateInput;
};


export type MutationCreateMobileAppArgs = {
  data: MobileAppCreateInput;
};


export type MutationCreateOrUpdateTranslateArgs = {
  data: CreateTranslateInput;
};


export type MutationCreateOrUpdateWordWithTranslateArgs = {
  en: Scalars['String'];
  entityId: Scalars['Float'];
  translate: Array<Scalars['String']>;
  type: PartOfSpeech;
};


export type MutationCreatePartOfSpeechDescArgs = {
  data: PartOfSpeechDescCreateInput;
};


export type MutationCreatePhraseArgs = {
  data: PhraseCreateInput;
};


export type MutationCreateSentenceArgs = {
  data: SentenceCreateInput;
};


export type MutationDeleteEntityArgs = {
  where: EntityWhereUniqueInput;
};


export type MutationDeleteIrrverbArgs = {
  where: IrrverbWhereUniqueInput;
};


export type MutationDeleteManyEntityArgs = {
  where?: Maybe<EntityWhereInput>;
};


export type MutationDeleteManyIrrverbArgs = {
  where?: Maybe<IrrverbWhereInput>;
};


export type MutationDeleteManyMobileAppArgs = {
  where?: Maybe<MobileAppWhereInput>;
};


export type MutationDeleteManyPartOfSpeechDescArgs = {
  where?: Maybe<PartOfSpeechDescWhereInput>;
};


export type MutationDeleteManyPhraseArgs = {
  where?: Maybe<PhraseWhereInput>;
};


export type MutationDeleteManySentenceArgs = {
  where?: Maybe<SentenceWhereInput>;
};


export type MutationDeleteManyTranslateArgs = {
  where?: Maybe<TranslateWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyWordArgs = {
  where?: Maybe<WordWhereInput>;
};


export type MutationDeleteMobileAppArgs = {
  where: MobileAppWhereUniqueInput;
};


export type MutationDeletePartOfSpeechDescArgs = {
  where: PartOfSpeechDescWhereUniqueInput;
};


export type MutationDeletePhraseArgs = {
  where: PhraseWhereUniqueInput;
};


export type MutationDeleteSentenceArgs = {
  where: SentenceWhereUniqueInput;
};


export type MutationDeleteTranslateArgs = {
  where: TranslateWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteWordArgs = {
  where: WordWhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationSignupArgs = {
  data: UserSignUpInput;
};


export type MutationUpdateEntityArgs = {
  data: EntityUpdateInput;
  where: EntityWhereUniqueInput;
};


export type MutationUpdateIrrverbArgs = {
  data: IrrverbUpdateInput;
  where: IrrverbWhereUniqueInput;
};


export type MutationUpdateManyEntityArgs = {
  data: EntityUpdateManyMutationInput;
  where?: Maybe<EntityWhereInput>;
};


export type MutationUpdateManyIrrverbArgs = {
  data: IrrverbUpdateManyMutationInput;
  where?: Maybe<IrrverbWhereInput>;
};


export type MutationUpdateManyMobileAppArgs = {
  data: MobileAppUpdateManyMutationInput;
  where?: Maybe<MobileAppWhereInput>;
};


export type MutationUpdateManyPartOfSpeechDescArgs = {
  data: PartOfSpeechDescUpdateManyMutationInput;
  where?: Maybe<PartOfSpeechDescWhereInput>;
};


export type MutationUpdateManyPhraseArgs = {
  data: PhraseUpdateManyMutationInput;
  where?: Maybe<PhraseWhereInput>;
};


export type MutationUpdateManySentenceArgs = {
  data: SentenceUpdateManyMutationInput;
  where?: Maybe<SentenceWhereInput>;
};


export type MutationUpdateManyTranslateArgs = {
  data: TranslateUpdateManyMutationInput;
  where?: Maybe<TranslateWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyWordArgs = {
  data: WordUpdateManyMutationInput;
  where?: Maybe<WordWhereInput>;
};


export type MutationUpdateMobileAppArgs = {
  data: MobileAppUpdateInput;
  where: MobileAppWhereUniqueInput;
};


export type MutationUpdatePartOfSpeechDescArgs = {
  data: PartOfSpeechDescUpdateInput;
  where: PartOfSpeechDescWhereUniqueInput;
};


export type MutationUpdatePhraseArgs = {
  data: PhraseUpdateInput;
  where: PhraseWhereUniqueInput;
};


export type MutationUpdateSentenceArgs = {
  data: SentenceUpdateInput;
  where: SentenceWhereUniqueInput;
};


export type MutationUpdateTranslateArgs = {
  data: TranslateUpdateInput;
  where: TranslateWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateWordArgs = {
  data: WordUpdateInput;
  where: WordWhereUniqueInput;
};


export type MutationUpsertEntityArgs = {
  create: EntityCreateInput;
  update: EntityUpdateInput;
  where: EntityWhereUniqueInput;
};


export type MutationUpsertIrrverbArgs = {
  create: IrrverbCreateInput;
  update: IrrverbUpdateInput;
  where: IrrverbWhereUniqueInput;
};


export type MutationUpsertMobileAppArgs = {
  create: MobileAppCreateInput;
  update: MobileAppUpdateInput;
  where: MobileAppWhereUniqueInput;
};


export type MutationUpsertPartOfSpeechDescArgs = {
  create: PartOfSpeechDescCreateInput;
  update: PartOfSpeechDescUpdateInput;
  where: PartOfSpeechDescWhereUniqueInput;
};


export type MutationUpsertPhraseArgs = {
  create: PhraseCreateInput;
  update: PhraseUpdateInput;
  where: PhraseWhereUniqueInput;
};


export type MutationUpsertSentenceArgs = {
  create: SentenceCreateInput;
  update: SentenceUpdateInput;
  where: SentenceWhereUniqueInput;
};


export type MutationUpsertTranslateArgs = {
  create: TranslateCreateInput;
  update: TranslateUpdateInput;
  where: TranslateWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertWordArgs = {
  create: WordCreateInput;
  update: WordUpdateInput;
  where: WordWhereUniqueInput;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type OtherWord = {
  __typename?: 'OtherWord';
  en: Scalars['String'];
  translate: Array<Translation>;
  type: PartOfSpeech;
};

export type OtherWordInput = {
  en: Scalars['String'];
  translate: Array<TranslationInput>;
  type: PartOfSpeech;
};

export enum PartOfSpeech {
  Adj = 'ADJ',
  Adv = 'ADV',
  Conj = 'CONJ',
  Det = 'DET',
  Modal = 'MODAL',
  Noun = 'NOUN',
  Other = 'OTHER',
  Prep = 'PREP',
  Pron = 'PRON',
  Verb = 'VERB'
}

export type PartOfSpeechDesc = {
  __typename?: 'PartOfSpeechDesc';
  en: Scalars['String'];
  id: Scalars['Int'];
  ru: Scalars['String'];
  type: PartOfSpeech;
  ua: Scalars['String'];
};

export type PartOfSpeechDescCreateInput = {
  en: Scalars['String'];
  ru: Scalars['String'];
  type: PartOfSpeech;
  ua: Scalars['String'];
};

export type PartOfSpeechDescOrderByInput = {
  en?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  ru?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  ua?: Maybe<OrderByArg>;
};

export type PartOfSpeechDescUpdateInput = {
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  type?: Maybe<PartOfSpeech>;
  ua?: Maybe<Scalars['String']>;
};

export type PartOfSpeechDescUpdateManyMutationInput = {
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  type?: Maybe<PartOfSpeech>;
  ua?: Maybe<Scalars['String']>;
};

export type PartOfSpeechDescWhereInput = {
  AND?: Maybe<Array<PartOfSpeechDescWhereInput>>;
  en?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<PartOfSpeechDescWhereInput>>;
  OR?: Maybe<Array<PartOfSpeechDescWhereInput>>;
  ru?: Maybe<StringFilter>;
  type?: Maybe<PartOfSpeechFilter>;
  ua?: Maybe<StringFilter>;
};

export type PartOfSpeechDescWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type PartOfSpeechFilter = {
  equals?: Maybe<PartOfSpeech>;
  in?: Maybe<Array<PartOfSpeech>>;
  not?: Maybe<PartOfSpeech>;
  notIn?: Maybe<Array<PartOfSpeech>>;
};

export type Phrase = {
  __typename?: 'Phrase';
  disconnectEntities?: Maybe<Array<Entity>>;
  entities?: Maybe<Array<Entity>>;
  id: Scalars['Int'];
  phrase: Scalars['String'];
  ru: Scalars['String'];
};


export type PhraseDisconnectEntitiesArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};


export type PhraseEntitiesArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};

export type PhraseCreateInput = {
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectPhrasesInput>;
  entities?: Maybe<EntityCreateManyWithoutPhrasesInput>;
  phrase: Scalars['String'];
  ru: Scalars['String'];
};

export type PhraseCreateManyWithoutDisconnectEntitiesInput = {
  connect?: Maybe<Array<PhraseWhereUniqueInput>>;
  create?: Maybe<Array<PhraseCreateWithoutDisconnectEntitiesInput>>;
};

export type PhraseCreateManyWithoutEntitiesInput = {
  connect?: Maybe<Array<PhraseWhereUniqueInput>>;
  create?: Maybe<Array<PhraseCreateWithoutEntitiesInput>>;
};

export type PhraseCreateWithoutDisconnectEntitiesInput = {
  entities?: Maybe<EntityCreateManyWithoutPhrasesInput>;
  phrase: Scalars['String'];
  ru: Scalars['String'];
};

export type PhraseCreateWithoutEntitiesInput = {
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectPhrasesInput>;
  phrase: Scalars['String'];
  ru: Scalars['String'];
};

export type PhraseCustom = {
  __typename?: 'PhraseCustom';
  phrase: Scalars['String'];
  ru: Scalars['String'];
};

export type PhraseFilter = {
  every?: Maybe<PhraseWhereInput>;
  none?: Maybe<PhraseWhereInput>;
  some?: Maybe<PhraseWhereInput>;
};

export type PhraseOrderByInput = {
  id?: Maybe<OrderByArg>;
  phrase?: Maybe<OrderByArg>;
  ru?: Maybe<OrderByArg>;
};

export type PhraseScalarWhereInput = {
  AND?: Maybe<Array<PhraseScalarWhereInput>>;
  disconnectEntities?: Maybe<EntityFilter>;
  entities?: Maybe<EntityFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<PhraseScalarWhereInput>>;
  OR?: Maybe<Array<PhraseScalarWhereInput>>;
  phrase?: Maybe<StringFilter>;
  ru?: Maybe<StringFilter>;
};

export type PhraseUpdateInput = {
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectPhrasesInput>;
  entities?: Maybe<EntityUpdateManyWithoutPhrasesInput>;
  id?: Maybe<Scalars['Int']>;
  phrase?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
};

export type PhraseUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  phrase?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
};

export type PhraseUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  phrase?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
};

export type PhraseUpdateManyWithoutDisconnectEntitiesInput = {
  connect?: Maybe<Array<PhraseWhereUniqueInput>>;
  create?: Maybe<Array<PhraseCreateWithoutDisconnectEntitiesInput>>;
  delete?: Maybe<Array<PhraseWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PhraseScalarWhereInput>>;
  disconnect?: Maybe<Array<PhraseWhereUniqueInput>>;
  set?: Maybe<Array<PhraseWhereUniqueInput>>;
  update?: Maybe<Array<PhraseUpdateWithWhereUniqueWithoutDisconnectEntitiesInput>>;
  updateMany?: Maybe<Array<PhraseUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PhraseUpsertWithWhereUniqueWithoutDisconnectEntitiesInput>>;
};

export type PhraseUpdateManyWithoutEntitiesInput = {
  connect?: Maybe<Array<PhraseWhereUniqueInput>>;
  create?: Maybe<Array<PhraseCreateWithoutEntitiesInput>>;
  delete?: Maybe<Array<PhraseWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PhraseScalarWhereInput>>;
  disconnect?: Maybe<Array<PhraseWhereUniqueInput>>;
  set?: Maybe<Array<PhraseWhereUniqueInput>>;
  update?: Maybe<Array<PhraseUpdateWithWhereUniqueWithoutEntitiesInput>>;
  updateMany?: Maybe<Array<PhraseUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PhraseUpsertWithWhereUniqueWithoutEntitiesInput>>;
};

export type PhraseUpdateManyWithWhereNestedInput = {
  data: PhraseUpdateManyDataInput;
  where: PhraseScalarWhereInput;
};

export type PhraseUpdateWithoutDisconnectEntitiesDataInput = {
  entities?: Maybe<EntityUpdateManyWithoutPhrasesInput>;
  id?: Maybe<Scalars['Int']>;
  phrase?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
};

export type PhraseUpdateWithoutEntitiesDataInput = {
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectPhrasesInput>;
  id?: Maybe<Scalars['Int']>;
  phrase?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
};

export type PhraseUpdateWithWhereUniqueWithoutDisconnectEntitiesInput = {
  data: PhraseUpdateWithoutDisconnectEntitiesDataInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpdateWithWhereUniqueWithoutEntitiesInput = {
  data: PhraseUpdateWithoutEntitiesDataInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpsertWithWhereUniqueWithoutDisconnectEntitiesInput = {
  create: PhraseCreateWithoutDisconnectEntitiesInput;
  update: PhraseUpdateWithoutDisconnectEntitiesDataInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpsertWithWhereUniqueWithoutEntitiesInput = {
  create: PhraseCreateWithoutEntitiesInput;
  update: PhraseUpdateWithoutEntitiesDataInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseWhereInput = {
  AND?: Maybe<Array<PhraseWhereInput>>;
  disconnectEntities?: Maybe<EntityFilter>;
  entities?: Maybe<EntityFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<PhraseWhereInput>>;
  OR?: Maybe<Array<PhraseWhereInput>>;
  phrase?: Maybe<StringFilter>;
  ru?: Maybe<StringFilter>;
};

export type PhraseWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  phrase?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateEntity: AggregateEntity;
  aggregateIrrverb: AggregateIrrverb;
  aggregateMobileApp: AggregateMobileApp;
  aggregatePartOfSpeechDesc: AggregatePartOfSpeechDesc;
  aggregatePhrase: AggregatePhrase;
  aggregateSentence: AggregateSentence;
  aggregateTranslate: AggregateTranslate;
  aggregateUser: AggregateUser;
  aggregateWord: AggregateWord;
  entities: Array<Entity>;
  entity?: Maybe<Entity>;
  getEntitiesByWord: Array<Entity>;
  irrverb?: Maybe<Irrverb>;
  irrverbs: Array<Irrverb>;
  mobileApp?: Maybe<MobileApp>;
  mobileApps: Array<MobileApp>;
  partOfSpeechDesc?: Maybe<PartOfSpeechDesc>;
  partOfSpeechDescs: Array<PartOfSpeechDesc>;
  phrase?: Maybe<Phrase>;
  phrases: Array<Phrase>;
  sentence?: Maybe<Sentence>;
  sentences: Array<Sentence>;
  translate?: Maybe<Translate>;
  translates: Array<Translate>;
  translateWord: TranslateWordReturn;
  translateWordWithParse: TranslateWordWithParseReturn;
  user?: Maybe<User>;
  users: Array<User>;
  word?: Maybe<Word>;
  words: Array<Word>;
};


export type QueryEntitiesArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};


export type QueryEntityArgs = {
  where: EntityWhereUniqueInput;
};


export type QueryGetEntitiesByWordArgs = {
  word: Scalars['String'];
};


export type QueryIrrverbArgs = {
  where: IrrverbWhereUniqueInput;
};


export type QueryIrrverbsArgs = {
  after?: Maybe<IrrverbWhereUniqueInput>;
  before?: Maybe<IrrverbWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IrrverbOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<IrrverbWhereInput>;
};


export type QueryMobileAppArgs = {
  where: MobileAppWhereUniqueInput;
};


export type QueryMobileAppsArgs = {
  after?: Maybe<MobileAppWhereUniqueInput>;
  before?: Maybe<MobileAppWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MobileAppOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MobileAppWhereInput>;
};


export type QueryPartOfSpeechDescArgs = {
  where: PartOfSpeechDescWhereUniqueInput;
};


export type QueryPartOfSpeechDescsArgs = {
  after?: Maybe<PartOfSpeechDescWhereUniqueInput>;
  before?: Maybe<PartOfSpeechDescWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartOfSpeechDescOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartOfSpeechDescWhereInput>;
};


export type QueryPhraseArgs = {
  where: PhraseWhereUniqueInput;
};


export type QueryPhrasesArgs = {
  after?: Maybe<PhraseWhereUniqueInput>;
  before?: Maybe<PhraseWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PhraseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PhraseWhereInput>;
};


export type QuerySentenceArgs = {
  where: SentenceWhereUniqueInput;
};


export type QuerySentencesArgs = {
  after?: Maybe<SentenceWhereUniqueInput>;
  before?: Maybe<SentenceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SentenceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SentenceWhereInput>;
};


export type QueryTranslateArgs = {
  where: TranslateWhereUniqueInput;
};


export type QueryTranslatesArgs = {
  after?: Maybe<TranslateWhereUniqueInput>;
  before?: Maybe<TranslateWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TranslateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TranslateWhereInput>;
};


export type QueryTranslateWordArgs = {
  word: Scalars['String'];
};


export type QueryTranslateWordWithParseArgs = {
  word: Scalars['String'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryWordArgs = {
  where: WordWhereUniqueInput;
};


export type QueryWordsArgs = {
  after?: Maybe<WordWhereUniqueInput>;
  before?: Maybe<WordWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WordOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WordWhereInput>;
};

export enum Role {
  Admin = 'ADMIN',
  Standard = 'STANDARD'
}

export type RoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<Role>;
  notIn?: Maybe<Array<Role>>;
};

export type Sentence = {
  __typename?: 'Sentence';
  disconnectEntities?: Maybe<Array<Entity>>;
  entities?: Maybe<Array<Entity>>;
  id: Scalars['Int'];
  ru: Scalars['String'];
  sentence: Scalars['String'];
};


export type SentenceDisconnectEntitiesArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};


export type SentenceEntitiesArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};

export type SentenceCreateInput = {
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectSentencesInput>;
  entities?: Maybe<EntityCreateManyWithoutSentencesInput>;
  ru: Scalars['String'];
  sentence: Scalars['String'];
};

export type SentenceCreateManyWithoutDisconnectEntitiesInput = {
  connect?: Maybe<Array<SentenceWhereUniqueInput>>;
  create?: Maybe<Array<SentenceCreateWithoutDisconnectEntitiesInput>>;
};

export type SentenceCreateManyWithoutEntitiesInput = {
  connect?: Maybe<Array<SentenceWhereUniqueInput>>;
  create?: Maybe<Array<SentenceCreateWithoutEntitiesInput>>;
};

export type SentenceCreateWithoutDisconnectEntitiesInput = {
  entities?: Maybe<EntityCreateManyWithoutSentencesInput>;
  ru: Scalars['String'];
  sentence: Scalars['String'];
};

export type SentenceCreateWithoutEntitiesInput = {
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectSentencesInput>;
  ru: Scalars['String'];
  sentence: Scalars['String'];
};

export type SentenceCustom = {
  __typename?: 'SentenceCustom';
  ru: Scalars['String'];
  sentence: Scalars['String'];
};

export type SentenceFilter = {
  every?: Maybe<SentenceWhereInput>;
  none?: Maybe<SentenceWhereInput>;
  some?: Maybe<SentenceWhereInput>;
};

export type SentenceOrderByInput = {
  id?: Maybe<OrderByArg>;
  ru?: Maybe<OrderByArg>;
  sentence?: Maybe<OrderByArg>;
};

export type SentenceScalarWhereInput = {
  AND?: Maybe<Array<SentenceScalarWhereInput>>;
  disconnectEntities?: Maybe<EntityFilter>;
  entities?: Maybe<EntityFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<SentenceScalarWhereInput>>;
  OR?: Maybe<Array<SentenceScalarWhereInput>>;
  ru?: Maybe<StringFilter>;
  sentence?: Maybe<StringFilter>;
};

export type SentenceUpdateInput = {
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectSentencesInput>;
  entities?: Maybe<EntityUpdateManyWithoutSentencesInput>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  sentence?: Maybe<Scalars['String']>;
};

export type SentenceUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  sentence?: Maybe<Scalars['String']>;
};

export type SentenceUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  sentence?: Maybe<Scalars['String']>;
};

export type SentenceUpdateManyWithoutDisconnectEntitiesInput = {
  connect?: Maybe<Array<SentenceWhereUniqueInput>>;
  create?: Maybe<Array<SentenceCreateWithoutDisconnectEntitiesInput>>;
  delete?: Maybe<Array<SentenceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SentenceScalarWhereInput>>;
  disconnect?: Maybe<Array<SentenceWhereUniqueInput>>;
  set?: Maybe<Array<SentenceWhereUniqueInput>>;
  update?: Maybe<Array<SentenceUpdateWithWhereUniqueWithoutDisconnectEntitiesInput>>;
  updateMany?: Maybe<Array<SentenceUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<SentenceUpsertWithWhereUniqueWithoutDisconnectEntitiesInput>>;
};

export type SentenceUpdateManyWithoutEntitiesInput = {
  connect?: Maybe<Array<SentenceWhereUniqueInput>>;
  create?: Maybe<Array<SentenceCreateWithoutEntitiesInput>>;
  delete?: Maybe<Array<SentenceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SentenceScalarWhereInput>>;
  disconnect?: Maybe<Array<SentenceWhereUniqueInput>>;
  set?: Maybe<Array<SentenceWhereUniqueInput>>;
  update?: Maybe<Array<SentenceUpdateWithWhereUniqueWithoutEntitiesInput>>;
  updateMany?: Maybe<Array<SentenceUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<SentenceUpsertWithWhereUniqueWithoutEntitiesInput>>;
};

export type SentenceUpdateManyWithWhereNestedInput = {
  data: SentenceUpdateManyDataInput;
  where: SentenceScalarWhereInput;
};

export type SentenceUpdateWithoutDisconnectEntitiesDataInput = {
  entities?: Maybe<EntityUpdateManyWithoutSentencesInput>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  sentence?: Maybe<Scalars['String']>;
};

export type SentenceUpdateWithoutEntitiesDataInput = {
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectSentencesInput>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  sentence?: Maybe<Scalars['String']>;
};

export type SentenceUpdateWithWhereUniqueWithoutDisconnectEntitiesInput = {
  data: SentenceUpdateWithoutDisconnectEntitiesDataInput;
  where: SentenceWhereUniqueInput;
};

export type SentenceUpdateWithWhereUniqueWithoutEntitiesInput = {
  data: SentenceUpdateWithoutEntitiesDataInput;
  where: SentenceWhereUniqueInput;
};

export type SentenceUpsertWithWhereUniqueWithoutDisconnectEntitiesInput = {
  create: SentenceCreateWithoutDisconnectEntitiesInput;
  update: SentenceUpdateWithoutDisconnectEntitiesDataInput;
  where: SentenceWhereUniqueInput;
};

export type SentenceUpsertWithWhereUniqueWithoutEntitiesInput = {
  create: SentenceCreateWithoutEntitiesInput;
  update: SentenceUpdateWithoutEntitiesDataInput;
  where: SentenceWhereUniqueInput;
};

export type SentenceWhereInput = {
  AND?: Maybe<Array<SentenceWhereInput>>;
  disconnectEntities?: Maybe<EntityFilter>;
  entities?: Maybe<EntityFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<SentenceWhereInput>>;
  OR?: Maybe<Array<SentenceWhereInput>>;
  ru?: Maybe<StringFilter>;
  sentence?: Maybe<StringFilter>;
};

export type SentenceWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  sentence?: Maybe<Scalars['String']>;
};

export enum StatusMobile {
  Deprecated = 'DEPRECATED',
  Work = 'WORK'
}

export type StatusMobileFilter = {
  equals?: Maybe<StatusMobile>;
  in?: Maybe<Array<StatusMobile>>;
  not?: Maybe<StatusMobile>;
  notIn?: Maybe<Array<StatusMobile>>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Translate = {
  __typename?: 'Translate';
  createdAt: Scalars['DateTime'];
  disconnectWords?: Maybe<Array<Word>>;
  id: Scalars['Int'];
  ru: Scalars['String'];
  type: PartOfSpeech;
  updatedAt: Scalars['DateTime'];
  words?: Maybe<Array<Word>>;
};


export type TranslateDisconnectWordsArgs = {
  after?: Maybe<WordWhereUniqueInput>;
  before?: Maybe<WordWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WordOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WordWhereInput>;
};


export type TranslateWordsArgs = {
  after?: Maybe<WordWhereUniqueInput>;
  before?: Maybe<WordWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WordOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WordWhereInput>;
};

export type TranslateCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectTranslateInput>;
  ru: Scalars['String'];
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  words?: Maybe<WordCreateManyWithoutTranslateInput>;
};

export type TranslateCreateManyWithoutDisconnectWordsInput = {
  connect?: Maybe<Array<TranslateWhereUniqueInput>>;
  create?: Maybe<Array<TranslateCreateWithoutDisconnectWordsInput>>;
};

export type TranslateCreateManyWithoutWordsInput = {
  connect?: Maybe<Array<TranslateWhereUniqueInput>>;
  create?: Maybe<Array<TranslateCreateWithoutWordsInput>>;
};

export type TranslateCreateWithoutDisconnectWordsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  ru: Scalars['String'];
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  words?: Maybe<WordCreateManyWithoutTranslateInput>;
};

export type TranslateCreateWithoutWordsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectWords?: Maybe<WordCreateManyWithoutDisconnectTranslateInput>;
  ru: Scalars['String'];
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TranslateFilter = {
  every?: Maybe<TranslateWhereInput>;
  none?: Maybe<TranslateWhereInput>;
  some?: Maybe<TranslateWhereInput>;
};

export type TranslateOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  ru?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type TranslateReturn = {
  __typename?: 'TranslateReturn';
  id: Scalars['Float'];
  ru: Scalars['String'];
  type: PartOfSpeech;
};

export type TranslateScalarWhereInput = {
  AND?: Maybe<Array<TranslateScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  disconnectWords?: Maybe<WordFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<TranslateScalarWhereInput>>;
  OR?: Maybe<Array<TranslateScalarWhereInput>>;
  ru?: Maybe<StringFilter>;
  type?: Maybe<PartOfSpeechFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  words?: Maybe<WordFilter>;
};

export type TranslateUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectTranslateInput>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  words?: Maybe<WordUpdateManyWithoutTranslateInput>;
};

export type TranslateUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TranslateUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TranslateUpdateManyWithoutDisconnectWordsInput = {
  connect?: Maybe<Array<TranslateWhereUniqueInput>>;
  create?: Maybe<Array<TranslateCreateWithoutDisconnectWordsInput>>;
  delete?: Maybe<Array<TranslateWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TranslateScalarWhereInput>>;
  disconnect?: Maybe<Array<TranslateWhereUniqueInput>>;
  set?: Maybe<Array<TranslateWhereUniqueInput>>;
  update?: Maybe<Array<TranslateUpdateWithWhereUniqueWithoutDisconnectWordsInput>>;
  updateMany?: Maybe<Array<TranslateUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TranslateUpsertWithWhereUniqueWithoutDisconnectWordsInput>>;
};

export type TranslateUpdateManyWithoutWordsInput = {
  connect?: Maybe<Array<TranslateWhereUniqueInput>>;
  create?: Maybe<Array<TranslateCreateWithoutWordsInput>>;
  delete?: Maybe<Array<TranslateWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TranslateScalarWhereInput>>;
  disconnect?: Maybe<Array<TranslateWhereUniqueInput>>;
  set?: Maybe<Array<TranslateWhereUniqueInput>>;
  update?: Maybe<Array<TranslateUpdateWithWhereUniqueWithoutWordsInput>>;
  updateMany?: Maybe<Array<TranslateUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TranslateUpsertWithWhereUniqueWithoutWordsInput>>;
};

export type TranslateUpdateManyWithWhereNestedInput = {
  data: TranslateUpdateManyDataInput;
  where: TranslateScalarWhereInput;
};

export type TranslateUpdateWithoutDisconnectWordsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  words?: Maybe<WordUpdateManyWithoutTranslateInput>;
};

export type TranslateUpdateWithoutWordsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectWords?: Maybe<WordUpdateManyWithoutDisconnectTranslateInput>;
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TranslateUpdateWithWhereUniqueWithoutDisconnectWordsInput = {
  data: TranslateUpdateWithoutDisconnectWordsDataInput;
  where: TranslateWhereUniqueInput;
};

export type TranslateUpdateWithWhereUniqueWithoutWordsInput = {
  data: TranslateUpdateWithoutWordsDataInput;
  where: TranslateWhereUniqueInput;
};

export type TranslateUpsertWithWhereUniqueWithoutDisconnectWordsInput = {
  create: TranslateCreateWithoutDisconnectWordsInput;
  update: TranslateUpdateWithoutDisconnectWordsDataInput;
  where: TranslateWhereUniqueInput;
};

export type TranslateUpsertWithWhereUniqueWithoutWordsInput = {
  create: TranslateCreateWithoutWordsInput;
  update: TranslateUpdateWithoutWordsDataInput;
  where: TranslateWhereUniqueInput;
};

export type TranslateWhereInput = {
  AND?: Maybe<Array<TranslateWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  disconnectWords?: Maybe<WordFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<TranslateWhereInput>>;
  OR?: Maybe<Array<TranslateWhereInput>>;
  ru?: Maybe<StringFilter>;
  type?: Maybe<PartOfSpeechFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  words?: Maybe<WordFilter>;
};

export type TranslateWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  ru?: Maybe<Scalars['String']>;
};

export type TranslateWordReturn = {
  __typename?: 'TranslateWordReturn';
  translate: Array<Translation>;
  type: PartOfSpeech;
};

export type TranslateWordWithParseInput = {
  irrverbId?: Maybe<Scalars['Float']>;
  phrases: Array<PhraseCreateInput>;
  sentences: Array<SentenceCreateInput>;
  title: Scalars['String'];
  words: Array<OtherWordInput>;
};

export type TranslateWordWithParseReturn = {
  __typename?: 'TranslateWordWithParseReturn';
  backTranslations: Array<Scalars['String']>;
  irrverb?: Maybe<Irrverb>;
  phrases: Array<PhraseCustom>;
  sentences: Array<SentenceCustom>;
  title: Scalars['String'];
  words: Array<OtherWord>;
};

export type Translation = {
  __typename?: 'Translation';
  ru: Scalars['String'];
  type: PartOfSpeech;
};

export type TranslationInput = {
  ru: Scalars['String'];
  type: PartOfSpeech;
};

export type Unique_Title_UserIdCompoundUniqueInput = {
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  entities?: Maybe<Array<Entity>>;
  id: Scalars['Int'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  role: Role;
  Word?: Maybe<Array<Word>>;
};


export type UserEntitiesArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};


export type UserWordArgs = {
  after?: Maybe<WordWhereUniqueInput>;
  before?: Maybe<WordWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WordOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WordWhereInput>;
};

export type UserCreateInput = {
  email?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityCreateManyWithoutUserInput>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  Word?: Maybe<WordCreateManyWithoutUserInput>;
};

export type UserCreateOneWithoutEntitiesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutEntitiesInput>;
};

export type UserCreateOneWithoutWordInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutWordInput>;
};

export type UserCreateWithoutEntitiesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  Word?: Maybe<WordCreateManyWithoutUserInput>;
};

export type UserCreateWithoutWordInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityCreateManyWithoutUserInput>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserOrderByInput = {
  email?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  lastName?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  role?: Maybe<OrderByArg>;
};

export type UserReturn = {
  __typename?: 'UserReturn';
  token: Scalars['String'];
  user: User;
};

export type UserSignUpInput = {
  email: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityUpdateManyWithoutUserInput>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  Word?: Maybe<WordUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserUpdateOneRequiredWithoutEntitiesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutEntitiesInput>;
  update?: Maybe<UserUpdateWithoutEntitiesDataInput>;
  upsert?: Maybe<UserUpsertWithoutEntitiesInput>;
};

export type UserUpdateOneRequiredWithoutWordInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutWordInput>;
  update?: Maybe<UserUpdateWithoutWordDataInput>;
  upsert?: Maybe<UserUpsertWithoutWordInput>;
};

export type UserUpdateWithoutEntitiesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  Word?: Maybe<WordUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutWordDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityUpdateManyWithoutUserInput>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserUpsertWithoutEntitiesInput = {
  create: UserCreateWithoutEntitiesInput;
  update: UserUpdateWithoutEntitiesDataInput;
};

export type UserUpsertWithoutWordInput = {
  create: UserCreateWithoutWordInput;
  update: UserUpdateWithoutWordDataInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  email?: Maybe<StringFilter>;
  entities?: Maybe<EntityFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  role?: Maybe<RoleFilter>;
  Word?: Maybe<WordFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type Word = {
  __typename?: 'Word';
  createdAt: Scalars['DateTime'];
  disconnectEntities?: Maybe<Array<Entity>>;
  disconnectTranslate?: Maybe<Array<Translate>>;
  en: Scalars['String'];
  entities?: Maybe<Array<Entity>>;
  id: Scalars['Int'];
  translate?: Maybe<Array<Translate>>;
  type: PartOfSpeech;
  updatedAt: Scalars['DateTime'];
  User: User;
  userId: Scalars['Int'];
};


export type WordDisconnectEntitiesArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};


export type WordDisconnectTranslateArgs = {
  after?: Maybe<TranslateWhereUniqueInput>;
  before?: Maybe<TranslateWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TranslateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TranslateWhereInput>;
};


export type WordEntitiesArgs = {
  after?: Maybe<EntityWhereUniqueInput>;
  before?: Maybe<EntityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};


export type WordTranslateArgs = {
  after?: Maybe<TranslateWhereUniqueInput>;
  before?: Maybe<TranslateWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TranslateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TranslateWhereInput>;
};

export type WordCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectWordsInput>;
  disconnectTranslate?: Maybe<TranslateCreateManyWithoutDisconnectWordsInput>;
  en: Scalars['String'];
  entities?: Maybe<EntityCreateManyWithoutWordsInput>;
  translate?: Maybe<TranslateCreateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutWordInput;
};

export type WordCreateManyWithoutDisconnectEntitiesInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutDisconnectEntitiesInput>>;
};

export type WordCreateManyWithoutDisconnectTranslateInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutDisconnectTranslateInput>>;
};

export type WordCreateManyWithoutEntitiesInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutEntitiesInput>>;
};

export type WordCreateManyWithoutTranslateInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutTranslateInput>>;
};

export type WordCreateManyWithoutUserInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutUserInput>>;
};

export type WordCreateWithoutDisconnectEntitiesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectTranslate?: Maybe<TranslateCreateManyWithoutDisconnectWordsInput>;
  en: Scalars['String'];
  entities?: Maybe<EntityCreateManyWithoutWordsInput>;
  translate?: Maybe<TranslateCreateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutWordInput;
};

export type WordCreateWithoutDisconnectTranslateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectWordsInput>;
  en: Scalars['String'];
  entities?: Maybe<EntityCreateManyWithoutWordsInput>;
  translate?: Maybe<TranslateCreateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutWordInput;
};

export type WordCreateWithoutEntitiesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectWordsInput>;
  disconnectTranslate?: Maybe<TranslateCreateManyWithoutDisconnectWordsInput>;
  en: Scalars['String'];
  translate?: Maybe<TranslateCreateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutWordInput;
};

export type WordCreateWithoutTranslateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectWordsInput>;
  disconnectTranslate?: Maybe<TranslateCreateManyWithoutDisconnectWordsInput>;
  en: Scalars['String'];
  entities?: Maybe<EntityCreateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutWordInput;
};

export type WordCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityCreateManyWithoutDisconnectWordsInput>;
  disconnectTranslate?: Maybe<TranslateCreateManyWithoutDisconnectWordsInput>;
  en: Scalars['String'];
  entities?: Maybe<EntityCreateManyWithoutWordsInput>;
  translate?: Maybe<TranslateCreateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WordFilter = {
  every?: Maybe<WordWhereInput>;
  none?: Maybe<WordWhereInput>;
  some?: Maybe<WordWhereInput>;
};

export type WordOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  en?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type WordScalarWhereInput = {
  AND?: Maybe<Array<WordScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  disconnectEntities?: Maybe<EntityFilter>;
  disconnectTranslate?: Maybe<TranslateFilter>;
  en?: Maybe<StringFilter>;
  entities?: Maybe<EntityFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<WordScalarWhereInput>>;
  OR?: Maybe<Array<WordScalarWhereInput>>;
  translate?: Maybe<TranslateFilter>;
  type?: Maybe<PartOfSpeechFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntFilter>;
};

export type WordUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectWordsInput>;
  disconnectTranslate?: Maybe<TranslateUpdateManyWithoutDisconnectWordsInput>;
  en?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityUpdateManyWithoutWordsInput>;
  id?: Maybe<Scalars['Int']>;
  translate?: Maybe<TranslateUpdateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutWordInput>;
};

export type WordUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WordUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WordUpdateManyWithoutDisconnectEntitiesInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutDisconnectEntitiesInput>>;
  delete?: Maybe<Array<WordWhereUniqueInput>>;
  deleteMany?: Maybe<Array<WordScalarWhereInput>>;
  disconnect?: Maybe<Array<WordWhereUniqueInput>>;
  set?: Maybe<Array<WordWhereUniqueInput>>;
  update?: Maybe<Array<WordUpdateWithWhereUniqueWithoutDisconnectEntitiesInput>>;
  updateMany?: Maybe<Array<WordUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<WordUpsertWithWhereUniqueWithoutDisconnectEntitiesInput>>;
};

export type WordUpdateManyWithoutDisconnectTranslateInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutDisconnectTranslateInput>>;
  delete?: Maybe<Array<WordWhereUniqueInput>>;
  deleteMany?: Maybe<Array<WordScalarWhereInput>>;
  disconnect?: Maybe<Array<WordWhereUniqueInput>>;
  set?: Maybe<Array<WordWhereUniqueInput>>;
  update?: Maybe<Array<WordUpdateWithWhereUniqueWithoutDisconnectTranslateInput>>;
  updateMany?: Maybe<Array<WordUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<WordUpsertWithWhereUniqueWithoutDisconnectTranslateInput>>;
};

export type WordUpdateManyWithoutEntitiesInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutEntitiesInput>>;
  delete?: Maybe<Array<WordWhereUniqueInput>>;
  deleteMany?: Maybe<Array<WordScalarWhereInput>>;
  disconnect?: Maybe<Array<WordWhereUniqueInput>>;
  set?: Maybe<Array<WordWhereUniqueInput>>;
  update?: Maybe<Array<WordUpdateWithWhereUniqueWithoutEntitiesInput>>;
  updateMany?: Maybe<Array<WordUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<WordUpsertWithWhereUniqueWithoutEntitiesInput>>;
};

export type WordUpdateManyWithoutTranslateInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutTranslateInput>>;
  delete?: Maybe<Array<WordWhereUniqueInput>>;
  deleteMany?: Maybe<Array<WordScalarWhereInput>>;
  disconnect?: Maybe<Array<WordWhereUniqueInput>>;
  set?: Maybe<Array<WordWhereUniqueInput>>;
  update?: Maybe<Array<WordUpdateWithWhereUniqueWithoutTranslateInput>>;
  updateMany?: Maybe<Array<WordUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<WordUpsertWithWhereUniqueWithoutTranslateInput>>;
};

export type WordUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<WordWhereUniqueInput>>;
  create?: Maybe<Array<WordCreateWithoutUserInput>>;
  delete?: Maybe<Array<WordWhereUniqueInput>>;
  deleteMany?: Maybe<Array<WordScalarWhereInput>>;
  disconnect?: Maybe<Array<WordWhereUniqueInput>>;
  set?: Maybe<Array<WordWhereUniqueInput>>;
  update?: Maybe<Array<WordUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<WordUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<WordUpsertWithWhereUniqueWithoutUserInput>>;
};

export type WordUpdateManyWithWhereNestedInput = {
  data: WordUpdateManyDataInput;
  where: WordScalarWhereInput;
};

export type WordUpdateWithoutDisconnectEntitiesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectTranslate?: Maybe<TranslateUpdateManyWithoutDisconnectWordsInput>;
  en?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityUpdateManyWithoutWordsInput>;
  id?: Maybe<Scalars['Int']>;
  translate?: Maybe<TranslateUpdateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutWordInput>;
};

export type WordUpdateWithoutDisconnectTranslateDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectWordsInput>;
  en?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityUpdateManyWithoutWordsInput>;
  id?: Maybe<Scalars['Int']>;
  translate?: Maybe<TranslateUpdateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutWordInput>;
};

export type WordUpdateWithoutEntitiesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectWordsInput>;
  disconnectTranslate?: Maybe<TranslateUpdateManyWithoutDisconnectWordsInput>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  translate?: Maybe<TranslateUpdateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutWordInput>;
};

export type WordUpdateWithoutTranslateDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectWordsInput>;
  disconnectTranslate?: Maybe<TranslateUpdateManyWithoutDisconnectWordsInput>;
  en?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityUpdateManyWithoutWordsInput>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneRequiredWithoutWordInput>;
};

export type WordUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  disconnectEntities?: Maybe<EntityUpdateManyWithoutDisconnectWordsInput>;
  disconnectTranslate?: Maybe<TranslateUpdateManyWithoutDisconnectWordsInput>;
  en?: Maybe<Scalars['String']>;
  entities?: Maybe<EntityUpdateManyWithoutWordsInput>;
  id?: Maybe<Scalars['Int']>;
  translate?: Maybe<TranslateUpdateManyWithoutWordsInput>;
  type?: Maybe<PartOfSpeech>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WordUpdateWithWhereUniqueWithoutDisconnectEntitiesInput = {
  data: WordUpdateWithoutDisconnectEntitiesDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpdateWithWhereUniqueWithoutDisconnectTranslateInput = {
  data: WordUpdateWithoutDisconnectTranslateDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpdateWithWhereUniqueWithoutEntitiesInput = {
  data: WordUpdateWithoutEntitiesDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpdateWithWhereUniqueWithoutTranslateInput = {
  data: WordUpdateWithoutTranslateDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpdateWithWhereUniqueWithoutUserInput = {
  data: WordUpdateWithoutUserDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpsertWithWhereUniqueWithoutDisconnectEntitiesInput = {
  create: WordCreateWithoutDisconnectEntitiesInput;
  update: WordUpdateWithoutDisconnectEntitiesDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpsertWithWhereUniqueWithoutDisconnectTranslateInput = {
  create: WordCreateWithoutDisconnectTranslateInput;
  update: WordUpdateWithoutDisconnectTranslateDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpsertWithWhereUniqueWithoutEntitiesInput = {
  create: WordCreateWithoutEntitiesInput;
  update: WordUpdateWithoutEntitiesDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpsertWithWhereUniqueWithoutTranslateInput = {
  create: WordCreateWithoutTranslateInput;
  update: WordUpdateWithoutTranslateDataInput;
  where: WordWhereUniqueInput;
};

export type WordUpsertWithWhereUniqueWithoutUserInput = {
  create: WordCreateWithoutUserInput;
  update: WordUpdateWithoutUserDataInput;
  where: WordWhereUniqueInput;
};

export type WordWhereInput = {
  AND?: Maybe<Array<WordWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  disconnectEntities?: Maybe<EntityFilter>;
  disconnectTranslate?: Maybe<TranslateFilter>;
  en?: Maybe<StringFilter>;
  entities?: Maybe<EntityFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<WordWhereInput>>;
  OR?: Maybe<Array<WordWhereInput>>;
  translate?: Maybe<TranslateFilter>;
  type?: Maybe<PartOfSpeechFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  User?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type WordWhereUniqueInput = {
  AnotherUser_firstname_lastname_key?: Maybe<AnotherUser_Firstname_Lastname_KeyCompoundUniqueInput>;
  id?: Maybe<Scalars['Int']>;
};
