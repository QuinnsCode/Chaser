import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserGameSettingsForm from 'src/components/UserGameSettings/UserGameSettingsForm'

export const QUERY = gql`
  query EditUserGameSettingsById($id: String!) {
    userGameSettings: userGameSettings(id: $id) {
      id
      cardSettings
      userGameSettingsId
    }
  }
`
const UPDATE_USER_GAME_SETTINGS_MUTATION = gql`
  mutation UpdateUserGameSettingsMutation(
    $id: String!
    $input: UpdateUserGameSettingsInput!
  ) {
    updateUserGameSettings(id: $id, input: $input) {
      id
      cardSettings
      userGameSettingsId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userGameSettings }) => {
  const [updateUserGameSettings, { loading, error }] = useMutation(
    UPDATE_USER_GAME_SETTINGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserGameSettings updated')
        navigate(routes.userGameSettingses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateUserGameSettings({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserGameSettings {userGameSettings?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserGameSettingsForm
          userGameSettings={userGameSettings}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
