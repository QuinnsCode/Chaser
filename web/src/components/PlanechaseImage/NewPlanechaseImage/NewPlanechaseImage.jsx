import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlanechaseImageForm from 'src/components/PlanechaseImage/PlanechaseImageForm'

const CREATE_PLANECHASE_IMAGE_MUTATION = gql`
  mutation CreatePlanechaseImageMutation($input: CreatePlanechaseImageInput!) {
    createPlanechaseImage(input: $input) {
      id
    }
  }
`

const NewPlanechaseImage = () => {
  const [createPlanechaseImage, { loading, error }] = useMutation(
    CREATE_PLANECHASE_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlanechaseImage created')
        navigate(routes.planechaseImages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createPlanechaseImage({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PlanechaseImage</h2>
      </header>
      <div className="rw-segment-main">
        <PlanechaseImageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlanechaseImage
