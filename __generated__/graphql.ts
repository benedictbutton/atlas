/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type Answer = {
  __typename?: 'Answer';
  countryName?: Maybe<Scalars['String']>;
  gameId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Boolean']>;
};

export type AnswerInput = {
  countryId?: InputMaybe<Scalars['String']>;
  gameId?: InputMaybe<Scalars['String']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count?: Maybe<Scalars['Int']>;
};

export type Country = {
  __typename?: 'Country';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Game = {
  __typename?: 'Game';
  answers?: Maybe<Array<Maybe<Answer>>>;
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCountry?: Maybe<Country>;
  createGame: Array<Maybe<Answer>>;
  createManyCountries?: Maybe<BatchPayload>;
  deleteManyAnswers?: Maybe<Array<Maybe<Answer>>>;
  deleteManyCountries?: Maybe<BatchPayload>;
  deleteManyGames?: Maybe<Array<Maybe<Game>>>;
  deleteManyUsers?: Maybe<Array<Maybe<User>>>;
  deleteUser?: Maybe<User>;
  saveGame?: Maybe<Array<Maybe<Answer>>>;
  updateManyUsers?: Maybe<Array<Maybe<User>>>;
  updateUserEmail?: Maybe<User>;
  updateUserIntroMessage?: Maybe<User>;
};


export type MutationCreateCountryArgs = {
  name: Scalars['String'];
};


export type MutationCreateGameArgs = {
  userId: Scalars['String'];
};


export type MutationCreateManyCountriesArgs = {
  inputs?: InputMaybe<Array<InputMaybe<CountryInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationSaveGameArgs = {
  answers?: InputMaybe<Array<InputMaybe<SaveAnswerInput>>>;
  gameId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserEmailArgs = {
  email: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateUserIntroMessageArgs = {
  inputs?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  answers?: Maybe<Array<Maybe<Answer>>>;
  countries?: Maybe<Array<Maybe<Country>>>;
  game?: Maybe<Game>;
  games?: Maybe<Array<Maybe<Game>>>;
  user: User;
  users: Array<Maybe<User>>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type SaveAnswerInput = {
  countryName: Scalars['String'];
  value?: InputMaybe<Scalars['Boolean']>;
};

export type Session = {
  __typename?: 'Session';
  expires?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Account>;
  email?: Maybe<Scalars['String']>;
  games?: Maybe<Array<Maybe<Game>>>;
  id?: Maybe<Scalars['String']>;
  introMessage?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  sessions?: Maybe<Session>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  introMessage?: InputMaybe<Scalars['Boolean']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type CreateGameMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: Array<{ __typename?: 'Answer', id?: string | null, value?: boolean | null, countryName?: string | null, gameId?: string | null } | null> };

export type SaveGameMutationVariables = Exact<{
  gameId?: InputMaybe<Scalars['String']>;
  answers?: InputMaybe<Array<InputMaybe<SaveAnswerInput>> | InputMaybe<SaveAnswerInput>>;
}>;


export type SaveGameMutation = { __typename?: 'Mutation', saveGame?: Array<{ __typename?: 'Answer', id?: string | null } | null> | null };

export type UpdateUserIntroMessageMutationVariables = Exact<{
  inputs?: InputMaybe<UserInput>;
}>;


export type UpdateUserIntroMessageMutation = { __typename?: 'Mutation', updateUserIntroMessage?: { __typename?: 'User', id?: string | null, introMessage?: boolean | null } | null };


export const CreateGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"gameId"}}]}}]}}]} as unknown as DocumentNode<CreateGameMutation, CreateGameMutationVariables>;
export const SaveGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answers"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SaveAnswerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}},{"kind":"Argument","name":{"kind":"Name","value":"answers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answers"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SaveGameMutation, SaveGameMutationVariables>;
export const UpdateUserIntroMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserIntroMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserIntroMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"introMessage"}}]}}]}}]} as unknown as DocumentNode<UpdateUserIntroMessageMutation, UpdateUserIntroMessageMutationVariables>;