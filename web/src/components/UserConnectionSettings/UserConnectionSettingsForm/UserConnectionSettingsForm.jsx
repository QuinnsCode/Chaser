import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const UserConnectionSettingsForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userConnectionSettings?.id)
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
          name="allowsMultiplayer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Allows multiplayer
        </Label>

        <CheckboxField
          name="allowsMultiplayer"
          defaultChecked={props.userConnectionSettings?.allowsMultiplayer}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="allowsMultiplayer" className="rw-field-error" />

        <Label
          name="allowsChat"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Allows chat
        </Label>

        <CheckboxField
          name="allowsChat"
          defaultChecked={props.userConnectionSettings?.allowsChat}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="allowsChat" className="rw-field-error" />

        <Label
          name="userConnectionSettingId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User connection setting id
        </Label>

        <TextField
          name="userConnectionSettingId"
          defaultValue={props.userConnectionSettings?.userConnectionSettingId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="userConnectionSettingId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserConnectionSettingsForm
