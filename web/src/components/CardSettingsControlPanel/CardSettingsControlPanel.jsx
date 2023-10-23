import { useEffect, useState } from 'react'

import UserGameSettingsImageHoverCell from 'src/components/UserGameSettingsImageHoverCell/UserGameSettingsImageHoverCell'

const CardSettingsControlPanel = ({ cardLibrary, cardSettings }) => {
  //generate checklistState if there is not one else set it to what was
  //assume all include to start

  const [inputValue, setInputValue] = useState('')

  const [activeId, setActiveId] = useState('')

  const alphabeticalCardLibrary = cardLibrary?.sort((a, b) => {
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

  const defaultCardList = alphabeticalCardLibrary?.map((card) => {
    return { ...card, isChecked: true, isVisible: true }
  })

  const cardSettingCardList = cardSettings ? [...cardSettings] : defaultCardList

  const [checkState, setCheckState] = useState(cardSettingCardList)

  const handleOnOffCard = (id) => {
    const newState = [...checkState].map((card) => {
      if (card.id === id) {
        return { ...card, isChecked: !card.isChecked }
      } else {
        return card
      }
    })
    setCheckState(newState)
  }

  const allOn = () => {
    const newState = [...checkState].map((card) => {
      return { ...card, isChecked: true, isVisible: true }
    })
    setCheckState(newState)
  }

  const allOff = () => {
    const newState = [...checkState].map((card) => {
      return { ...card, isChecked: false, isVisible: true }
    })
    setCheckState(newState)
  }

  const handleCloseMe = () => {
    setActiveId('')
  }

  useEffect(() => {
    const handleChangeSearch = (textValue) => {
      const lowerCase = textValue?.toLowerCase()
      const cards = [...checkState]?.map((card) => {
        if (card.name.toLowerCase().includes(lowerCase)) {
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
      {activeId && (
        <UserGameSettingsImageHoverCell id={activeId} closeMe={handleCloseMe} />
      )}
      <div className="w-full font-thin">Included cards:</div>
      <hr />
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
      <hr />
      <div className="inline-flex text-white">Search:</div>
      <input
        onChange={(e) => {
          console.log(e.target.value)
          setInputValue(e.target.value)
        }}
        className="m-1 inline-flex pl-1.5 text-black"
      />
      <div className="inline-flex font-thin text-white">{`Hover over names of red, unchecked cards to see what they are`}</div>
      <hr />
      <ul className="my-1.5 grid grid-cols-2 rounded-2xl border-2 border-solid border-white pt-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4">
        {checkState ? (
          checkState?.map((card) => {
            if (card.isVisible) {
              const borderColorString = card.isChecked
                ? 'border-green-600'
                : 'border-red-600'

              const innerBorderColorString = card.isChecked
                ? 'border-emerald-500'
                : 'border-white'

              const bgColorString = card.isChecked
                ? 'bg-gradient-to-br from-slate-900 via-black to-green-900 hover:bg-gradient-to-br hover:from-black hover:via-emerald-900 hover:to-green-600'
                : 'bg-gradient-to-br from-black via-black to-slate-700'

              return (
                <li
                  key={card.id}
                  className={`my-1 w-full rounded-lg px-0.5 ${
                    card.isChecked ? bgColorString : 'border-white'
                  }`}
                >
                  {card.isChecked ? (
                    <button
                      onClick={(e) => {
                        //"itemOnOff-" is the start of the string -> slice 10 off start, check for null id
                        if (card.id) {
                          if (e.target.id.includes('view-')) {
                            setActiveId(card.id)
                          } else {
                            handleOnOffCard(card.id)
                          }
                        }
                      }}
                      className={`h-full w-full border-2 border-solid ${borderColorString} rounded-md py-3`}
                    >
                      <div
                        className={`inline-flex h-full w-2/3 items-center rounded-md border border-solid ${innerBorderColorString} font-thin`}
                      >
                        <div className="w-full rounded-lg bg-black pl-1 text-center">
                          {card.name}
                        </div>
                        <div id={'view-' + card.id} className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="27"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="45"
                              cy="45"
                              r="40"
                              fill="gray"
                              stroke="black"
                              strokeWidth="2"
                            />

                            <circle cx="47" cy="50" r="20" fill="black" />

                            <circle cx="60" cy="30" r="5" fill="white" />
                          </svg>
                        </div>
                      </div>
                      <div className="inline-flex h-full w-1/4 items-center">
                        <div className="mx-1 inline-flex text-center font-thin">
                          Add?
                        </div>
                        <input
                          id={'itemOnOff-' + card.id}
                          type={'checkbox'}
                          checked={card.isChecked}
                          className="shadow-md shadow-white"
                        />
                      </div>
                    </button>
                  ) : (
                    <div id={'view-' + card.id}>
                      <div
                        className={`h-full w-full border-2 border-solid ${borderColorString} rounded-md py-3`}
                      >
                        <div
                          className={`inline-flex h-full w-2/3 items-center rounded-md border border-solid ${innerBorderColorString} font-thin`}
                        >
                          <div className="w-full rounded-lg bg-black pl-1 text-center">
                            {card.name}
                          </div>
                          <button
                            onClick={(e) => {
                              if (card.id) {
                                if (e.target.id.includes('view-')) {
                                  setActiveId(card.id)
                                } else {
                                  setActiveId(card.id)
                                  // handleOnOffCard(card.id)
                                }
                              }
                            }}
                            className=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="27"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                cx="45"
                                cy="45"
                                r="40"
                                fill="gray"
                                stroke="black"
                                strokeWidth="2"
                              />

                              <circle cx="47" cy="50" r="20" fill="black" />

                              <circle cx="60" cy="30" r="5" fill="white" />
                            </svg>
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            if (card.id) {
                              handleOnOffCard(card.id)
                            }
                          }}
                          className="inline-flex h-full w-1/4 items-center"
                        >
                          <div className="mx-1 inline-flex text-center font-thin">
                            Add?
                          </div>
                          <input
                            id={'itemOnOff-' + card.id}
                            type={'checkbox'}
                            checked={card.isChecked}
                            className="shadow-md shadow-white"
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              )
            } else {
              return <></>
            }
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  )
}

export default CardSettingsControlPanel
