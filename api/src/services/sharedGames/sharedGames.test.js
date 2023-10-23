import { sharedGames, sharedGame, deleteSharedGame } from './sharedGames'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sharedGames', () => {
  scenario('returns all sharedGames', async (scenario) => {
    const result = await sharedGames()

    expect(result.length).toEqual(Object.keys(scenario.sharedGame).length)
  })

  scenario('returns a single sharedGame', async (scenario) => {
    const result = await sharedGame({ id: scenario.sharedGame.one.id })

    expect(result).toEqual(scenario.sharedGame.one)
  })

  scenario('deletes a sharedGame', async (scenario) => {
    const original = await deleteSharedGame({
      id: scenario.sharedGame.one.id,
    })
    const result = await sharedGame({ id: original.id })

    expect(result).toEqual(null)
  })
})
