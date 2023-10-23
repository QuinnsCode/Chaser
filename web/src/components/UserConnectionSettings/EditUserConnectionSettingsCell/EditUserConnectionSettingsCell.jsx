import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserConnectionSettingsForm from 'src/components/UserConnectionSettings/UserConnectionSettingsForm'

export const QUERY = gql`
  query EditUserConnectionSettingsById($id: String!) {
    userConnectionSettings: userConnectionSettings(id: $id) {
      id
      allowsMultiplayer
      allowsChat
      userConnectionSettingId
    }
  }
`
const UPDATE_USER_CONNECTION_SETTINGS_MUTATION = gql`
  mutation UpdateUserConnectionSettingsMutation(
    $id: String!
    $input: UpdateUserConnectionSettingsInput!
  ) {
    updateUserConnectionSettings(id: $id, input: $input) {
      id
      allowsMultiplayer
      allowsChat
      userConnectionSettingId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userConnectionSettings }) => {
  const [updateUserConnectionSettings, { loading, error }] = useMutation(
    UPDATE_USER_CONNECTION_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserConnectionSettings updated')
        navigate(routes.userConnectionSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateUserConnectionSettings({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserConnectionSettings {userConnectionSettings?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserConnectionSettingsForm
          userConnectionSettings={userConnectionSettings}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
