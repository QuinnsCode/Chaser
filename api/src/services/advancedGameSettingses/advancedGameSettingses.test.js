import {
  advancedGameSettingses,
  advancedGameSettings,
  createAdvancedGameSettings,
  updateAdvancedGameSettings,
  deleteAdvancedGameSettings,
} from './advancedGameSettingses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('advancedGameSettingses', () => {
  scenario('returns all advancedGameSettingses', async (scenario) => {
    const result = await advancedGameSettingses()

    expect(result.length).toEqual(
      Object.keys(scenario.advancedGameSettings).length
    )
  })

  scenario('returns a single advancedGameSettings', async (scenario) => {
    const result = await advancedGameSettings({
      id: scenario.advancedGameSettings.one.id,
    })

    expect(result).toEqual(scenario.advancedGameSettings.one)
  })

  scenario('creates a advancedGameSettings', async () => {
    const result = await createAdvancedGameSettings({
      input: { name: 'String', timed: true },
    })

    expect(result.name).toEqual('String')
    expect(result.timed).toEqual(true)
  })

  scenario('updates a advancedGameSettings', async (scenario) => {
    const original = await advancedGameSettings({
      id: scenario.advancedGameSettings.one.id,
    })
    const result = await updateAdvancedGameSettings({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a advancedGameSettings', async (scenario) => {
    const original = await deleteAdvancedGameSettings({
      id: scenario.advancedGameSettings.one.id,
    })
    const result = await advancedGameSettings({ id: original.id })

    expect(result).toEqual(null)
  })
})
