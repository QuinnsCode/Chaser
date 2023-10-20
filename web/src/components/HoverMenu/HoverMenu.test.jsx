import { render } from '@redwoodjs/testing/web'

import HoverMenu from './HoverMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HoverMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HoverMenu />)
    }).not.toThrow()
  })
})
