import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PlanechaseCard/PlanechaseCardsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PLANECHASE_CARD_MUTATION = gql`
  mutation DeletePlanechaseCardMutation($id: String!) {
    deletePlanechaseCard(id: $id) {
      id
    }
  }
`

const PlanechaseCardsList = ({ planechaseCards }) => {
  const [deletePlanechaseCard] = useMutation(DELETE_PLANECHASE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('PlanechaseCard deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete planechaseCard ' + id + '?')) {
      deletePlanechaseCard({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Plane</th>
            <th>Ability description</th>
            <th>Chaos ability description</th>
            <th>Planechase image id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {planechaseCards.map((planechaseCard) => (
            <tr key={planechaseCard.id}>
              <td>{truncate(planechaseCard.id)}</td>
              <td>{truncate(planechaseCard.name)}</td>
              <td>{truncate(planechaseCard.plane)}</td>
              <td>{truncate(planechaseCard.abilityDescription)}</td>
              <td>{truncate(planechaseCard.chaosAbilityDescription)}</td>
              <td>{truncate(planechaseCard.planechaseImageId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.planechaseCard({ id: planechaseCard.id })}
                    title={
                      'Show planechaseCard ' + planechaseCard.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlanechaseCard({ id: planechaseCard.id })}
                    title={'Edit planechaseCard ' + planechaseCard.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete planechaseCard ' + planechaseCard.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(planechaseCard.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlanechaseCardsList
