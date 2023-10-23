import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdvancedGameSettingsForm from 'src/components/AdvancedGameSettings/AdvancedGameSettingsForm'

export const QUERY = gql`
  query EditAdvancedGameSettingsById($id: String!) {
    advancedGameSettings: advancedGameSettings(id: $id) {
      id
      name
      timed
    }
  }
`
const UPDATE_ADVANCED_GAME_SETTINGS_MUTATION = gql`
  mutation UpdateAdvancedGameSettingsMutation(
    $id: String!
    $input: UpdateAdvancedGameSettingsInput!
  ) {
    updateAdvancedGameSettings(id: $id, input: $input) {
      id
      name
      timed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ advancedGameSettings }) => {
  const [updateAdvancedGameSettings, { loading, error }] = useMutation(
    UPDATE_ADVANCED_GAME_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdvancedGameSettings updated')
        navigate(routes.advancedGameSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateAdvancedGameSettings({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AdvancedGameSettings {advancedGameSettings?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AdvancedGameSettingsForm
          advancedGameSettings={advancedGameSettings}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
