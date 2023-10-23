import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SharedGameForm from 'src/components/SharedGame/SharedGameForm'

export const QUERY = gql`
  query EditSharedGameById($id: String!) {
    sharedGame: sharedGame(id: $id) {
      id
      gameState
    }
  }
`
const UPDATE_SHARED_GAME_MUTATION = gql`
  mutation UpdateSharedGameMutation(
    $id: String!
    $input: UpdateSharedGameInput!
  ) {
    updateSharedGame(id: $id, input: $input) {
      id
      gameState
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ sharedGame }) => {
  const [updateSharedGame, { loading, error }] = useMutation(
    UPDATE_SHARED_GAME_MUTATION,
    {
      onCompleted: () => {
        toast.success('SharedGame updated')
        navigate(routes.sharedGames())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateSharedGame({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SharedGame {sharedGame?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SharedGameForm
          sharedGame={sharedGame}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
