import { render } from '@redwoodjs/testing/web'

import FloatingMenu from './FloatingMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FloatingMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FloatingMenu />)
    }).not.toThrow()
  })
})
