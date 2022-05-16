import React from "react";
import styled from "styled-components";
import SearchImg from "../image/search.svg";
export default function MainNav() {
  return (
    <MyPageHead>
      <SideWidth></SideWidth>
      <SearchForm>
        <input placeholder={"검색"}></input>
        <img src={SearchImg} alt=""></img>
      </SearchForm>
      <DefaultBtnForm>
        <BroadcastBtn>방송하기</BroadcastBtn>
        <DefaultBtn>회원가입</DefaultBtn>
        <DefaultBtn>로그인</DefaultBtn>
      </DefaultBtnForm>
    </MyPageHead>
  );
}

const MyPageHead = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 110px;
  background-color: #222;

  input {
    outline: none;
  }
  button {
    outline: none;
  }
`;
const SideWidth = styled.div`
  width: 200px;
`;

const SearchForm = styled.div`
  position: relative;
  width: 35%;

  input {
    width: 100%;
    padding: 10px;
    border: 3px solid #fff;
    border-radius: 5px;
    transition: all 0.3s;
  }
  input:focus {
    border: 3px solid #c0392b;
  }
  img {
    cursor: pointer;
    width: 30px;
    position: absolute;
    right: 10px;
    top: 9px;
    filter: invert(20%) sepia(82%) saturate(1839%) hue-rotate(343deg)
      brightness(110%) contrast(90%);
  }
`;

const DefaultBtnForm = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-evenly;
  width: 400px;
  align-items: center;
`;
const DefaultBtn = styled.button`
  background-color: #5e5e5e;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  height: 34px;
  color: #fff;
  transition: all 0.3s;
  :hover {
    background-color: #878787;
  }
`;

const BroadcastBtn = styled.button`
  background-color: #c0392b !important;
  border: none;
  border-radius: 3px;
  margin-right: 100px;
  width: 100px;
  height: 50px !important;
  color: #fff;
  transition: all 0.3s;
  :hover {
    background-color: #ff4c38 !important;
  }
`;
