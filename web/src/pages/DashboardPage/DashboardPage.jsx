import { useState } from 'react'

import { SignInButton, UserButton, useSession } from '@clerk/clerk-react'

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import CardSettings from 'src/components/CardSettings/CardSettings'

const DashboardPage = () => {
  const { isAuthenticated } = useAuth()

  const [showCardSettings, setShowCardSettings] = useState(false)

  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <div className="w-full items-center border-2 border-solid border-gray-300 bg-black text-white">
        <div className="h-screen w-full">
          <div className="inline-flex w-full items-center">
            User Settings:
            {isAuthenticated ? (
              <>
                <UserButton afterSignOutUrl={window.location.href} />
              </>
            ) : (
              <SignInButton />
            )}
          </div>
          <hr />
          <ul>
            <li className="w-full hover:bg-gray-900">
              <div className="w-full">
                {showCardSettings ? (
                  <button
                    className="rw-button rounded-2xl border-2 border-solid bg-white text-black hover:border-emerald-600 hover:bg-gray-200 hover:text-black"
                    onClick={() => {
                      setShowCardSettings(false)
                    }}
                  >
                    Card Settings
                  </button>
                ) : (
                  <button
                    className="rw-button rounded-2xl border-2 border-solid border-emerald-800 bg-black text-white hover:border-red-300 hover:bg-gray-800"
                    onClick={() => {
                      setShowCardSettings(true)
                    }}
                  >
                    Card Settings
                  </button>
                )}
              </div>
              <div className="w-full">
                {!showCardSettings ? (
                  <div className="rounded-2xl border-2 border-white px-1 py-2">
                    <CardSettings />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </li>
            <hr />
            <li className="w-full hover:bg-gray-900">Friends List</li>
            <hr />
            <li className="w-full hover:bg-gray-900">Friends List</li>
            <hr />
            <li className="w-full hover:bg-gray-900">Friends List</li>
            <hr />
            <li className="w-full hover:bg-gray-900">Friends List</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
