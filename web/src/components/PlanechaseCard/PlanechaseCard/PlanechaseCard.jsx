import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_PLANECHASE_CARD_MUTATION = gql`
  mutation DeletePlanechaseCardMutation($id: String!) {
    deletePlanechaseCard(id: $id) {
      id
    }
  }
`

const PlanechaseCard = ({ planechaseCard }) => {
  const [deletePlanechaseCard] = useMutation(DELETE_PLANECHASE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('PlanechaseCard deleted')
      navigate(routes.planechaseCards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete planechaseCard ' + id + '?')) {
      deletePlanechaseCard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PlanechaseCard {planechaseCard.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{planechaseCard.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{planechaseCard.name}</td>
            </tr>
            <tr>
              <th>Plane</th>
              <td>{planechaseCard.plane}</td>
            </tr>
            <tr>
              <th>Ability description</th>
              <td>{planechaseCard.abilityDescription}</td>
            </tr>
            <tr>
              <th>Chaos ability description</th>
              <td>{planechaseCard.chaosAbilityDescription}</td>
            </tr>
            <tr>
              <th>Planechase image id</th>
              <td>{planechaseCard.planechaseImageId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlanechaseCard({ id: planechaseCard.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(planechaseCard.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PlanechaseCard
