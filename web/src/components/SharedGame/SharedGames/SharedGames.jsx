import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/SharedGame/SharedGamesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_SHARED_GAME_MUTATION = gql`
  mutation DeleteSharedGameMutation($id: String!) {
    deleteSharedGame(id: $id) {
      id
    }
  }
`

const SharedGamesList = ({ sharedGames }) => {
  const [deleteSharedGame] = useMutation(DELETE_SHARED_GAME_MUTATION, {
    onCompleted: () => {
      toast.success('SharedGame deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete sharedGame ' + id + '?')) {
      deleteSharedGame({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Game state</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sharedGames.map((sharedGame) => (
            <tr key={sharedGame.id}>
              <td>{truncate(sharedGame.id)}</td>
              <td>{truncate(sharedGame.gameState)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.sharedGame({ id: sharedGame.id })}
                    title={'Show sharedGame ' + sharedGame.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSharedGame({ id: sharedGame.id })}
                    title={'Edit sharedGame ' + sharedGame.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete sharedGame ' + sharedGame.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(sharedGame.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SharedGamesList
