import { useRef, useEffect } from 'react'

// import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'
import FloatingMenu from 'src/components/FloatingMenu/FloatingMenu'

const DefaultLayout = ({ children }) => {
  const { currentUser } = useAuth()

  const id = currentUser?.id

  console.log({ id })

  const currentUserRef = useRef('')

  useEffect(() => {
    if (currentUser) {
      console.log({ currentUser })
      currentUserRef.current = currentUser
    }
  }, [currentUser])

  return (
    <>
      <header>
        {/* <nav>
          <ul>
            <li>
              <Link to={routes.dashboard()}>Dashboard</Link>
            </li>
            <li>
              <Link to={routes.game()}>Game</Link>
            </li>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <hr />
      {currentUser?.id && (
        <>
          <FloatingMenu currentUser={currentUser} />
          <main>
            <div className="border-2 border-solid border-black text-black">
              {children}
            </div>
          </main>
        </>
      )}
    </>
  )
}

export default DefaultLayout
