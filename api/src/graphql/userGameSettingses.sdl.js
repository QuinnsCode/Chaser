export const schema = gql`
  type UserGameSettings {
    id: String!
    cardSettings: String!
    customCards: [PlanechaseCard]!
    communityCustomCards: [PlanechaseCard]!
    gameSettings: User
    userGameSettingsId: String
  }

  type Query {
    userGameSettingses: [UserGameSettings!]! @requireAuth
    userGameSettings(id: String!): UserGameSettings @requireAuth
  }

  input CreateUserGameSettingsInput {
    cardSettings: String!
    userGameSettingsId: String
  }

  input UpdateUserGameSettingsInput {
    cardSettings: String
    userGameSettingsId: String
  }

  type Mutation {
    createUserGameSettings(
      input: CreateUserGameSettingsInput!
    ): UserGameSettings! @requireAuth
    updateUserGameSettings(
      id: String!
      input: UpdateUserGameSettingsInput!
    ): UserGameSettings! @requireAuth
    deleteUserGameSettings(id: String!): UserGameSettings! @requireAuth
  }
`
