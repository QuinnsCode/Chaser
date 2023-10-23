import {
  Loading,
  Empty,
  Failure,
  Success,
} from './UserGameSettingsImageHoverCell'
import { standard } from './UserGameSettingsImageHoverCell.mock'

const meta = {
  title: 'Cells/UserGameSettingsImageHoverCell',
}

export default meta

export const loading = {
  render: () => {
    return Loading ? <Loading /> : <></>
  },
}

export const empty = {
  render: () => {
    return Empty ? <Empty /> : <></>
  },
}

export const failure = {
  render: (args) => {
    return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
  },
}

export const success = {
  render: (args) => {
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
