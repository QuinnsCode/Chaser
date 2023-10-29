import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="w-full border-2 border-solid border-gray-300">
        <h1 className="h-9 bg-gradient-to-r from-gray-900 via-black to-gray-900 pl-2 text-center font-bold uppercase tracking-widest text-white hover:bg-gray-900">
          H o m e P a g e
        </h1>
        <hr />
        <div className="bg-black text-white transition-colors duration-1000">
          {currentUser ? (
            <>
              <div className="h-screen w-full text-center">
                <div className="w-full">Thank you for signing up!</div>

                <div className="w-full">
                  <div className="inline-flex"></div>
                  <div className="inline-flex"></div>
                  <div className="inline-flex"></div>Use Menu button up in
                  top-right to continue!
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="h-screen w-full">
                <p>Hi there,</p>
                <p>you can use Sign Up/ Sign In in top right to continue</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
