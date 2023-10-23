import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserConnectionSettingsForm from 'src/components/UserConnectionSettings/UserConnectionSettingsForm'

const CREATE_USER_CONNECTION_SETTINGS_MUTATION = gql`
  mutation CreateUserConnectionSettingsMutation(
    $input: CreateUserConnectionSettingsInput!
  ) {
    createUserConnectionSettings(input: $input) {
      id
    }
  }
`

const NewUserConnectionSettings = () => {
  const [createUserConnectionSettings, { loading, error }] = useMutation(
    CREATE_USER_CONNECTION_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserConnectionSettings created')
        navigate(routes.userConnectionSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createUserConnectionSettings({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New UserConnectionSettings
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserConnectionSettingsForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewUserConnectionSettings
