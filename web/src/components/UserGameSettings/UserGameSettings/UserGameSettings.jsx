import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_USER_GAME_SETTINGS_MUTATION = gql`
  mutation DeleteUserGameSettingsMutation($id: String!) {
    deleteUserGameSettings(id: $id) {
      id
    }
  }
`

const UserGameSettings = ({ userGameSettings }) => {
  const [deleteUserGameSettings] = useMutation(
    DELETE_USER_GAME_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserGameSettings deleted')
        navigate(routes.userGameSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserGameSettings {userGameSettings.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userGameSettings.id}</td>
            </tr>
            <tr>
              <th>Card settings</th>
              <td>{userGameSettings.cardSettings}</td>
            </tr>
            <tr>
              <th>User game settings id</th>
              <td>{userGameSettings.userGameSettingsId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserGameSettings({ id: userGameSettings.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userGameSettings.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserGameSettings
