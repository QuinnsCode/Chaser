import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const SharedGameForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.sharedGame?.id)
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
          name="gameState"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game state
        </Label>

        <TextField
          name="gameState"
          defaultValue={props.sharedGame?.gameState}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="gameState" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SharedGameForm
