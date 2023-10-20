import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PlanechaseImage/PlanechaseImagesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PLANECHASE_IMAGE_MUTATION = gql`
  mutation DeletePlanechaseImageMutation($id: String!) {
    deletePlanechaseImage(id: $id) {
      id
    }
  }
`

const PlanechaseImagesList = ({ planechaseImages }) => {
  const [deletePlanechaseImage] = useMutation(
    DELETE_PLANECHASE_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlanechaseImage deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete planechaseImage ' + id + '?')
    ) {
      deletePlanechaseImage({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Encoded string</th>
            <th>Planechase card id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {planechaseImages.map((planechaseImage) => (
            <tr key={planechaseImage.id}>
              <td>{truncate(planechaseImage.id)}</td>
              <td>{truncate(planechaseImage.name)}</td>
              <td>{truncate(planechaseImage.encodedString)}</td>
              <td>{truncate(planechaseImage.planechaseCardId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.planechaseImage({ id: planechaseImage.id })}
                    title={
                      'Show planechaseImage ' + planechaseImage.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlanechaseImage({ id: planechaseImage.id })}
                    title={'Edit planechaseImage ' + planechaseImage.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete planechaseImage ' + planechaseImage.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(planechaseImage.id)}
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

export default PlanechaseImagesList
