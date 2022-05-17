import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";

import styled, { css } from "styled-components";
import "./sidebar.scss";
import Logo from "../image/virstory_logo.svg";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  const subList = useSelector((state) => state.sublist.list);
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

  const timeFormat = (time) => {
    if (moment().diff(time, "minutes") < 60) {
      return `${moment().diff(time, "minutes")} 분 전 방송`;
    } else if (moment().diff(time, "hours") < 24) {
      return `${moment().diff(time, "hours")} 시간 전 방송`;
    } else {
      return `${moment().diff(time, "days")} 일 전 방송`;
    }
  };

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
          <SubBox>
            <TitleBox>구독</TitleBox>
            {subList.map((item) => (
              <SubInfoBox key={uuidv4()}>
                <ProfileBox isLive={item.is_live === "true"}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${item.profile_image}`}
                    alt=""
                  />
                </ProfileBox>
                <InfoBox>
                  <UserName>{item.user_id}</UserName>
                  {item.is_live === "true" ? (
                    <SubNum>{item.viewer_num} 명 시청중</SubNum>
                  ) : (
                    <SubNum>{timeFormat(item.live_end_time)}</SubNum>
                  )}
                </InfoBox>
              </SubInfoBox>
            ))}
          </SubBox>
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

const SubBox = styled.div`
  height: 40vh;
  overflow-y: auto;
`;

const TitleBox = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1rem 3rem;
`;

const SubInfoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  gap: 1rem;
`;

const ProfileBox = styled.div`
  position: relative;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  ${({ isLive }) => {
    return (
      isLive &&
      css`
        ::after {
          position: absolute;
          bottom: 0;
          right: 5px;
          display: inline-block;
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background-color: red;
        }
      `
    );
  }}

  img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

const InfoBox = styled.div``;

const UserName = styled.div``;

const SubNum = styled.div`
  width: 130px;
`;
