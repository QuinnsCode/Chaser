import { useEffect, useState } from 'react'

import CardsCell from 'src/components/CardsCell/CardsCell'
// import { chaseCardInfoArr } from 'src/sharedData/chaseCards'

const Game = () => {
  const [cardPool, setCardPool] = useState()
  const [randomCardIndex, setRandomCardIndex] = useState()
  const [cardQueue, setCardQueue] = useState()
  const [isRotated, setIsRotated] = useState()

  const [showChaosText, setShowChaosText] = useState(false)
  const [showPlaneText, setShowPlaneText] = useState(false)

  const handleReturnedCards = (cards) => {
    if (cards) {
      console.log({ cards })

      const newC = cards.map((card) => {
        return {
          ...card,
          usedThisGame: false,
          previousCard: '',
          nextCard: '',
          isCurrentCard: false,
        }
      })
      const rando = getRandomID(newC.length)

      const next = getNextRandomID(rando, newC.length)
      // alert(rando + ' -----' + next)

      // const info = newC?.map((card) => {
      //   //arr goes 0-3 and this goes 1-4
      //   if (card.id === rando) {
      //     return { ...card, isCurrentCard: true }
      //   } else if (card.id === next) {
      //     return { ...card, nextCard: card.id }
      //   } else {
      //     return card
      //   }
      // })
      setCardPool(newC)
    }
  }

  const getRandomID = (length) => {
    if (length < 1) {
      throw new Error('n should be a positive')
    }

    // Generate a random index between 0 and n-1 (inclusive)
    const randomIndex = Math.floor(Math.random() * length)

    if (undefined || NaN || randomIndex > length) {
      // getRandomID(n)
      alert('bad getRandomID')
    } else {
      return randomIndex
    }
  }

  const getNextRandomID = (lastRandom, length) => {
    console.log({ lastRandom }, { length })
    if (length < 1) {
      throw new Error('n should be a positive')
    }

    const randomIndex1 = Math.floor(Math.random() * length)
    const randomIndex2 = Math.floor(Math.random() * length)
    const randomIndex3 = Math.floor(Math.random() * length)
    const randomIndex4 = Math.floor(Math.random() * length)
    console.log(
      { randomIndex1 },
      { randomIndex2 },
      { randomIndex3 },
      { randomIndex4 },
      { lastRandom }
    )

    if (
      randomIndex1 == lastRandom ||
      randomIndex1 == undefined ||
      isNaN(randomIndex1)
    ) {
      // getNextRandomID(n)
      if (
        randomIndex2 == lastRandom ||
        randomIndex1 == undefined ||
        isNaN(randomIndex1)
      ) {
        // getNextRandomID(n)
        if (randomIndex3 == lastRandom || undefined || NaN) {
          // getNextRandomID(n)
          if (randomIndex4 == lastRandom || undefined || NaN) {
            // getNextRandomID(n)
          } else {
            return 0
          }
        } else {
          return randomIndex3
        }
      } else {
        return randomIndex2
      }
    } else {
      return randomIndex1
    }
  }

  const goToNextPlane = (currentCard, length, currentIndex) => {
    if (length === cardQueue?.length) {
      // alert('played all cards')
      setCardQueue([])
      return
    } else {
      if (cardQueue?.length > 0 && cardQueue?.length) {
        const newQueue = [...cardQueue, currentIndex]
        const next2 = getNextRandomID(currentIndex, cardPool.length)
        setCardQueue(newQueue)
        setRandomCardIndex({ now: next2, next: next2 })
      } else {
        const newQueue = [currentIndex]
        const newNext = getNextRandomID(currentIndex, cardPool.length)
        setCardQueue(newQueue)
        setRandomCardIndex({ now: newNext, next: newNext })
      }

      return
    }
  }
  const handleRotate = () => {
    setIsRotated(!isRotated)
  }

  const handleChangeChaosText = () => {
    setShowChaosText(!showChaosText)
    setShowPlaneText(false)
  }
  const handleChangePlaneText = () => {
    setShowPlaneText(!showPlaneText)
    setShowChaosText(false)
  }

  useEffect(() => {
    if (cardPool?.length) {
      const rando = getRandomID(cardPool.length)

      const next = getNextRandomID(rando, cardPool.length)
      setRandomCardIndex({ now: rando, next: next })
    }
  }, [cardPool])

  return (
    <div className="h-screen w-full p-1 text-center">
      {!cardPool && <CardsCell returnCards={handleReturnedCards} />}
      {cardPool ? (
        <div className="inline=flex my-1 w-full items-center rounded-2xl text-center">
          <div className="inline-flex w-full items-center text-center">
            <div className="w-1/3 items-center text-center">
              <button
                onClick={() => goToNextPlane()}
                className="rw-button inline-flex items-center bg-black px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
              >{`<< Prev`}</button>
            </div>
            <div className="w-1/3 items-center text-center">
              {isRotated ? (
                <button
                  onClick={() => handleRotate()}
                  className="rw-button inline-flex items-center bg-black px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
                >
                  Rotate
                </button>
              ) : (
                <button
                  onClick={() => handleRotate()}
                  className="rw-button inline-flex items-center bg-black px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
                >
                  UnRotate
                </button>
              )}
            </div>

            <div className="w-1/3 p-1 text-center">
              <button
                onClick={() => {
                  goToNextPlane(
                    cardPool[randomCardIndex?.now],
                    cardPool?.length,
                    randomCardIndex?.now
                  )
                }}
                className="rw-button inline-flex items-center bg-black px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
              >{`Next >>`}</button>
            </div>
          </div>
          <div className="w-full items-center text-center">
            {showChaosText ? (
              <button
                onClick={() => handleChangeChaosText()}
                className="rw-button mx-1 inline-flex items-center rounded-md border-2 border-solid border-white bg-gray-700 px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
              >
                Close Chaos Text
              </button>
            ) : (
              <button
                onClick={() => handleChangeChaosText()}
                className="rw-button mx-1 inline-flex items-center rounded-md border-2 border-solid border-white bg-black px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
              >
                Chaos Text
              </button>
            )}
            {showPlaneText ? (
              <button
                onClick={() => handleChangePlaneText()}
                className="rw-button mx-1 inline-flex items-center rounded-md border-2 border-solid border-white bg-gray-700 px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
              >
                Close Plane Text
              </button>
            ) : (
              <button
                onClick={() => handleChangePlaneText()}
                className="rw-button mx-1 inline-flex items-center rounded-md border-2 border-solid border-white bg-black px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
              >
                Plane Text
              </button>
            )}
          </div>
          <div className="my-1 w-full">
            {showPlaneText ? (
              <div className="rounded-lg border-2 border-solid border-white p-2 text-white">
                {cardPool[randomCardIndex?.now]?.abilityDescription}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="my-1 w-full">
            {showChaosText ? (
              <div className="rounded-lg border-2 border-solid border-white p-2 text-white">
                {cardPool[randomCardIndex?.now]?.chaosAbilityDescription}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="inline-flex w-full items-center rounded-md p-1">
            <div className="my-2 inline-flex h-[42rem] w-full content-center items-center justify-center rounded-md pb-12 text-center align-middle shadow-2xl shadow-pink-700">
              {isRotated ? (
                <img
                  src={cardPool[randomCardIndex?.now]?.image?.encodedString}
                  alt={cardPool[randomCardIndex?.now]?.id}
                  style={{ width: '100vh', maxWidth: '70%' }}
                  className="m-2 mx-auto max-h-full rotate-0 rounded-md border-2 border-white shadow-2xl shadow-orange-400 ring-4 ring-pink-400 ring-opacity-40 sm:rotate-0 md:rotate-90 lg:rotate-90 xl:rotate-90 2xl:rotate-90"
                />
              ) : (
                <img
                  src={cardPool[randomCardIndex?.now]?.image?.encodedString}
                  alt={cardPool[randomCardIndex?.now]?.id}
                  style={{ width: '100vh', maxWidth: '70%' }}
                  className="m-2 mx-auto max-h-full rotate-90 rounded-md border-2 border-white shadow-2xl shadow-orange-400 ring-4 ring-pink-400 ring-opacity-40 sm:rotate-0 md:rotate-0 lg:rotate-0 xl:rotate-0 2xl:rotate-0"
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Game
