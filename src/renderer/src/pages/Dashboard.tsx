import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'
import { Outlet } from 'react-router-dom'

function Dashboard(): JSX.Element {
  return (
    <div className="flex h-screen bg-graybg">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <div className="flex-grow p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
