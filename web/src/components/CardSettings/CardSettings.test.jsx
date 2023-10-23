import { render } from '@redwoodjs/testing/web'

import CardSettings from './CardSettings'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardSettings', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardSettings />)
    }).not.toThrow()
  })
})
