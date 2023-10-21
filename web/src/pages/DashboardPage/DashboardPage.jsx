import { MetaTags } from '@redwoodjs/web'
import { SignInButton, UserButton, useSession } from '@clerk/clerk-react'

import { useAuth } from 'src/auth'

const DashboardPage = () => {

  const { currentUser, isAuthenticated } = useAuth()


  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <div className="w-full border-2 border-solid border-gray-300">
        <div className="h-screen w-full">
          <>{isAuthenticated ? (<><UserButton afterSignOutUrl={window.location.href} />
            <h1>Hello {currentUser.id}</h1></>
          ) : (
            <SignInButton />
          )}</>
          <ul>
            <li className='w-full hover:bg-gray-100'>Friends List</li>
            <hr/>
            <li className='w-full hover:bg-gray-100'>Friends List</li>
            <hr/>
            <li className='w-full hover:bg-gray-100'>Friends List</li>
            <hr/>
            <li className='w-full hover:bg-gray-100'>Friends List</li>
            <hr/>
            <li className='w-full hover:bg-gray-100'>Friends List</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
