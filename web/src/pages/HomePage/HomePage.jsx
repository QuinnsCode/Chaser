import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="w-full border-2 border-solid border-gray-300">
        <h1 className="h-7 bg-black pl-2 text-white hover:bg-gray-900">
          H o m e P a g e
        </h1>
        <hr />
        <div className="bg-black text-white transition-colors duration-1000">
          {isAuthenticated ? (
            <>
              <div className="h-screen w-full">
                Hi there, you can use Menu in top right to continue
              </div>
            </>
          ) : (
            <>
              <div className="h-screen w-full">
                Hi there, you can use Sign Up/ Sign In in top right to continue
              </div>
            </>
          )}
          {isAuthenticated && currentUser && (
            <div className="h-screen w-full">
              Hi there, {currentUser.firstName}
            </div>
          )}
          {isAuthenticated && !currentUser && (
            <div className="h-screen w-full">
              Hi there, {currentUser.firstName}
            </div>
          )}
        </div>{' '}
      </div>
    </>
  )
}

export default HomePage
