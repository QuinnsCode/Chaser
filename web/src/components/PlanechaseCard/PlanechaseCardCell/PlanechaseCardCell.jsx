import PlanechaseCard from 'src/components/PlanechaseCard/PlanechaseCard'

export const QUERY = gql`
  query FindPlanechaseCardById($id: String!) {
    planechaseCard: planechaseCard(id: $id) {
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

export const Empty = () => <div>PlanechaseCard not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ planechaseCard }) => {
  return <PlanechaseCard planechaseCard={planechaseCard} />
}
