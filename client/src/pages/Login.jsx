import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Login() {
  const kakao = useSelector((state) => state.persist.kakao);

  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/oauth/kakao/logout`, {
        accessToken: kakao.token,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <Container>
        <Oauth>Google</Oauth>
        <Kakao
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`}
        >
          카카오로 시작하기
        </Kakao>
        <Naver>네이버로 시작하기</Naver>
      </Container>
      <Logout onClick={handleLogout}>로그아웃</Logout>
      {/* <Logout
        href={`https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_CLIENT_ID}&logout_redirect_uri=${process.env.REACT_APP_URL}`}
      >
        로그아웃
      </Logout> */}
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Oauth = styled.a`
  width: 80%;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  background-color: #ff5959;
  color: #efefef;
  font-weight: bold;
  cursor: pointer;
`;
const Kakao = styled(Oauth)`
  background-color: #dfdf5f;
`;
const Naver = styled(Oauth)`
  background-color: green;
`;
const LogoutA = styled.a``;

const Logout = styled.div``;
