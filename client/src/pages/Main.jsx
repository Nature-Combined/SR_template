import React, { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Blank from "../pages/Blank";
import Home from "./Home";
import AddImage from "./MyCharacter/AddImage";
import AddMyChar from "../pages/MyCharacter/AddMyChar";

import { useSelector, useDispatch } from "react-redux";

import MyPageList from "./mypage/MyPageList";

import axios from "axios";
import { sublistReducer } from "../store/slice/sublist";

export default function Main() {
  const kakao = useSelector((state) => state.persist.kakao);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/subscribe/list?id=${kakao.user_info.id}`
      )
      .then((res) => {
        dispatch(sublistReducer(res.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {kakao.user_info.is_first ? (
            <Route index element={<AddMyChar />} />
          ) : (
            <Route index element={<Home />} />
          )}
          <Route path="/live" element={<Blank />} />
          <Route path="/create_video" element={<Blank />} />
          <Route path="/mypage/*" element={<MyPageList />} />
          <Route path="/addimage" element={<AddImage />} />
        </Route>
      </Routes>
    </Container>
  );
}

const Container = styled.div``;
