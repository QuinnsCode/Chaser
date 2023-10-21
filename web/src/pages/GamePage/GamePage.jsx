import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Game from 'src/components/GameComponents/Game/Game'

const GamePage = () => {
  const { currentUser, isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Game" description="Game page" />
      <div className="w-full border-2 border-solid border-gray-300 bg-black">
        <Game currentUser={currentUser} />
      </div>
    </>
  )
}

export default GamePage
