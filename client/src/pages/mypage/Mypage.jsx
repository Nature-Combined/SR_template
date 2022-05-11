import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import MypageAppLayout from "../../components/MypageAppLayout";
import SubscribeToMeList from "./SubscribeToMeList";
import SubscribeList from "./SubscribeList";
import MyInfo from "./MyInfo";
import { Route, Routes } from "react-router-dom";

function Mypage({ myInfo }) {
  return (
    <Container>
      {/* TODO: path 변경 */}
      <Routes>
        <Route path="/" element={<MypageAppLayout />}>
          <Route index element={<MyInfo myInfo={myInfo} />} />
          <Route
            path="/menu2"
            element={<SubscribeToMeList myInfo={myInfo} />}
          />
          <Route path="/menu3" element={<SubscribeList myInfo={myInfo} />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default Mypage;

const Container = styled.div`
  margin-top: 5vh;
`;
