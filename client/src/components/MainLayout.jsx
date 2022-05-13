import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainNav from "./MainNav";
// import styled from "styled-components";
// import Logo from "../image/virstory_logo.svg";

export default function MainLayout() {
  return (
    <div>
      {/* TODO: 로고 상단 navbar로 이동시 주석해제 .sidebar css top 수정 */}
      {/* <LogoBox src={Logo} alt="" /> */}
      <MainNav />
      <Sidebar />
      <Outlet />
    </div>
  );
}

// const LogoBox = styled.img`
//   height: 120px;
// `;
