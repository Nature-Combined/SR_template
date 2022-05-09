import { Outlet } from 'react-router-dom'
import SubscribeSidebar from './SubscribeSidebar'

const SubscribeAppLayout = () => {
  return (
    <div
      style={{
        padding: '50px 0px 0px 370px',
      }}
    >
      <SubscribeSidebar />
      <Outlet />
    </div>
  )
}

export default SubscribeAppLayout
