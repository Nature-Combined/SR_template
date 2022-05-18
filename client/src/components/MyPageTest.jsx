import React, { useState } from "react";
import styled from "styled-components";

import Edit from "../image/edit.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { kakaoReducer } from "../store/slice/kakaoReducer";
import { useNavigate } from "react-router-dom";
import "../pages/mypage/myInfo.css";

import { BsCameraFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";

export default function MyPageTest() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const kakao = useSelector((state) => state.persist.kakao);
  const [profileImage, setProfileImage] = useState(
    kakao.user_info.profile_image
  );

  const handleProfile = (e) => {
    const image = e.target.files[0];
    // const imageUrl = URL.createObjectURL(image);

    const formData = new FormData();

    formData.append("profile", image);
    formData.append("id", kakao.user_info.id);

    axios
      .post(`${process.env.REACT_APP_API_URL}/mypage/myprofile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch(
          kakaoReducer({
            ...kakao.user_info,
            profile_image: res.data.profile_image,
          })
        );
        setProfileImage(res.data.profile_image);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <MyPageWrap>
        <MyPageShowWrap>
          <H2>마이페이지</H2>
          <MyPageShowFrom>
            <MyPageInfoForm>
              <MyPagePhotoForm>
                <PhotoForm>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${profileImage}`}
                    alt=""
                  ></img>
                  <FaUserAlt></FaUserAlt>
                </PhotoForm>
                <label htmlFor="file">
                  <BsCameraFill></BsCameraFill>
                </label>
                <PhotoAdd
                  type={"file"}
                  id={"file"}
                  onChange={(e) => {
                    handleProfile(e);
                  }}
                ></PhotoAdd>
              </MyPagePhotoForm>
              <MyPageInfo>
                <MyPageInfoWrap>
                  <MyPageSpan>내 이름</MyPageSpan>
                  <input
                    type={"text"}
                    value={"홍길동"}
                    placeholder={"변경할 이름을 입력해주세요"}
                    disabled
                  ></input>
                  <button>
                    <AiTwotoneEdit></AiTwotoneEdit>
                  </button>
                </MyPageInfoWrap>
                <MyPageInfoWrap>
                  <MyPageSpan>구독자 수</MyPageSpan>
                  <p>
                    <span id="subscriber">912</span>명
                  </p>
                  <button></button>
                </MyPageInfoWrap>
              </MyPageInfo>
            </MyPageInfoForm>
            <MyVideoFrom>
              <DefaultBtn>내 영상</DefaultBtn>
              <DefaultBtn>보관한 영상</DefaultBtn>
              <DefaultBtn>히스토리</DefaultBtn>
              <DefaultBtn>내 캐릭터 만들기</DefaultBtn>
              <DefaultBtn onClick={() => navigate("/main/mypage/settings")}>
                설정
              </DefaultBtn>
            </MyVideoFrom>
          </MyPageShowFrom>
        </MyPageShowWrap>
      </MyPageWrap>
    </Container>
  );
}
const Container = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
  margin-left: 320px;
  padding-top: 30px;
  padding-left: 30px;
  height: calc(100vh - 80px);
  background-color: #222222;
  color: ${({ theme }) => theme.color.basicText};
  @media only screen and (max-width: 992px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
const MyPageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #222;
  color: #eee;

  input:focus {
    position: relative;
    outline: none;
  }
`;
const DefaultBtn = styled.button`
  background-color: #5e5e5e;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  height: 34px;
  color: ${({ theme }) => theme.color.basicText};
  transition: all 0.2s;
  :hover {
    background-color: #878787;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

const MyPageShowWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 6%;
  right: 80px;
  height: 100%;
  @media only screen and (max-width: 992px) {
    margin: 0 3%;
  }
`;
const H2 = styled.h2`
  font-size: 30px;
  padding-left: 50px;
`;
const MyPageShowFrom = styled.div`
  padding: 0px 7%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 992px) {
    flex-flow: column;
  }
`;
const MyPageInfoForm = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media only screen and (max-width: 992px) {
    flex-flow: row;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 60px;
  }
`;
const MyPageInfo = styled.div`
  display: flex;
  flex-flow: column;
  margin: 10px 0;

  input {
    border: none;
    margin: 5px;
    padding: 5px;
    border-radius: 3px;
  }
`;
const MyPageInfoWrap = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  input {
    color: ${({ theme }) => theme.color.basicText};
    width: 40%;
    height: 35px;
    padding: 0 10px;
    background-color: transparent;
    text-align: center;
  }
  button {
    color: ${({ theme }) => theme.color.basicText};
    width: 25px;
    height: 25px;
    background-color: transparent;
    transition: all 0.2s;
    border: none;
  }
  button:focus {
    outline: none;
  }
  svg {
    font-size: 24px;
    transition: all 0.2s;
    color: ${({ theme }) => theme.color.basicText};
    height: 100%;
  }
  button:hover svg {
    color: ${({ theme }) => theme.color.pointColor};
  }
  p {
    margin: 5px !important;
    text-align: center;
    display: inline-block;
    width: 40%;
    height: 35px;
    padding: 0 10px;
  }
`;
const MyPagePhotoForm = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 180px;
  height: 180px;
  label {
    position: absolute;
    border: none;
    background-color: transparent;
    bottom: -10px;
    right: 5px;
    transition: all 0.2s;
    background-size: 50%;
    color: ${({ theme }) => theme.color.basicText};

    @media only screen and (max-width: 992px) {
      right: 0px;
    }
  }
  label:hover {
    color: ${({ theme }) => theme.color.pointColor};
    background-color: transparent;
  }
  svg {
    cursor: pointer;
    font-size: 40px;
  }
`;
const PhotoForm = styled.div`
  border-radius: 100%;
  overflow: hidden;
  width: 180px;
  height: 180px;
  background-color: #222;

  svg {
    text-align: center;
    width: 50%;
    height: 100%;
  }

  img {
    text-align: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const PhotoAdd = styled.input`
  display: none;
`;
const MyVideoFrom = styled.div`
  display: flex;
  flex-flow: column;
  width: 46%;

  button {
    width: 80%;
    height: 50px;
    margin: 25px 0;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    align-items: center;

    button {
      margin: 2%;
      width: 84%;
    }
  }
`;
const MyPageSpan = styled.span`
  display: inline-block;
  text-align: center;
  width: 19%;
  font-size: 16px;
  color: ${({ theme }) => theme.color.basicText};
`;
