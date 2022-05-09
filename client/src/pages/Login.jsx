import React from 'react'
import styled from 'styled-components'

export default function Login() {
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
    </>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const Oauth = styled.a`
  width: 80%;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  background-color: #ff5959;
  color: #efefef;
  font-weight: bold;
  cursor: pointer;
`
const Kakao = styled(Oauth)`
  background-color: #dfdf5f;
`
const Naver = styled(Oauth)`
  background-color: green;
`
