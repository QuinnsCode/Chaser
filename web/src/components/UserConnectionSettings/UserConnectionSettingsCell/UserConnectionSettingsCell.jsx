import UserConnectionSettings from 'src/components/UserConnectionSettings/UserConnectionSettings'

export const QUERY = gql`
  query FindUserConnectionSettingsById($id: String!) {
    userConnectionSettings: userConnectionSettings(id: $id) {
      id
      allowsMultiplayer
      allowsChat
      userConnectionSettingId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserConnectionSettings not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userConnectionSettings }) => {
  return (
    <UserConnectionSettings userConnectionSettings={userConnectionSettings} />
  )
}
