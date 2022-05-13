import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
export default function MainNav() {
  return (
    <Container>
      <NavBox>
        <SearchBox>
          <div>
            <input type="text" placeholder="검색" />
          </div>
          <div>
            <BsSearch />
          </div>
        </SearchBox>
        <LiveBox>
          <LiveBtn>방송하기</LiveBtn>
        </LiveBox>
        <LogoutBox>
          <LogoutBtn>로그아웃</LogoutBtn>
        </LogoutBox>
      </NavBox>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  padding-left: 320px;
  width: 100%;
  height: 80px;
  background-color: #222;
  /* line-height: 80px; */
`;

const NavBox = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-between;
`;
const SearchBox = styled.div`
  /* border: 1px green solid; */

  height: inherit;
  width: 200px;
  flex: 4;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  & div {
    /* border: 2px solid red; */
    height: 50px;

    > input {
      height: 50px;
      width: 25rem;
      padding: 4px;
      outline: none;
      border: none;
    }

    > svg {
      height: inherit;
    }
  }

  > :nth-child(2) {
    background-color: #efefef;
    width: 50px;
  }
`;

const LiveBox = styled.div`
  /* border: 1px gray solid; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutBox = styled.div`
  /* border: 2px red solid; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LiveBtn = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 4px;
  background-color: red;
  color: #efefef;
  font-weight: 600;
`;

const LogoutBtn = styled(LiveBtn)`
  font-size: 0.8rem;
  padding: 0.5rem;
  background-color: #d3d3d3;
  border-radius: 4px;
  color: #efefef;
`;
