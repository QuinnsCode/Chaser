import { Link, routes } from '@redwoodjs/router'

import PlanechaseImages from 'src/components/PlanechaseImage/PlanechaseImages'

export const QUERY = gql`
  query FindPlanechaseImages {
    planechaseImages {
      id
      name
      encodedString
      planechaseCardId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No planechaseImages yet. '}
      <Link to={routes.newPlanechaseImage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ planechaseImages }) => {
  return <PlanechaseImages planechaseImages={planechaseImages} />
}
