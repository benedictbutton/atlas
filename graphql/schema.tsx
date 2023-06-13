import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Account {
    id: String
    userId: String
    type: String
    provider: String
    providerAccountId: String
    refresh_token: String
    access_token: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
  }

  type Session {
    id: String
    sessionToken: String
    userId: String
    expires: String
    user: User
  }

  type VerificationToken {
    identifier: String
    token: String
    expires: String
  }

  type User {
    id: String
    email: String
    password: String
    accounts: Account
    sessions: Session
  }

  type Country {
    id: String
    name: String
    answer: [Answer]
  }

  type Answer {
    id: String
    value: Boolean
    countryId: String
    gameId: String
  }

  type Game {
    id: String
    userId: String
    answers: [Answer]
    user: User
  }

  type BatchPayload {
    count: Int
  }

  input UserCreateInput {
    email: String!
    password: String
  }

  input AuthenticateInput {
    email: String!
    password: String
  }

  input CountryInput {
    name: String!
  }

  type Query {
    users: [User]!
    user: User!
    countries: [Country]
  }

  type Mutation {
    createUser(inputs: UserCreateInput!): User!
    authenticateUser(inputs: AuthenticateInput!): User!
    updateUser(id: String!, email: String): User
    deleteUser: User
    updateManyUsers: [User]
    createCountries(inputs: [CountryInput]): BatchPayload
    deleteAllCountries: BatchPayload
  }
`;

//   @@unique([identifier, token])

// email:         String
// emailVerified: String
// image:         String
// accounts:      Account[]
// sessions:      Session[]
