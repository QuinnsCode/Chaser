import { MetaTags } from '@redwoodjs/web'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <div className="w-full border-2 border-solid border-gray-300">
        <div className="h-screen w-full">
          <hr />
        </div>
      </div>
    </>
  )
}

export default DashboardPage
