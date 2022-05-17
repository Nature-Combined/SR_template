import React from "react";
import styled from "styled-components";
// import axios from "axios";
// import { useSelector } from "react-redux";
import Logo from "../components/Logo";

export default function Login() {
  // const kakao = useSelector((state) => state.persist.kakao);

  // const handleLogout = () => {
  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/oauth/kakao/logout`, {
  //       accessToken: kakao.token,
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.response));
  // };

  return (
    <>
      <LoginHomeBg>
        <Container>
          <Logo />
          <Oauth>Google로 시작하기</Oauth>
          <Kakao
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`}
          >
            카카오로 시작하기
          </Kakao>
          <Naver>네이버로 시작하기</Naver>
          <Apple>애플로 시작하기</Apple>
        </Container>
        {/* <Logout onClick={handleLogout}>로그아웃</Logout> */}
        {/* <Logout
        href={`https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_CLIENT_ID}&logout_redirect_uri=${process.env.REACT_APP_URL}`}
      >
        로그아웃
      </Logout> */}
      </LoginHomeBg>
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
  color: #fff;
`;

const Oauth = styled.a`
  width: 28%;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  background-color: #c0392b;
  color: #efefef;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: #8f2d22;
    text-decoration: none;
    color: #fff;
  }
`;
const Kakao = styled(Oauth)`
  background-color: #f1c40f;

  :hover {
    background-color: #cba40c;
    text-decoration: none;
    color: #fff;
  }
`;
const Naver = styled(Oauth)`
  background-color: #27ae60;
  :hover {
    background-color: #1f884a;
    text-decoration: none;
    color: #fff;
  }
`;
const Apple = styled(Oauth)`
  background-color: #bebebe;
  :hover {
    background-color: #878787;
    text-decoration: none;
    color: #fff;
  }
`;

const LoginHomeBg = styled.div`
  background-color: ${({ theme }) => theme.color.bg};
`;
