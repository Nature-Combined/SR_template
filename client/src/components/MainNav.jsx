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
  width: 245.98px;
`;

const SearchForm = styled.div`
  position: relative;

  input {
    width: 600px;
    padding: 10px;
    border: 2px solid #c0392b;
    border-radius: 5px;
  }
  img {
    cursor: pointer;
    width: 30px;
    position: absolute;
    right: 10px;
    top: 8px;
    filter: invert(20%) sepia(82%) saturate(1839%) hue-rotate(343deg)
      brightness(110%) contrast(90%);
  }
`;

const DefaultBtnForm = styled.div`
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

  :hover {
    background-color: #838383;
  }
`;

const BroadcastBtn = styled.button`
  background-color: #c0392b !important;
  border: none;
  border-radius: 3px;
  margin-right: 100px;
  width: 100px;
  height: 43px !important;
  color: #fff;
  :hover {
    background-color: #d7402f !important;
  }
`;
