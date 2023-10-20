import { render } from '@redwoodjs/testing/web'

import Game from './Game'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Game', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Game />)
    }).not.toThrow()
  })
})
