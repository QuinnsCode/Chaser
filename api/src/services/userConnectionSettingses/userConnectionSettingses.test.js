import {
  userConnectionSettingses,
  userConnectionSettings,
  deleteUserConnectionSettings,
} from './userConnectionSettingses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userConnectionSettingses', () => {
  scenario('returns all userConnectionSettingses', async (scenario) => {
    const result = await userConnectionSettingses()

    expect(result.length).toEqual(
      Object.keys(scenario.userConnectionSettings).length
    )
  })

  scenario('returns a single userConnectionSettings', async (scenario) => {
    const result = await userConnectionSettings({
      id: scenario.userConnectionSettings.one.id,
    })

    expect(result).toEqual(scenario.userConnectionSettings.one)
  })

  scenario('deletes a userConnectionSettings', async (scenario) => {
    const original = await deleteUserConnectionSettings({
      id: scenario.userConnectionSettings.one.id,
    })
    const result = await userConnectionSettings({ id: original.id })

    expect(result).toEqual(null)
  })
})
