import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react'

const Login = ({ currentUser }) => {
  const currentUserObj = currentUser
  return (
    <div>
      {currentUserObj ? (
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
          <SignOutButton />
        </div>
      ) : (
        <>
          <SignInButton className="rw-button  pointer-events-auto ml-1 mr-3 inline-flex border-2 border-solid border-white bg-black font-thin text-white hover:bg-gray-600 hover:text-white" />
          <SignUpButton className="rw-button pointer-events-auto my-1 mr-1 inline-flex border-2 border-solid border-white bg-black font-thin text-white hover:bg-gray-600 hover:text-white" />
        </>
      )}
      {/* {currentUserObj && (
        <h1 className="bg-white font-thin text-black">
          {currentUserObj?.firstName
            ? currentUserObj.firstName
            : currentUserObj.emailAddresses[0].emailAddress}
        </h1>
      )} */}
    </div>
  )
}

export default Login
