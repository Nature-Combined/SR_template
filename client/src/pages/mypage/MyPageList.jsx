import React from "react";
import { Routes, Route } from "react-router-dom";

import MyPageTest from "../../components/MyPageTest";
import Settings from "./Settings";
export default function MyPageList() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyPageTest />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}
