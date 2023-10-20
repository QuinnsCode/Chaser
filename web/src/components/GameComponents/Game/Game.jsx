import { useEffect, useState } from 'react'

import CardsCell from 'src/components/CardsCell/CardsCell'
// import { chaseCardInfoArr } from 'src/sharedData/chaseCards'

const Game = () => {
  const [cardPool, setCardPool] = useState()
  const [randomCardIndex, setRandomCardIndex] = useState()
  const [cardQueue, setCardQueue] = useState()

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
        <div className="inline=flex my-1 w-full items-center rounded-2xl border-2 border-solid border-red-700 text-center">
          <div className="inline-flex w-full items-center text-center">
            <div className="w-1/2 items-center text-center">
              <button
                onClick={() => goToNextPlane()}
                className="rw-button inline-flex items-center border-fuchsia-900 bg-black px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
              >{`<< Prev`}</button>
            </div>
            <div className="w-1/2 p-1 text-center">
              <button
                onClick={() => {
                  goToNextPlane(
                    cardPool[randomCardIndex?.now],
                    cardPool?.length,
                    randomCardIndex?.now
                  )
                }}
                className="rw-button inline-flex items-center border-fuchsia-900 bg-black px-4 py-1 text-center font-thin text-white hover:bg-gray-600"
              >{`Next >>`}</button>
            </div>
          </div>
          <div className="inline-flex w-full border border-fuchsia-950 p-1">
            <div className="my-2 inline-flex h-[42rem] w-full content-center items-center justify-center border border-red-500 text-center align-middle">
              <img
                src={cardPool[randomCardIndex?.now]?.image?.encodedString}
                alt={cardPool[randomCardIndex?.now]?.id}
                className="m-2 max-h-full"
              />
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
