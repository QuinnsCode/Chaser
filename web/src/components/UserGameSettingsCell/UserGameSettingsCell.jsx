import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'

import CardChooserView from 'src/components/CardChooserView/CardChooserView'
import CardSettingsControlPanel from 'src/components/CardSettingsControlPanel/CardSettingsControlPanel'

export const QUERY = gql`
  query UserGameSettingseseseQuery {
    userGameSettingses {
      id
      cardSettings
    }
  }
`

const CREATE_USER_GAME_SETTINGS = gql`
  mutation Create_User_Game_Settings($input: CreateUserGameSettingsInput!) {
    createUserGameSettings(input: $input) {
      id
      cardSettings
    }
  }
`
const UPSERT_USER_GAME_SETTINGS = gql`
  mutation Upsert_User_Game_Settings(
    $id: String!
    $input: UpsertUserGameSettingsInput!
  ) {
    upsertUserGameSettings(id: $id, input: $input) {
      id
      cardSettings
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = ({ cardLibrary }) => {
  const [createUserGameSettings] = useMutation(CREATE_USER_GAME_SETTINGS)

  const createUserGameSettings2 = async (cardSettingsString) => {
    try {
      const result = await createUserGameSettings({
        variables: {
          input: {
            cardSettings: cardSettingsString,
          },
        },
      })

      // Access the updated UserGameSettings data in result.data
      console.log(
        'Updated UserGameSettings:',
        result?.data?.createUserGameSettings
      )
    } catch (error) {
      console.error('Error updating UserGameSettings:', error)
    }
  }

  const handleSave = async (things) => {
    const jsonStr = JSON.stringify(things)
    console.log({ things }, 'empty', { jsonStr })
    if (jsonStr) {
      await createUserGameSettings2(jsonStr)
    } else {
      console.log('bologna')
    }
  }

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
            Add Custom Cards
          </button>
        </div>
      </div>
      {cardLibrary ? (
        <>
          <CardSettingsControlPanel
            cardLibrary={cardLibrary}
            save={handleSave}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ userGameSettingses, cardLibrary }) => {
  const convertedCardSettings = userGameSettingses
    ? JSON.parse(userGameSettingses[0]?.cardSettings)
    : null

  const [upsertUserGameSettings] = useMutation(UPSERT_USER_GAME_SETTINGS)

  const upsertUserSettings = async (cardSettingsString, userGameSettings) => {
    const id = userGameSettings[0].id
    const str = cardSettingsString
    try {
      const result = await upsertUserGameSettings({
        variables: {
          id: id,
          input: {
            cardSettings: str,
          },
        },
      })

      // Access the updated UserGameSettings data in result.data
      console.log(
        'Updated UserGameSettings:',
        result?.data?.upsertUserGameSettings
      )
    } catch (error) {
      console.error('Error updating UserGameSettings:', error)
    }
  }

  const handleSave = async (things) => {
    console.log({ things }, 'success', JSON.stringify(things))
    const jsonStr = JSON.stringify(things)
    if (jsonStr) {
      await upsertUserSettings(jsonStr, userGameSettingses)
    } else {
      return
    }
  }

  const [showCustomCards, setShowCustomCards] = useState()
  const [showPersonalCardPool, setShowPersonalCardPool] = useState()

  return (
    <div className="w-full border-2 border-violet-700">
      <div className="w-full">
        <div className="inline-flex">
          <button
            onClick={() => {
              setShowPersonalCardPool(!showPersonalCardPool)
            }}
            className="rw-button mx-2 rounded-lg"
          >
            Customize Card Pool
          </button>
        </div>
        <div className="inline-flex">
          <button
            onClick={() => setShowCustomCards(!showCustomCards)}
            className="rw-button mx-2 rounded-lg"
          >
            Add Custom Cards
          </button>
        </div>
      </div>

      <CardChooserView
        cardSettings={userGameSettingses}
        cardLibrary={cardLibrary}
        save={handleSave}
      />
      {/* <CardSettingsControlPanel
        cardSettings={userGameSettingses}
        cardLibrary={cardLibrary}
        save={handleSave}
      /> */}
    </div>
  )
}
