import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserConnectionSettings/UserConnectionSettingsesCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_USER_CONNECTION_SETTINGS_MUTATION = gql`
  mutation DeleteUserConnectionSettingsMutation($id: String!) {
    deleteUserConnectionSettings(id: $id) {
      id
    }
  }
`

const UserConnectionSettingsesList = ({ userConnectionSettingses }) => {
  const [deleteUserConnectionSettings] = useMutation(
    DELETE_USER_CONNECTION_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserConnectionSettings deleted')
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
      confirm(
        'Are you sure you want to delete userConnectionSettings ' + id + '?'
      )
    ) {
      deleteUserConnectionSettings({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Allows multiplayer</th>
            <th>Allows chat</th>
            <th>User connection setting id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userConnectionSettingses.map((userConnectionSettings) => (
            <tr key={userConnectionSettings.id}>
              <td>{truncate(userConnectionSettings.id)}</td>
              <td>
                {checkboxInputTag(userConnectionSettings.allowsMultiplayer)}
              </td>
              <td>{checkboxInputTag(userConnectionSettings.allowsChat)}</td>
              <td>
                {truncate(userConnectionSettings.userConnectionSettingId)}
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userConnectionSettings({
                      id: userConnectionSettings.id,
                    })}
                    title={
                      'Show userConnectionSettings ' +
                      userConnectionSettings.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserConnectionSettings({
                      id: userConnectionSettings.id,
                    })}
                    title={
                      'Edit userConnectionSettings ' + userConnectionSettings.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete userConnectionSettings ' +
                      userConnectionSettings.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userConnectionSettings.id)}
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

export default UserConnectionSettingsesList
