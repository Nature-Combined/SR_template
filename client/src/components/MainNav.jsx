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
        <DefaultBtn>로그아웃</DefaultBtn>
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
  @media only screen and (max-width: 992px) {
    padding: 0 2%;
  }
  @media only screen and (max-width: 768px) {
    padding: 0%;
  }
  @media only screen and (max-width: 576px) {
  }
`;
const SideWidth = styled.div`
  width: 20%;
  @media only screen and (max-width: 992px) {
    padding: 0 2%;
  }
`;

const SearchForm = styled.div`
  position: relative;
  width: 35%;

  @media only screen and (max-width: 992px) {
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
  @media only screen and (max-width: 576px) {
    width: 46%;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 3px solid #fff;
    border-radius: 5px;
    transition: all 0.3s;
  }
  input:focus {
    border: 3px solid ${({ theme }) => theme.color.pointColor};
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
  font-size: 13px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 992px) {
    width: 20%;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    margin-right: 1%;
  }
`;
const DefaultBtnWrap = styled.div`
  display: flex;
  flex-flow: row;
  @media only screen and (max-width: 992px) {
  }
`;
const DefaultBtn = styled.button`
  margin: 2%;
  background-color: #5e5e5e;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  width: 100px;
  height: 100%;
  color: ${({ theme }) => theme.color.basicText};
  transition: all 0.3s;
  :hover {
    background-color: #878787;
  }
  @media only screen and (max-width: 992px) {
    width: 120px;
  }
  @media only screen and (max-width: 768px) {
    width: 120px;
  }
  @media only screen and (max-width: 576px) {
    width: 120px;
  }
`;

const BroadcastBtn = styled.button`
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.pointColor} !important;
  border: none;
  border-radius: 3px;
  margin-right: 15%;
  width: 160px !important;
  height: 50px !important;
  color: ${({ theme }) => theme.color.basicText};
  transition: all 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.color.pointColor2} !important;
  }
  @media only screen and (max-width: 992px) {
    margin-right: 2%;
    width: 160px;
  }
`;
