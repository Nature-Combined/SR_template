import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { kakaoReducer } from "../store/slice/kakaoReducer";

export default function Kakao({ setMyInfo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        console.log("카카오 res.data", res.data);
        dispatch(kakaoReducer(res.data.result));
        // setMyInfo(res.data.kakao_account.email);
        navigate("/main");
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
