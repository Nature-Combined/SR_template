import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { FaBars } from "react-icons/fa";
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
    <SidebarWrap>
      <NavBar>
        <FaBars></FaBars>
      </NavBar>
      <Bg></Bg>
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
    </SidebarWrap>
  );
}
const SidebarWrap = styled.div``;
const NavBar = styled.div`
  display: none;
  svg {
    background-color: ${({ theme }) => theme.boxShadow.box};
    cursor: pointer;
    width: 100%;
    transition: all 0.3s;
  }
  svg:hover {
    color: ${({ theme }) => theme.color.pointColor};
  }
  @media only screen and (max-width: 992px) {
    display: block;
    font-size: 40px;
    position: absolute;
    top: 9px;
    left: 30px;
    color: #efefef;
    svg {
      font-size: 40px;
    }
  }
`;
const Bg = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: #222222cf;
  z-index: 3;
`;
const Container = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  color: ${({ theme }) => theme.color.basic};
  background-color: ${({ theme }) => theme.color.sectionBg};
  box-shadow: ${({ theme }) => theme.boxShadow.box};

  @media only screen and (max-width: 992px) {
    display: none;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 576px) {
    display: none;
  }
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
