import { Link, routes } from '@redwoodjs/router'

import SharedGames from 'src/components/SharedGame/SharedGames'

export const QUERY = gql`
  query FindSharedGames {
    sharedGames {
      id
      gameState
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No sharedGames yet. '}
      <Link to={routes.newSharedGame()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ sharedGames }) => {
  return <SharedGames sharedGames={sharedGames} />
}
