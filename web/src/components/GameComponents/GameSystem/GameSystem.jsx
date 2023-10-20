import { useState } from 'react'

const GameSystem = ({ importGame, exportGame, message }) => {
  const [gameState, setGameState] = useState({
    gameStateV1: {
      cardsRejected: [],
      cardPool: [],
      cardsAllowedToCycleBackIn: [],
      cardsSeen: [],
      nextCard: 'test',
      pastCardQueue: [],
    },
  })

  if (message) {
    if (message === 'nextCard') {
      const nextCard = getNextCard(gameState)
    } else if (message === 'previousCard') {
      console.log('previous')
    }
  }

  const getRandomID = (n) => {
    if (n < 1) {
      throw new Error('n should be a positive')
    }

    // Generate a random index between 0 and n-1 (inclusive)
    const randomIndex = Math.floor(Math.random() * n)

    if (undefined || NaN) {
      // getRandomID(n)
    } else {
      return randomIndex
    }
  }

  const getFirstCard = () => {}

  const getNextCard = (gameState) => {}

  return
}

export default GameSystem
