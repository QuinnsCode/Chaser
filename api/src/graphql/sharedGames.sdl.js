export const schema = gql`
  type SharedGame {
    id: String!
    gameState: String
    players: [User]!
    deck: [PlanechaseCard]!
    usedCards: [PlanechaseCard]!
  }

  type Query {
    sharedGames: [SharedGame!]! @requireAuth
    sharedGame(id: String!): SharedGame @requireAuth
  }

  input CreateSharedGameInput {
    gameState: String
  }

  input UpdateSharedGameInput {
    gameState: String
  }

  type Mutation {
    createSharedGame(input: CreateSharedGameInput!): SharedGame! @requireAuth
    updateSharedGame(id: String!, input: UpdateSharedGameInput!): SharedGame!
      @requireAuth
    deleteSharedGame(id: String!): SharedGame! @requireAuth
  }
`
