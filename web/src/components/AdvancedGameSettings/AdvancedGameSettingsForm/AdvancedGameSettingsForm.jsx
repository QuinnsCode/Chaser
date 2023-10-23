import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const AdvancedGameSettingsForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.advancedGameSettings?.id)
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
          defaultValue={props.advancedGameSettings?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="timed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Timed
        </Label>

        <CheckboxField
          name="timed"
          defaultChecked={props.advancedGameSettings?.timed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="timed" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AdvancedGameSettingsForm
