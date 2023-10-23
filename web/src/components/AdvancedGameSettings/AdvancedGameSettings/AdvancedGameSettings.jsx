import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_ADVANCED_GAME_SETTINGS_MUTATION = gql`
  mutation DeleteAdvancedGameSettingsMutation($id: String!) {
    deleteAdvancedGameSettings(id: $id) {
      id
    }
  }
`

const AdvancedGameSettings = ({ advancedGameSettings }) => {
  const [deleteAdvancedGameSettings] = useMutation(
    DELETE_ADVANCED_GAME_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdvancedGameSettings deleted')
        navigate(routes.advancedGameSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AdvancedGameSettings {advancedGameSettings.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{advancedGameSettings.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{advancedGameSettings.name}</td>
            </tr>
            <tr>
              <th>Timed</th>
              <td>{checkboxInputTag(advancedGameSettings.timed)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAdvancedGameSettings({ id: advancedGameSettings.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(advancedGameSettings.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AdvancedGameSettings
