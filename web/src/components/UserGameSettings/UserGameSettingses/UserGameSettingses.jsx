import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserGameSettings/UserGameSettingsesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_USER_GAME_SETTINGS_MUTATION = gql`
  mutation DeleteUserGameSettingsMutation($id: String!) {
    deleteUserGameSettings(id: $id) {
      id
    }
  }
`

const UserGameSettingsesList = ({ userGameSettingses }) => {
  const [deleteUserGameSettings] = useMutation(
    DELETE_USER_GAME_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserGameSettings deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete userGameSettings ' + id + '?')
    ) {
      deleteUserGameSettings({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Card settings</th>
            <th>User game settings id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userGameSettingses.map((userGameSettings) => (
            <tr key={userGameSettings.id}>
              <td>{truncate(userGameSettings.id)}</td>
              <td>{truncate(userGameSettings.cardSettings)}</td>
              <td>{truncate(userGameSettings.userGameSettingsId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userGameSettings({ id: userGameSettings.id })}
                    title={
                      'Show userGameSettings ' + userGameSettings.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserGameSettings({
                      id: userGameSettings.id,
                    })}
                    title={'Edit userGameSettings ' + userGameSettings.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userGameSettings ' + userGameSettings.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userGameSettings.id)}
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

export default UserGameSettingsesList
