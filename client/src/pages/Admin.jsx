import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Blank from "./Blank";
import Notification from "./admin/Notification";
import Category from "./admin/Category";

function Admin() {
  return (
    <Container>
      {/* TODO: path 변경 */}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Notification />} />
          <Route path="/oauth" element={<Blank />} />
          <Route path="/category" element={<Category />} />
          <Route path="/menu4" element={<Blank />} />
          <Route path="/menu5" element={<Blank />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default Admin;

const Container = styled.div`
  margin-top: 5vh;
`;
