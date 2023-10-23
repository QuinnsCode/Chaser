import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_SHARED_GAME_MUTATION = gql`
  mutation DeleteSharedGameMutation($id: String!) {
    deleteSharedGame(id: $id) {
      id
    }
  }
`

const SharedGame = ({ sharedGame }) => {
  const [deleteSharedGame] = useMutation(DELETE_SHARED_GAME_MUTATION, {
    onCompleted: () => {
      toast.success('SharedGame deleted')
      navigate(routes.sharedGames())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete sharedGame ' + id + '?')) {
      deleteSharedGame({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SharedGame {sharedGame.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{sharedGame.id}</td>
            </tr>
            <tr>
              <th>Game state</th>
              <td>{sharedGame.gameState}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSharedGame({ id: sharedGame.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(sharedGame.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SharedGame
