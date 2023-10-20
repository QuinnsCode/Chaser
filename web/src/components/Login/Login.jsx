import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react'

const Login = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <div className="rounded-2xl bg-black">
          <div className="inline-flex w-full flex-row-reverse px-2 opacity-40 hover:opacity-100">
            <UserButton afterSignOutUrl={window.location.href} />
            <div>
              <SignOutButton className="rw-button bg-black text-white hover:bg-gray-700 hover:text-white" />
            </div>
          </div>
          {/* <div className="inline-flex w-full">
            {currentUser ? (
              <>
                {currentUser?.roles[0] ? (
                  currentUser.roles.map((role) => {
                    return (
                      <div
                        key={JSON.stringify(role)}
                        className="bg-gradient-to-b from-black via-amber-800 to-fuchsia-800"
                      >
                        {JSON.stringify(role)}
                      </div>
                    )
                  })
                ) : (
                  <>No Role!</>
                )}
              </>
            ) : (
              <></>
            )}
          </div> */}
        </div>
      ) : (
        <>
          <SignInButton
            mode="modal"
            className="rw-button pointer-events-auto mr-2 inline-flex bg-white font-thin text-black hover:bg-black hover:text-white"
          />
          <SignUpButton className="rw-button inline-flex bg-teal-800 font-thin text-white hover:bg-teal-900 hover:text-white" />
        </>
      )}
      {currentUser && (
        <h1 className="bg-white font-thin text-black">
          Hello{' '}
          {currentUser?.firstName
            ? currentUser.firstName
            : currentUser.emailAddresses[0].emailAddress}
        </h1>
      )}
    </div>
  )
}

export default Login
