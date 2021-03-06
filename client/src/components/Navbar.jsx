import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);

  return (
    <Container>
      <MenuContainer hide={hide}>
        <MenuBox onClick={() => navigate("/")}>home</MenuBox>
        <MenuBox onClick={() => navigate("/admin")}>관리자</MenuBox>
        <MenuBox onClick={() => navigate("/mypage")}>정보수정</MenuBox>
        <MenuBox onClick={() => navigate("/vod")}>VOD</MenuBox>
        <MenuBox>메뉴5</MenuBox>
      </MenuContainer>
      <MenuIcon onClick={() => setHide((pre) => !pre)}>
        {hide ? "icon 넣을 자리 열기" : "닫기"}
      </MenuIcon>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 58px;
  color: ${({ theme }) => theme.color.basic};
  background-color: ${({ theme }) => theme.color.sectionBg};
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    display: ${({ hide }) => (hide ? "none" : null)};
  }
`;

const MenuBox = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  color: ${({ theme }) => theme.color.textColor};
  cursor: pointer;

  :hover {
    background-color: #d3d3d3;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 550;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobileL} {
    display: block;
  }
`;
