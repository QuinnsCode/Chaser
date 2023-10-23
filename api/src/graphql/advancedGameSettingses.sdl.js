export const schema = gql`
  type AdvancedGameSettings {
    id: String!
    name: String!
    timed: Boolean!
    cardList: [PlanechaseCard]!
  }

  type Query {
    advancedGameSettingses: [AdvancedGameSettings!]! @requireAuth
    advancedGameSettings(id: String!): AdvancedGameSettings @requireAuth
  }

  input CreateAdvancedGameSettingsInput {
    name: String!
    timed: Boolean!
  }

  input UpdateAdvancedGameSettingsInput {
    name: String
    timed: Boolean
  }

  type Mutation {
    createAdvancedGameSettings(
      input: CreateAdvancedGameSettingsInput!
    ): AdvancedGameSettings! @requireAuth
    updateAdvancedGameSettings(
      id: String!
      input: UpdateAdvancedGameSettingsInput!
    ): AdvancedGameSettings! @requireAuth
    deleteAdvancedGameSettings(id: String!): AdvancedGameSettings! @requireAuth
  }
`
