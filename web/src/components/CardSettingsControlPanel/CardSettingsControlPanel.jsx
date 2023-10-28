import { useEffect, useState } from 'react'

import Tooltip from 'src/components/Tooltip/Tooltip'
import UserGameSettingsImageHoverCell from 'src/components/UserGameSettingsImageHoverCell/UserGameSettingsImageHoverCell'

//cardLibrary comes from -----------
//cardSettings comes from -----------
//save comes from UserGamesSettingsCell
//savedConfirmed comes from UserGamesSettingsCell

const CardSettingsControlPanel = ({ cardSettings, cardLibrary, save }) => {
  console.log(
    'CardSettingsControlPanel',
    JSON.parse(cardSettings[0].cardSettings),
    {
      cardLibrary,
    }
  )

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

  // const cardSettingCardList = cardSettings?.length
  //   ? [...cardSettings]
  //   : defaultCardList
  const cardSettingCardList = null

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

export default CardSettingsControlPanel

const ListCards = ({ checkState }) => {
  if (checkState) {
    console.log({ checkState })
    return (
      <ul className="my-1.5 grid grid-cols-2 rounded-2xl border-2 border-solid border-white pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3">
        {checkState ? (
          checkState?.map((card) => {
            if (card?.isVisible) {
              const borderColorString = card?.isChecked
                ? 'border-green-600'
                : 'border-red-600'

              const innerBorderColorString = card?.isChecked
                ? 'border-emerald-500'
                : 'border-white'

              const bgColorString = card?.isChecked
                ? 'bg-gradient-to-br from-slate-900 via-black to-green-900 hover:bg-gradient-to-br hover:from-black hover:via-emerald-900 hover:to-green-600'
                : 'bg-gradient-to-br from-black via-black to-slate-700'

              {
                /* return <ListElement key={card} /> */
              }
              return <>Yayy</>
            } else {
              return <>No 2</>
            }
          })
        ) : (
          <></>
        )}
      </ul>
    )
  } else return <>No List Cards</>
}

const ListElement = ({ card, bgColorString }) => {
  return (
    <li
      key={card.id}
      className={`w-full rounded-lg ${
        card?.isChecked ? bgColorString : 'border-white'
      }`}
    >
      {card?.isChecked ? (
        <>
          Yea
          {/* <div
                      className={`h-full w-full border-2 border-solid ${borderColorString} rounded-md py-3`}
                    >
                      <div
                        className={`inline-flex h-full w-2/3 items-center rounded-md border border-solid ${innerBorderColorString} font-thin`}
                      >
                        <button
                          onClick={() => {
                            if (card.id) {
                              handleOnOffCard(card.id)
                            }
                          }}
                          className="w-full rounded-lg bg-black text-center"
                        >
                          {card.name}
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-3 w-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>
                    </div> */}
        </>
      ) : (
        <>
          Nooo
          {/* <div
                        className={`h-full w-full border-2 border-solid ${borderColorString} rounded-md py-3`}
                      >
                        <div
                          className={`inline-flex h-full w-2/3 items-center rounded-md border border-solid ${innerBorderColorString} font-thin`}
                        >
                          <button
                            onClick={() => {
                              if (card.id) {
                                handleOnOffCard(card.id)
                              }
                            }}
                            className="w-full rounded-lg bg-black text-center"
                          >
                            {card.name}
                          </button>
                          <button
                            onClick={() => {
                              if (card.id) {
                                setActiveId(card.id)
                              }
                            }}
                            id={'view-' + card.id}
                            className="px-1"
                          >
                            <svg
                              fill="#ffffff"
                              width="20px"
                              height="20px"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="#ffffff"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <title>open-eye</title>
                                <path d="M0 16q0.064 0.192 0.192 0.512t0.576 1.248 0.992 1.888 1.344 2.176 1.792 2.368 2.144 2.176 2.592 1.888 2.976 1.248 3.392 0.512q2.208 0 4.288-0.768t3.616-2.016 2.912-2.72 2.304-3.008 1.6-2.72 0.96-1.984l0.32-0.8q-0.064-0.16-0.192-0.48t-0.576-1.28-0.992-1.856-1.344-2.208-1.792-2.336-2.144-2.176-2.56-1.888-3.008-1.28-3.392-0.48q-2.208 0-4.288 0.768t-3.616 2.016-2.912 2.72-2.304 2.976-1.6 2.72-0.96 2.016zM6.016 16q0-2.72 1.344-5.024t3.616-3.616 5.024-1.344q2.048 0 3.872 0.8t3.2 2.112 2.144 3.2 0.8 3.872q0 2.72-1.344 5.024t-3.648 3.648-5.024 1.344q-2.016 0-3.872-0.8t-3.2-2.144-2.144-3.168-0.768-3.904zM10.016 16q0 2.496 1.728 4.256t4.256 1.76 4.256-1.76 1.76-4.256-1.76-4.224-4.256-1.76q-0.96 0-1.984 0.352v3.648h-3.648q-0.352 0.992-0.352 1.984z"></path>{' '}
                              </g>
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
                      </div> */}
        </>
      )}
    </li>
  )
}
