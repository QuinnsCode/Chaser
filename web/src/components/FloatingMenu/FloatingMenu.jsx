import { useRef, useEffect, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

import Login from 'src/components/Login/Login'

const FloatingMenu = ({ currentUser }) => {
  const currentUserObj = currentUser
  // STATES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)
  const openCloseButtonRef = useRef(null)

  // FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const handleClick = (event) => {
    // if click is outside the menu close it unless showMenu is true
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      if (
        openCloseButtonRef.current &&
        !openCloseButtonRef.current.contains(event.target)
      ) {
        setShowMenu(false)
      }
    } else if (
      openCloseButtonRef.current &&
      openCloseButtonRef.current.contains(event.target) &&
      showMenu
    ) {
      setShowMenu(false)
    } else return
  }

  // EFFECTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    window.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <>
      <div className="group absolute right-1 top-1 h-12 w-20 items-center justify-center text-center text-white">
        <div className="fixed right-0 top-0.5 w-fit opacity-25 transition-opacity group-hover:opacity-100">
          <button
            ref={openCloseButtonRef}
            onClick={() => {
              setShowMenu(!showMenu)
            }}
            className="rw-button w-fit rounded-full border-2 border-solid border-white bg-gradient-to-b from-gray-800 via-black to-gray-800 px-1 py-0.5 font-light text-white hover:bg-gradient-to-br hover:from-teal-700 hover:via-teal-900 hover:to-teal-600"
          >
            Menu
          </button>
        </div>
      </div>
      <div>
        {showMenu ? (
          <>
            <div
              ref={menuRef}
              className="absolute right-5 top-10 z-50 w-fit min-w-fit rounded-2xl border-2 border-solid border-white bg-black bg-opacity-80 px-1 text-right shadow-sm shadow-white transition duration-1000 ease-in-out sm:inline sm:w-fit md:inline md:w-fit lg:inline lg:w-fit xl:inline xl:w-fit 2xl:inline 2xl:w-fit"
            >
              {!currentUserObj && (
                <div className="rounded-2xl bg-opacity-60 blur-none">
                  <Login currentUser={currentUserObj} />
                </div>
              )}
              {currentUser && (
                <div className="rounded-2xl bg-opacity-60 blur-none">
                  <Login currentUser={currentUserObj} />
                </div>
              )}
              <div className="my-1  mr-2 inline-flex rounded-2xl bg-opacity-60 text-center">
                <Link to={routes.home()}>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="rw-button rounded-full border-2 border-solid border-white bg-black text-white hover:bg-gray-800"
                  >
                    Home
                  </button>
                </Link>
              </div>
              <hr />
              <div className="my-1  mr-2 inline-flex rounded-2xl bg-opacity-60 text-center">
                <Link to={routes.dashboard()}>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="rw-button rounded-full border-2 border-solid border-white bg-black text-white hover:bg-gray-800"
                  >
                    Dashboard
                  </button>
                </Link>
              </div>
              <hr />
              <div className="my-1  mr-2 inline-flex rounded-2xl bg-opacity-60 text-center">
                <Link to={routes.game()}>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="rw-button rounded-full border-2 border-solid border-white bg-black text-white hover:bg-gray-800"
                  >
                    Game
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default FloatingMenu
