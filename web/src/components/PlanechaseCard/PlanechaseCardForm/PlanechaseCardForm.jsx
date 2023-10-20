import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PlanechaseCardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.planechaseCard?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.planechaseCard?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="plane"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Plane
        </Label>

        <TextField
          name="plane"
          defaultValue={props.planechaseCard?.plane}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="plane" className="rw-field-error" />

        <Label
          name="abilityDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ability description
        </Label>

        <TextField
          name="abilityDescription"
          defaultValue={props.planechaseCard?.abilityDescription}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="abilityDescription" className="rw-field-error" />

        <Label
          name="chaosAbilityDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Chaos ability description
        </Label>

        <TextField
          name="chaosAbilityDescription"
          defaultValue={props.planechaseCard?.chaosAbilityDescription}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="chaosAbilityDescription" className="rw-field-error" />

        <Label
          name="planechaseImageId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Planechase image id
        </Label>

        <TextField
          name="planechaseImageId"
          defaultValue={props.planechaseCard?.planechaseImageId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="planechaseImageId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlanechaseCardForm
