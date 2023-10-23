export const schema = gql`
  type User {
    id: String!
    thirdPartyID: String!
    email: String!
    firstName: String
    lastName: String
    username: String!
    connectionSettings: UserConnectionSettings
    gameSettings: UserGameSettings
    games: [SharedGame]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
    userByThirdPartyId(thirdPartyID: String!): User @requireAuth
  }

  input CreateUserInput {
    thirdPartyID: String!
    email: String!
    firstName: String
    lastName: String
    username: String!
  }

  input UpdateUserInput {
    thirdPartyID: String
    email: String
    firstName: String
    lastName: String
    username: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
