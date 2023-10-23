import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserGameSettingsForm from 'src/components/UserGameSettings/UserGameSettingsForm'

const CREATE_USER_GAME_SETTINGS_MUTATION = gql`
  mutation CreateUserGameSettingsMutation(
    $input: CreateUserGameSettingsInput!
  ) {
    createUserGameSettings(input: $input) {
      id
    }
  }
`

const NewUserGameSettings = () => {
  const [createUserGameSettings, { loading, error }] = useMutation(
    CREATE_USER_GAME_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserGameSettings created')
        navigate(routes.userGameSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createUserGameSettings({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New UserGameSettings
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserGameSettingsForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserGameSettings
