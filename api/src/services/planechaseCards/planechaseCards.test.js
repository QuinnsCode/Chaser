import {
  planechaseCards,
  planechaseCard,
  deletePlanechaseCard,
} from './planechaseCards'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('planechaseCards', () => {
  scenario('returns all planechaseCards', async (scenario) => {
    const result = await planechaseCards()

    expect(result.length).toEqual(Object.keys(scenario.planechaseCard).length)
  })

  scenario('returns a single planechaseCard', async (scenario) => {
    const result = await planechaseCard({
      id: scenario.planechaseCard.one.id,
    })

    expect(result).toEqual(scenario.planechaseCard.one)
  })

  scenario('deletes a planechaseCard', async (scenario) => {
    const original = await deletePlanechaseCard({
      id: scenario.planechaseCard.one.id,
    })
    const result = await planechaseCard({ id: original.id })

    expect(result).toEqual(null)
  })
})
