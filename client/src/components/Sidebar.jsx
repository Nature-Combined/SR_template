import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";

import styled from "styled-components";
import "./sidebar.scss";
import Logo from "../image/virstory_logo.svg";

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
    setActiveIndex(activeItem === -1 ? 0 : activeItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // TODO: 메뉴명 변경
  const sidebarNavItems = [
    {
      display: "홈",
      icon: <MdMenuBook />,
      to: "/main",
      section: "main",
    },
    {
      display: "라이브",
      icon: <MdMenuBook />,
      to: "/main/live",
      section: "live",
    },
    {
      display: "영상 만들기",
      icon: <MdMenuBook />,
      to: "/main/create_video",
      section: "create_video",
    },
    {
      display: "마이페이지",
      icon: <MdMenuBook />,
      to: "/main/mypage",
      section: "mypage",
    },
  ];

  return (
    <>
      <Container className="sidebar">
        <div className="sidebar__logo">
          <Link to="/">
            <LogoSize src={Logo}></LogoSize>
          </Link>
        </div>
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
            <Link style={{ textDecoration: "none" }} to={item.to} key={index}>
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
          <hr style={{ width: "80%", margin: "0 auto" }}></hr>
          <SubscribeBox>구독</SubscribeBox>
        </div>
      </Container>
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
const LogoSize = styled.img`
  height: 150px;
`;

const SubscribeBox = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1rem 3rem;
`;
