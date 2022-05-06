import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Kakao() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/oauth/kakao`,
        {
          code: authorizationCode,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // setAccessToken(res.data.accessToken);
        console.log(res.data);
        // navigate("/")
      })
      .catch((err) => console.log(err.response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Container>카카오입니다.</Container>;
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
