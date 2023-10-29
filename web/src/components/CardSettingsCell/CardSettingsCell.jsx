import UserGameSettingsCell from 'src/components/UserGameSettingsCell/UserGameSettingsCell'

export const QUERY = gql`
  query FindCards {
    planechaseCards {
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

export const Success = ({ planechaseCards }) => {
  //this loads in the default card library
  return (
    <div className="w-full border-2 border-yellow-600">
      <UserGameSettingsCell cardLibrary={planechaseCards} />
    </div>
  )
}
