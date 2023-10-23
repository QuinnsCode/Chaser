import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AdvancedGameSettings/AdvancedGameSettingsesCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_ADVANCED_GAME_SETTINGS_MUTATION = gql`
  mutation DeleteAdvancedGameSettingsMutation($id: String!) {
    deleteAdvancedGameSettings(id: $id) {
      id
    }
  }
`

const AdvancedGameSettingsesList = ({ advancedGameSettingses }) => {
  const [deleteAdvancedGameSettings] = useMutation(
    DELETE_ADVANCED_GAME_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdvancedGameSettings deleted')
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
        'Are you sure you want to delete advancedGameSettings ' + id + '?'
      )
    ) {
      deleteAdvancedGameSettings({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Timed</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {advancedGameSettingses.map((advancedGameSettings) => (
            <tr key={advancedGameSettings.id}>
              <td>{truncate(advancedGameSettings.id)}</td>
              <td>{truncate(advancedGameSettings.name)}</td>
              <td>{checkboxInputTag(advancedGameSettings.timed)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.advancedGameSettings({
                      id: advancedGameSettings.id,
                    })}
                    title={
                      'Show advancedGameSettings ' +
                      advancedGameSettings.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAdvancedGameSettings({
                      id: advancedGameSettings.id,
                    })}
                    title={
                      'Edit advancedGameSettings ' + advancedGameSettings.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete advancedGameSettings ' + advancedGameSettings.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(advancedGameSettings.id)}
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

export default AdvancedGameSettingsesList
