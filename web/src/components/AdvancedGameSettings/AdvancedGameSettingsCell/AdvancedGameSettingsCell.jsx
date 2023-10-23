import AdvancedGameSettings from 'src/components/AdvancedGameSettings/AdvancedGameSettings'

export const QUERY = gql`
  query FindAdvancedGameSettingsById($id: String!) {
    advancedGameSettings: advancedGameSettings(id: $id) {
      id
      name
      timed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AdvancedGameSettings not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ advancedGameSettings }) => {
  return <AdvancedGameSettings advancedGameSettings={advancedGameSettings} />
}
