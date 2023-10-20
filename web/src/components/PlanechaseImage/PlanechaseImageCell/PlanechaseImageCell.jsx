import PlanechaseImage from 'src/components/PlanechaseImage/PlanechaseImage'

export const QUERY = gql`
  query FindPlanechaseImageById($id: String!) {
    planechaseImage: planechaseImage(id: $id) {
      id
      name
      encodedString
      planechaseCardId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PlanechaseImage not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ planechaseImage }) => {
  return <PlanechaseImage planechaseImage={planechaseImage} />
}
