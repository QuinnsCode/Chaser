import { useState } from 'react'

const InspectCardHoverUiPanel = ({ card, closeMe }) => {
  const [isRotated, setIsRotated] = useState(true)

  const str = isRotated
    ? '-ml-1/2  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform '
    : '-ml-1/2  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform '

  return (
    <div>
      <div
        className={`fixed z-50 w-5/6 ${str} max-w-screen-sm rounded-2xl border-2 border-white bg-black`}
      >
        <div className="rw-button-group">
          <button
            className="rw-button border-2 border-solid border-white bg-black text-center text-white"
            onClick={() => {
              closeMe()
            }}
          >
            Close X
          </button>
          {isRotated ? (
            <button
              className="rw-button border-2 border-solid border-white bg-black text-center text-white"
              onClick={() => {
                setIsRotated(false)
              }}
            >
              Unrotate
            </button>
          ) : (
            <button
              className="rw-button border-2 border-solid border-white bg-black text-center text-white"
              onClick={() => {
                setIsRotated(true)
              }}
            >
              Rotate
            </button>
          )}
        </div>
        {isRotated ? (
          <img
            alt={card.image.encodedString}
            src={card.image.encodedString}
            style={{ width: '100vh', maxWidth: '70%' }}
            className="mx-auto rotate-90"
          />
        ) : (
          <img
            alt={card.image.encodedString}
            src={card.image.encodedString}
            style={{ width: '100vh', maxWidth: '70%' }}
            className="mx-auto"
          />
        )}
        <hr />
        <div className="w-full">{card.name}</div>
        <hr />
        <div className="w-full">{'Plane - ' + card.plane}</div>
        <hr />
        <div className="w-full">{card.abilityDescription}</div>
        <hr />
        <div className="w-full">{card.chaosAbilityDescription}</div>
      </div>
    </div>
  )
}

export default InspectCardHoverUiPanel
