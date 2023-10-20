import { MetaTags } from '@redwoodjs/web'

import FloatingMenu from 'src/components/FloatingMenu/FloatingMenu'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <div className="w-full border-2 border-solid border-gray-300">
        <div className="h-screen w-full">Hi there</div>
        <FloatingMenu />
      </div>
    </>
  )
}

export default HomePage
