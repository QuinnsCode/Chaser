import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_PLANECHASE_IMAGE_MUTATION = gql`
  mutation DeletePlanechaseImageMutation($id: String!) {
    deletePlanechaseImage(id: $id) {
      id
    }
  }
`

const PlanechaseImage = ({ planechaseImage }) => {
  const [deletePlanechaseImage] = useMutation(
    DELETE_PLANECHASE_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlanechaseImage deleted')
        navigate(routes.planechaseImages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PlanechaseImage {planechaseImage.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{planechaseImage.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{planechaseImage.name}</td>
            </tr>
            <tr>
              <th>Encoded string</th>
              <td>{planechaseImage.encodedString}</td>
            </tr>
            <tr>
              <th>Planechase card id</th>
              <td>{planechaseImage.planechaseCardId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlanechaseImage({ id: planechaseImage.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(planechaseImage.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PlanechaseImage
