import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import "./sidebar.scss";

import styled from "styled-components";
import Logo from '../image/virstory_logo.svg';

export default function MypageSidebar() {
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
      //TODO: 회원리스트 구독신청 및 여부 확인을 위한 더미데이터
      display: "회원정보",
      icon: <MdMenuBook />,
      to: "/mypage",
      section: "menu1",
    },
    {
      display: "나를 구독한 사람",
      icon: <MdMenuBook />,
      to: "/mypage/menu2",
      section: "menu2",
    },
    {
      display: "내가 구독한 사람",
      icon: <MdMenuBook />,
      to: "/mypage/menu3",
      section: "menu3",
    },
  ];

  return (
    <>
      <Container className="sidebar">
        <div className="sidebar__logo"><LogoSize src={Logo}></LogoSize></div>
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
      {/* <div className="topbar">admin님 반갑습니다.</div> */}
    </>
  );
}

const Container = styled.div`
  color: ${({ theme }) => theme.color.basic};
  background-color: ${({ theme }) => theme.color.sectionBg};
  box-shadow: ${({ theme }) => theme.boxShadow.box};
`;

const Menu = styled.div`
  color: ${({ theme }) => theme.color.textColor2};
  
`;
const LogoSize = styled.img `
  height: 120px;
`