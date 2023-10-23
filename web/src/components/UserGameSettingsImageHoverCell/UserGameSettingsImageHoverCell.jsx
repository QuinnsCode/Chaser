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
  return (
    <div className="-ml-1/2 fixed left-1/2 top-1/2 -mt-20 h-4/5 w-5/6 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl border-2 border-white bg-black">
      <div className="bg-black">
        <div className="rw-button-group">
          <button
            className="rw-button border-2 border-solid border-white bg-black text-center text-white"
            onClick={() => {
              closeMe()
            }}
          >
            Close X
          </button>
        </div>
        <img
          alt={card.image.encodedString}
          src={card.image.encodedString}
          style={{ width: '70%' }}
          className="-my-14 mx-auto rotate-90 sm:rotate-90 md:rotate-90 lg:rotate-90 2xl:rotate-90"
        />
        <hr />
        <div className="w-full">{card.name}</div>
        <hr />
        <div className="w-full">{'Plane - ' + card.plane}</div>
        <hr />
        <div className="w-full">{card.abilityDescription}</div>
        <hr />
        <div className="w-full">{card.chaosAbilityDescription}</div>
      </div>
    </div>
  )
}
