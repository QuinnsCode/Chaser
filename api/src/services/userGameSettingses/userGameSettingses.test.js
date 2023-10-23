import {
  userGameSettingses,
  userGameSettings,
  createUserGameSettings,
  updateUserGameSettings,
  deleteUserGameSettings,
} from './userGameSettingses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userGameSettingses', () => {
  scenario('returns all userGameSettingses', async (scenario) => {
    const result = await userGameSettingses()

    expect(result.length).toEqual(Object.keys(scenario.userGameSettings).length)
  })

  scenario('returns a single userGameSettings', async (scenario) => {
    const result = await userGameSettings({
      id: scenario.userGameSettings.one.id,
    })

    expect(result).toEqual(scenario.userGameSettings.one)
  })

  scenario('creates a userGameSettings', async () => {
    const result = await createUserGameSettings({
      input: { cardSettings: 'String' },
    })

    expect(result.cardSettings).toEqual('String')
  })

  scenario('updates a userGameSettings', async (scenario) => {
    const original = await userGameSettings({
      id: scenario.userGameSettings.one.id,
    })
    const result = await updateUserGameSettings({
      id: original.id,
      input: { cardSettings: 'String2' },
    })

    expect(result.cardSettings).toEqual('String2')
  })

  scenario('deletes a userGameSettings', async (scenario) => {
    const original = await deleteUserGameSettings({
      id: scenario.userGameSettings.one.id,
    })
    const result = await userGameSettings({ id: original.id })

    expect(result).toEqual(null)
  })
})
