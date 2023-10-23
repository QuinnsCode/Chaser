import CardSettingsControlPanel from 'src/components/CardSettingsControlPanel/CardSettingsControlPanel'

export const QUERY = gql`
  query UserGameSettingsQuery {
    userGameSettings: userGameSettingses {
      id
      cardSettings
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ cardLibrary }) => {
  return (
    <div className="w-full">
      <div className="w-full">
        No settings found, select where you would like to start:
      </div>
      <div className="w-full">
        <div className="inline-flex">
          <button className="rw-button mx-2 rounded-lg">
            Customize Card Pool
          </button>
        </div>
        <div className="inline-flex">
          <button className="rw-button mx-2 rounded-lg">
            Customize Card Pool
          </button>
        </div>
      </div>
      {cardLibrary ? (
        <CardSettingsControlPanel cardLibrary={cardLibrary} />
      ) : (
        <></>
      )}
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ userGameSettings, cardLibrary, cardSettings }) => {
  const convertedCardSettings = JSON.parse(cardSettings)

  return (
    <div className="w-full">
      {cardLibrary && userGameSettings && (
        <CardSettingsControlPanel
          cardSettings={convertedCardSettings}
          cardLibrary={cardLibrary}
        />
      )}
      <ul>
        {userGameSettings?.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>
        })}
      </ul>
    </div>
  )
}
