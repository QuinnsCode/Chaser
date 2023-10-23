import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdvancedGameSettingsForm from 'src/components/AdvancedGameSettings/AdvancedGameSettingsForm'

const CREATE_ADVANCED_GAME_SETTINGS_MUTATION = gql`
  mutation CreateAdvancedGameSettingsMutation(
    $input: CreateAdvancedGameSettingsInput!
  ) {
    createAdvancedGameSettings(input: $input) {
      id
    }
  }
`

const NewAdvancedGameSettings = () => {
  const [createAdvancedGameSettings, { loading, error }] = useMutation(
    CREATE_ADVANCED_GAME_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdvancedGameSettings created')
        navigate(routes.advancedGameSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createAdvancedGameSettings({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New AdvancedGameSettings
        </h2>
      </header>
      <div className="rw-segment-main">
        <AdvancedGameSettingsForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewAdvancedGameSettings
