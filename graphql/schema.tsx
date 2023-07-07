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
    games: [Game]
  }

  type Country {
    id: String
    name: String
  }

  type Answer {
    id: String
    value: Boolean
    countryName: String
    gameId: String
  }

  type Game {
    id: String
    userId: String
    answers: [Answer]
  }

  type BatchPayload {
    count: Int
  }

  input CountryInput {
    id: String
    name: String
  }

  input AnswerInput {
    countryId: String
    gameId: String
  }

  input SaveAnswerInput {
    countryName: String!
    value: Boolean
  }

  type Query {
    users: [User]!
    user(id: String!): User!
    countries: [Country]
    answers: [Answer]
    game: Game
    games: [Game]
  }

  type Mutation {
    updateUserEmail(id: String!, email: String!): User
    updateManyUsers: [User]
    deleteUser(id: String!): User
    deleteManyUsers: [User]
    createCountry(name: String!): Country
    createManyCountries(inputs: [CountryInput]): BatchPayload
    deleteManyCountries: BatchPayload
    createGame(userId: String!): [Answer]
    saveGame(gameId: String, answers: [SaveAnswerInput]): [Answer]
    deleteManyGames: [Game]
    deleteManyAnswers: [Answer]
  }
`;

//   @@unique([identifier, token])

// email:         String
// emailVerified: String
// image:         String
// accounts:      Account[]
// sessions:      Session[]
