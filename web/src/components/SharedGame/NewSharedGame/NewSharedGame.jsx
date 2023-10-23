import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SharedGameForm from 'src/components/SharedGame/SharedGameForm'

const CREATE_SHARED_GAME_MUTATION = gql`
  mutation CreateSharedGameMutation($input: CreateSharedGameInput!) {
    createSharedGame(input: $input) {
      id
    }
  }
`

const NewSharedGame = () => {
  const [createSharedGame, { loading, error }] = useMutation(
    CREATE_SHARED_GAME_MUTATION,
    {
      onCompleted: () => {
        toast.success('SharedGame created')
        navigate(routes.sharedGames())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createSharedGame({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SharedGame</h2>
      </header>
      <div className="rw-segment-main">
        <SharedGameForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSharedGame
