import { render } from '@redwoodjs/testing/web'

import CardSettingsControlPanel from './CardSettingsControlPanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardSettingsControlPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardSettingsControlPanel />)
    }).not.toThrow()
  })
})
