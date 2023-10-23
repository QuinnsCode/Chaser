import UserGameSettings from 'src/components/UserGameSettings/UserGameSettings'

export const QUERY = gql`
  query FindUserGameSettingsById($id: String!) {
    userGameSettings: userGameSettings(id: $id) {
      id
      cardSettings
      userGameSettingsId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserGameSettings not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userGameSettings }) => {
  return <UserGameSettings userGameSettings={userGameSettings} />
}
