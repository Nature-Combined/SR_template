import { useState } from "react";
import MyPageSettingsSideBar from "../../components/MyPageSettingsSideBar";
import MyPageNotification from "../../components/settings/MyPageNotification";
import TermsOfService from "../../components/settings/TermsOfService";
import Modal from "../../components/settings/Modal";
import styled from "styled-components";

export default function Settings() {
  const [ModalOnOff, setModalOnOff] = useState(false);
  return (
    <>
      <MyPageSettingsSideBar />
      <MyPageNotification />
      <TermsOfService setModalOnOff={setModalOnOff} />
      {ModalOnOff && <Modal setModalOnOff={setModalOnOff} />}
      <TempBox>
        <div>알림설정</div>
        <div>로그아웃</div>
        <div>회원탈퇴</div>
      </TempBox>
    </>
  );
}

const TempBox = styled.div`
  margin-left: 320px;
`;
