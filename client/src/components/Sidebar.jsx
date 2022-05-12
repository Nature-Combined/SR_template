import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";

import styled from "styled-components";
import "./sidebar.scss";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[2];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath === undefined ? 0 : activeItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // TODO: 메뉴명 변경
  const sidebarNavItems = [
    {
      display: "공지사항",
      icon: <MdMenuBook />,
      to: "/admin",
      section: "menu1",
    },
    {
      display: "Oauth",
      icon: <MdMenuBook />,
      to: "/admin/oauth",
      section: "oauth",
    },
    {
      display: "Category",
      icon: <MdMenuBook />,
      to: "/admin/category",
      section: "category",
    },
    {
      display: "menu4",
      icon: <MdMenuBook />,
      to: "/admin/menu4",
      section: "menu4",
    },
    {
      display: "menu5",
      icon: <MdMenuBook />,
      to: "/admin/menu5",
      section: "menu5",
    },
  ];

  return (
    <>
      <Container className="sidebar">
        <div className="sidebar__logo">로고자리</div>
        <div ref={sidebarRef} className="sidebar__menu">
          <div
            ref={indicatorRef}
            className="sidebar__menu__indicator"
            style={{
              transform: `translateX(-50%) translateY(${
                activeIndex * stepHeight
              }px)`,
            }}
          ></div>
          {sidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <Menu
                className={`sidebar__menu__item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="sidebar__menu__item__icon">{item.icon}</div>
                <div className="sidebar__menu__item__text">{item.display}</div>
              </Menu>
            </Link>
          ))}
        </div>
      </Container>
      {/* // TODO: 동적으로 바꾸기 */}
      <div className="topbar">admin님 반갑습니다.</div>
    </>
  );
}

const Container = styled.div`
  color: ${({ theme }) => theme.color.basic};
`;

const Menu = styled.div`
  color: ${({ theme }) => theme.color.basic};
`;
