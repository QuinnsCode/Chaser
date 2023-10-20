import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlanechaseCardForm from 'src/components/PlanechaseCard/PlanechaseCardForm'

export const QUERY = gql`
  query EditPlanechaseCardById($id: String!) {
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
const UPDATE_PLANECHASE_CARD_MUTATION = gql`
  mutation UpdatePlanechaseCardMutation(
    $id: String!
    $input: UpdatePlanechaseCardInput!
  ) {
    updatePlanechaseCard(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ planechaseCard }) => {
  const [updatePlanechaseCard, { loading, error }] = useMutation(
    UPDATE_PLANECHASE_CARD_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlanechaseCard updated')
        navigate(routes.planechaseCards())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updatePlanechaseCard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PlanechaseCard {planechaseCard?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlanechaseCardForm
          planechaseCard={planechaseCard}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
