import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlanechaseImageForm from 'src/components/PlanechaseImage/PlanechaseImageForm'

export const QUERY = gql`
  query EditPlanechaseImageById($id: String!) {
    planechaseImage: planechaseImage(id: $id) {
      id
      name
      encodedString
      planechaseCardId
    }
  }
`
const UPDATE_PLANECHASE_IMAGE_MUTATION = gql`
  mutation UpdatePlanechaseImageMutation(
    $id: String!
    $input: UpdatePlanechaseImageInput!
  ) {
    updatePlanechaseImage(id: $id, input: $input) {
      id
      name
      encodedString
      planechaseCardId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ planechaseImage }) => {
  const [updatePlanechaseImage, { loading, error }] = useMutation(
    UPDATE_PLANECHASE_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlanechaseImage updated')
        navigate(routes.planechaseImages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updatePlanechaseImage({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PlanechaseImage {planechaseImage?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlanechaseImageForm
          planechaseImage={planechaseImage}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
