import { useState, useEffect } from 'react'

const CardChooserView = ({ cardSettings, cardLibrary }) => {
  const [inputValue, setInputValue] = useState('')
  const [activeId, setActiveId] = useState('')

  console.log({ cardSettings }, { cardLibrary })

  console.log(
    'CardSettingsControlPanel',
    JSON.parse(cardSettings[0].cardSettings),
    {
      cardLibrary,
    }
  )

  const alphabeticalCardLibrary = cardLibrary.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()

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
    <div>
      <h2>{'CardChooserView'}</h2>
    </div>
  )
}

export default CardChooserView
