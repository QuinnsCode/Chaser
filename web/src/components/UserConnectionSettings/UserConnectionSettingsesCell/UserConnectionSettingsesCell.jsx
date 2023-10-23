import { Link, routes } from '@redwoodjs/router'

import UserConnectionSettingses from 'src/components/UserConnectionSettings/UserConnectionSettingses'

export const QUERY = gql`
  query FindUserConnectionSettingses {
    userConnectionSettingses {
      id
      allowsMultiplayer
      allowsChat
      userConnectionSettingId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userConnectionSettingses yet. '}
      <Link to={routes.newUserConnectionSettings()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userConnectionSettingses }) => {
  return (
    <UserConnectionSettingses
      userConnectionSettingses={userConnectionSettingses}
    />
  )
}
