import { useRef, useEffect } from 'react'

// import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@clerk/clerk-react'

import FloatingMenu from 'src/components/FloatingMenu/FloatingMenu'

const DefaultLayout = ({ children }) => {
  const { currentUser } = useAuth()

  const currentUserRef = useRef('')

  useEffect(() => {
    if (currentUser) {
      currentUserRef.current = currentUser
    }
  }, [currentUser])

  return (
    <>
      <header></header>
      <hr />
      <div className="w-full">
        <FloatingMenu currentUser={currentUser} />
        <main>
          <div className="border-2 border-solid border-black text-black">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default DefaultLayout
