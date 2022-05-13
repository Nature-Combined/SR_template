import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Blank from "../pages/Blank";
import Home from "./Home";
import AddImage from "./MyCharacter/AddImage";
import AddMyChar from "../pages/MyCharacter/AddMyChar";

import { useSelector } from "react-redux";

export default function Main() {
  const kakao = useSelector((state) => state.persist.kakao);
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {kakao.is_first ? (
            <Route index element={<AddMyChar />} />
          ) : (
            <Route index element={<Home />} />
          )}
          <Route path="/live" element={<Blank />} />
          <Route path="/create_video" element={<Blank />} />
          <Route path="/mypage" element={<Blank />} />
          <Route path="/addimage" element={<AddImage />} />
        </Route>
      </Routes>
    </Container>
  );
}

const Container = styled.div``;
