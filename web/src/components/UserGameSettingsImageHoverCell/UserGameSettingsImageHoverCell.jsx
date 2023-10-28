import InspectCardHoverUIPanel from 'src/components/InspectCardHoverUIPanel/InspectCardHoverUIPanel'
export const QUERY = gql`
  query FindUserGameSettingsImageHoverQuery($id: String!) {
    card: planechaseCard(id: $id) {
      id
      name
      abilityDescription
      chaosAbilityDescription
      plane
      image {
        id
        encodedString
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ card, closeMe }) => {
  // return <InspectCardHoverUIPanel card={card} closeMe={closeMe} />
  return <div>{JSON.stringify(card)}</div>
}
