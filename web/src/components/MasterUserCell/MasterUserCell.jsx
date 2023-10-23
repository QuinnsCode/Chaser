export const QUERY = gql`
  query FindMasterUserQuery($thirdPartyID: String!) {
    masterUser: userByThirdPartyId(thirdPartyID: $thirdPartyID) {
      id
      firstName
      lastName
      thirdPartyID
      connectionSettings {
        id
      }
      gameSettings {
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ masterUser }) => {
  return <div></div>
}
