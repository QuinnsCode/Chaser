import { Link, routes } from '@redwoodjs/router'

import AdvancedGameSettingses from 'src/components/AdvancedGameSettings/AdvancedGameSettingses'

export const QUERY = gql`
  query FindAdvancedGameSettingses {
    advancedGameSettingses {
      id
      name
      timed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No advancedGameSettingses yet. '}
      <Link to={routes.newAdvancedGameSettings()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ advancedGameSettingses }) => {
  return (
    <AdvancedGameSettingses advancedGameSettingses={advancedGameSettingses} />
  )
}
