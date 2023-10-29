import { useState, useEffect } from 'react'

const CardChooserView = ({ cardSettings, cardLibrary }) => {
  const [inputValue, setInputValue] = useState('')
  const [activeId, setActiveId] = useState('')

  console.log({ cardSettings }, { cardLibrary })

  console.log('CardChooserView', JSON.parse(cardSettings[0].cardSettings), {
    cardLibrary,
  })

  const cardLibraryCopy = cardLibrary ? [...cardLibrary] : []

  const alphabeticalCardLibrary = cardLibraryCopy.sort((a, b) => {
    const nameA = a?.name?.toUpperCase()
    const nameB = b?.name?.toUpperCase()

    if (nameA < nameB) {
      return -1
    } else if (nameA > nameB) {
      return 1
    } else {
      return 0
    }
  })

  const defaultCardList = alphabeticalCardLibrary.map((card) => {
    return { ...card, isChecked: true, isVisible: true }
  })

  // const cardSettingCardList = cardSettings?.length
  //   ? [...cardSettings]
  //   : defaultCardList
  const cardSettingCardList = []

  const [checkState, setCheckState] = useState(cardSettingCardList)

  const [isSaving, setIsSaving] = useState(false)

  const handleOnOffCard = (id) => {
    if (checkState) {
      const newState = checkState?.map((card) => {
        if (card.id === id) {
          return { ...card, isChecked: !card.isChecked }
        } else {
          return card
        }
      })
      setCheckState(newState)
    }
  }

  const allOn = () => {
    const newState = checkState?.map((card) => {
      return { ...card, isChecked: true, isVisible: true }
    })
    setCheckState(newState)
    return
  }

  const allOff = () => {
    const newState = checkState?.map((card) => {
      return { ...card, isChecked: false, isVisible: true }
    })
    setCheckState(newState)
    return
  }

  const handleCloseMe = () => {
    setActiveId('')
  }

  useEffect(() => {
    const handleChangeSearch = (textValue) => {
      const lowerCase = textValue?.toLowerCase()
      const cards = checkState?.map((card) => {
        if (card.name?.toLowerCase()?.includes(lowerCase)) {
          return { ...card, isVisible: true }
        } else {
          return { ...card, isVisible: false }
        }
      })

      setCheckState(cards)
    }

    handleChangeSearch(inputValue)
  }, [inputValue])

  return (
    <div className="h-full bg-black">
      {/* <>
      {activeId && (
        <UserGameSettingsImageHoverCell
          id={activeId}
          closeMe={handleCloseMe}
        />
      )}
    </>
    <div className="w-full font-thin">Included cards:</div>
    <hr /> */}
      <button
        onClick={() => {
          allOff()
        }}
        className={`rw-button m-1 inline-flex rounded-md border-2 border-solid bg-black text-white`}
      >
        All Off
      </button>
      <button
        onClick={() => {
          allOn()
        }}
        className={`rw-button m-1 inline-flex rounded-md border-2 border-solid bg-black text-white`}
      >
        All On
      </button>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      {/* {!isSaving ? (
      <button
        onClick={() => {
          const filtered = [...checkState]?.filter((card) => {
            return card.isChecked
          })

          save(filtered)
        }}
        className={`rw-button m-1 inline-flex rounded-md border-2 border-solid bg-black text-white`}
      >
        Save
      </button>
    ) : (
      <button
        aria-disabled
        className={`rw-button m-1 inline-flex rounded-md border-2 border-solid bg-black text-white`}
      >
        Saving
      </button>
    )} */}

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <button
        onClick={() => {
          setCheckState(defaultCardList)
        }}
        className={`rw-button m-1 inline-flex rounded-md border-2 border-solid bg-black text-white`}
      >
        Default Cardlist
      </button>
      <hr />
      <div className="inline-flex text-white">Search:</div>
      {/* <input
      onChange={(e) => {
        setInputValue(e.target.value)
      }}
      className="m-1 inline-flex pl-1.5 text-black"
    /> */}
      <div className="inline-flex font-thin text-white">{`Click eye to see what excluded cards are`}</div>
      <hr />
      {/* <ListCards checkState={checkState} /> */}
    </div>
  )
}

export default CardChooserView
