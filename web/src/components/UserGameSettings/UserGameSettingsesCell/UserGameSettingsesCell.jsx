import { Link, routes } from '@redwoodjs/router'

import UserGameSettingses from 'src/components/UserGameSettings/UserGameSettingses'

export const QUERY = gql`
  query FindUserGameSettingses {
    userGameSettingses {
      id
      cardSettings
      userGameSettingsId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userGameSettingses yet. '}
      <Link to={routes.newUserGameSettings()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userGameSettingses }) => {
  return <UserGameSettingses userGameSettingses={userGameSettingses} />
}
