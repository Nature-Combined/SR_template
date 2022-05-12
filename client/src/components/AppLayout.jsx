import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const AppLayout = () => {
  return (
    <div
      style={{
        padding: '50px 0px 0px 370px',
        backgroundColor: '#000',
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AppLayout
