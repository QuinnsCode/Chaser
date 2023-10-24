import { render } from '@redwoodjs/testing/web'

import InspectCardHoverUiPanel from './InspectCardHoverUiPanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InspectCardHoverUiPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InspectCardHoverUiPanel />)
    }).not.toThrow()
  })
})
