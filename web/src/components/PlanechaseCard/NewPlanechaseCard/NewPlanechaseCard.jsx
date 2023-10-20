import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlanechaseCardForm from 'src/components/PlanechaseCard/PlanechaseCardForm'

const CREATE_PLANECHASE_CARD_MUTATION = gql`
  mutation CreatePlanechaseCardMutation($input: CreatePlanechaseCardInput!) {
    createPlanechaseCard(input: $input) {
      id
    }
  }
`

const NewPlanechaseCard = () => {
  const [createPlanechaseCard, { loading, error }] = useMutation(
    CREATE_PLANECHASE_CARD_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlanechaseCard created')
        navigate(routes.planechaseCards())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createPlanechaseCard({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PlanechaseCard</h2>
      </header>
      <div className="rw-segment-main">
        <PlanechaseCardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlanechaseCard
