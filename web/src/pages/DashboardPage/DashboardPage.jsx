import { MetaTags } from '@redwoodjs/web'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <div className="w-full border-2 border-solid border-gray-300">
        <div className="h-screen w-full">
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
