export const QUERY = gql`
  query CardsQuery {
    cards: planechaseCards {
      id
      name
      image {
        id
        encodedString
      }
      plane
      abilityDescription
      chaosAbilityDescription
      planechaseImageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ cards, returnCards }) => {
  returnCards(cards)

  return
}
