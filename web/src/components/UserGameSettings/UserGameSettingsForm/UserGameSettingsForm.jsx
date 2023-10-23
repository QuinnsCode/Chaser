import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const UserGameSettingsForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userGameSettings?.id)
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
          name="cardSettings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Card settings
        </Label>

        <TextField
          name="cardSettings"
          defaultValue={props.userGameSettings?.cardSettings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cardSettings" className="rw-field-error" />

        <Label
          name="userGameSettingsId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User game settings id
        </Label>

        <TextField
          name="userGameSettingsId"
          defaultValue={props.userGameSettings?.userGameSettingsId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="userGameSettingsId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserGameSettingsForm
