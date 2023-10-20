import { render } from '@redwoodjs/testing/web'

import GameSystem from './GameSystem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GameSystem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameSystem />)
    }).not.toThrow()
  })
})
