import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdMenuBook } from 'react-icons/md'
import './sidebar.scss'

export default function SubscribeSidebar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [stepHeight, setStepHeight] = useState(0)
  const sidebarRef = useRef()
  const indicatorRef = useRef()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item')
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`
      setStepHeight(sidebarItem.clientHeight)
    }, 50)
  }, [])

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[2]
    const activeItem = sidebarNavItems.findIndex((item) => item.section === curPath)
    setActiveIndex(curPath === undefined ? 0 : activeItem)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  // TODO: 메뉴명 변경
  const sidebarNavItems = [
    {
      display: '나를 구독한 사람',
      icon: <MdMenuBook />,
      to: '/subscribe',
      section: 'menu1',
    },
    {
      display: '내가 구독한 사람',
      icon: <MdMenuBook />,
      to: '/subscribe/menu2',
      section: 'menu2',
    },
  ]

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar__logo'>로고자리</div>
        <div ref={sidebarRef} className='sidebar__menu'>
          <div
            ref={indicatorRef}
            className='sidebar__menu__indicator'
            style={{
              transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`,
            }}
          ></div>
          {sidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                <div className='sidebar__menu__item__icon'>{item.icon}</div>
                <div className='sidebar__menu__item__text'>{item.display}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* // TODO: 동적으로 바꾸기 */}
      <div className='topbar'>admin님 반갑습니다.</div>
    </>
  )
}
