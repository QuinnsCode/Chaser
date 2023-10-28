import { render } from '@redwoodjs/testing/web'

import CardChooserView from './CardChooserView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardChooserView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardChooserView />)
    }).not.toThrow()
  })
})
