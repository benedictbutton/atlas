/* eslint-disable */
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

export type AuthenticateInput = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUser: User;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateManyUsers?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
};


export type MutationAuthenticateUserArgs = {
  inputs: AuthenticateInput;
};


export type MutationCreateUserArgs = {
  inputs: UserCreateInput;
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users: Array<Maybe<User>>;
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
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sessions?: Maybe<Session>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};
