import { Link, routes } from '@redwoodjs/router'

import PlanechaseCards from 'src/components/PlanechaseCard/PlanechaseCards'

export const QUERY = gql`
  query FindPlanechaseCards {
    planechaseCards {
      id
      name
      plane
      abilityDescription
      chaosAbilityDescription
      planechaseImageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No planechaseCards yet. '}
      <Link to={routes.newPlanechaseCard()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ planechaseCards }) => {
  return <PlanechaseCards planechaseCards={planechaseCards} />
}
