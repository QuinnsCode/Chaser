import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_USER_CONNECTION_SETTINGS_MUTATION = gql`
  mutation DeleteUserConnectionSettingsMutation($id: String!) {
    deleteUserConnectionSettings(id: $id) {
      id
    }
  }
`

const UserConnectionSettings = ({ userConnectionSettings }) => {
  const [deleteUserConnectionSettings] = useMutation(
    DELETE_USER_CONNECTION_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserConnectionSettings deleted')
        navigate(routes.userConnectionSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm(
        'Are you sure you want to delete userConnectionSettings ' + id + '?'
      )
    ) {
      deleteUserConnectionSettings({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserConnectionSettings {userConnectionSettings.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userConnectionSettings.id}</td>
            </tr>
            <tr>
              <th>Allows multiplayer</th>
              <td>
                {checkboxInputTag(userConnectionSettings.allowsMultiplayer)}
              </td>
            </tr>
            <tr>
              <th>Allows chat</th>
              <td>{checkboxInputTag(userConnectionSettings.allowsChat)}</td>
            </tr>
            <tr>
              <th>User connection setting id</th>
              <td>{userConnectionSettings.userConnectionSettingId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserConnectionSettings({
            id: userConnectionSettings.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userConnectionSettings.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserConnectionSettings
