import { MetaTags } from '@redwoodjs/web'

import Game from 'src/components/GameComponents/Game/Game'
const GamePage = () => {
  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <h1 className="text-center">G a m e P a g e</h1>
      <div className="w-full border-2 border-solid border-gray-300">
        <Game />
      </div>
    </>
  )
}

export default GamePage
