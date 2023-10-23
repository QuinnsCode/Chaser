export const schema = gql`
  type UserConnectionSettings {
    id: String!
    allowsMultiplayer: Boolean!
    allowsChat: Boolean!
    connectionSettings: User
    userConnectionSettingId: String
  }

  type Query {
    userConnectionSettingses: [UserConnectionSettings!]! @requireAuth
    userConnectionSettings(id: String!): UserConnectionSettings @requireAuth
  }

  input CreateUserConnectionSettingsInput {
    allowsMultiplayer: Boolean!
    allowsChat: Boolean!
    userConnectionSettingId: String
  }

  input UpdateUserConnectionSettingsInput {
    allowsMultiplayer: Boolean
    allowsChat: Boolean
    userConnectionSettingId: String
  }

  type Mutation {
    createUserConnectionSettings(
      input: CreateUserConnectionSettingsInput!
    ): UserConnectionSettings! @requireAuth
    updateUserConnectionSettings(
      id: String!
      input: UpdateUserConnectionSettingsInput!
    ): UserConnectionSettings! @requireAuth
    deleteUserConnectionSettings(id: String!): UserConnectionSettings!
      @requireAuth
  }
`
