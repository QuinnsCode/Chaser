import UserGameSettingsCell from 'src/components/UserGameSettingsCell/UserGameSettingsCell'

export const QUERY = gql`
  query FindCards {
    cardLibrary: planechaseCards {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ cardLibrary }) => {
  return (
    <div className="w-full">
      <UserGameSettingsCell cardLibrary={cardLibrary} />
    </div>
  )
}
