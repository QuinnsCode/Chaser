import {
  planechaseImages,
  planechaseImage,
  deletePlanechaseImage,
} from './planechaseImages'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('planechaseImages', () => {
  scenario('returns all planechaseImages', async (scenario) => {
    const result = await planechaseImages()

    expect(result.length).toEqual(Object.keys(scenario.planechaseImage).length)
  })

  scenario('returns a single planechaseImage', async (scenario) => {
    const result = await planechaseImage({
      id: scenario.planechaseImage.one.id,
    })

    expect(result).toEqual(scenario.planechaseImage.one)
  })

  scenario('deletes a planechaseImage', async (scenario) => {
    const original = await deletePlanechaseImage({
      id: scenario.planechaseImage.one.id,
    })
    const result = await planechaseImage({ id: original.id })

    expect(result).toEqual(null)
  })
})
