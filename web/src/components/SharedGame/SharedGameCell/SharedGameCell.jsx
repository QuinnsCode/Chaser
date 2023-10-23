import SharedGame from 'src/components/SharedGame/SharedGame'

export const QUERY = gql`
  query FindSharedGameById($id: String!) {
    sharedGame: sharedGame(id: $id) {
      id
      gameState
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SharedGame not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ sharedGame }) => {
  return <SharedGame sharedGame={sharedGame} />
}
