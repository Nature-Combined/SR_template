import { Outlet } from 'react-router-dom'
import MypageSidebar from './MypageSidebar'

const MypageAppLayout = () => {
  return (
    <div
      style={{
        padding: '50px 0px 0px 370px',
      }}
    >
      <MypageSidebar />
      <Outlet />
    </div>
  )
}

export default MypageAppLayout
