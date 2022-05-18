import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./myInfo.css";
import { useDispatch } from "react-redux";
import { colorReducer } from "../../store/slice/color";

export default function MyInfo({ myInfo }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [toggleSwitch, setToggleSwitch] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  // const [upload, setUpload] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/mypage/myInfo`, {
        user: myInfo,
      })
      .then((res) => {
        if (res.data !== "유저정보가 없습니다.") {
          setUser(res.data.result);
          setProfileImage(res.data.result[0].profile_image);
          setToggleSwitch(res.data.result[0].color);
          dispatch(colorReducer(res.data.result[0].color));
        }
      })
      .then(() => setLoading(true))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myInfo, toggleSwitch, profileImage]);

  if (!loading) return null;

  const handleColor = () => {
    const color = user[0].color === "light" ? "dark" : "light";
    console.log(color);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/mycolor?id=${user[0].id}&color=${color}`
      )
      .then(() => setToggleSwitch(color))
      .then((res) => dispatch(colorReducer(color)))
      .catch((err) => console.log(err.response));
  };

  console.log(profileImage);

  const handleProfile = (e) => {
    const image = e.target.files[0];
    const imageUrl = URL.createObjectURL(image);

    const formData = new FormData();

    formData.append("profile", image);
    formData.append("id", user[0].id);

    axios
      .post(`${process.env.REACT_APP_API_URL}/mypage/myprofile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => setProfileImage(imageUrl))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {user.length ? (
        <Container>
          <MyWrap>
            <div className="member_photo_wrap">
              <ProfileBox className="member_photo">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${profileImage}`}
                  alt=""
                />
              </ProfileBox>
              <div className="photo_btn_from">
                <label className="photo_btn" htmlFor="file"></label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={(e) => {
                    handleProfile(e);
                  }}
                />
              </div>
            </div>
            <div className="member_info_wrap">
              <div className="member_info">
                <span>No.</span>
                <input type="text" disabled value={user[0].id} />
              </div>
              <MemberInfo className="member_info">
                <span>아이디</span>{" "}
                <input
                  type="text"
                  disabled={disabled}
                  defaultValue={user[0].user_id}
                />
              </MemberInfo>
              <MemberInfo className="member_info">
                <span>가입일</span>{" "}
                <input type="text" disabled value={user[0].created_time} />
              </MemberInfo>
              <MemberInfo className="member_info">
                <span>수정일</span>{" "}
                <input
                  type="text"
                  disabled
                  value={user[0].modified_time ? user[0].modified_time : ""}
                />
              </MemberInfo>
              <MemberInfo className="member_info">
                <span>sns_id</span>{" "}
                <input
                  type="text"
                  disabled={disabled}
                  defaultValue={user[0].sns_id}
                />
              </MemberInfo>
              <MemberInfo className="member_info">
                <span>sns_type</span>{" "}
                <input
                  type="text"
                  disabled={disabled}
                  defaultValue={user[0].sns_type}
                />
              </MemberInfo>

              <button
                className="member_btn"
                onClick={() => {
                  setDisabled(false);
                }}
              >
                수정하기
              </button>
              <div>{toggleSwitch} 모드</div>
              <ToggleBtn onClick={handleColor}>
                <ToggleInsideCircle toggle={toggleSwitch}></ToggleInsideCircle>
              </ToggleBtn>
            </div>
          </MyWrap>
        </Container>
      ) : (
        <div className="login_request_wrap">
          <ModeMemberInfo className="login_request">
            <span>!</span>로그인 후 이용가능합니다.
          </ModeMemberInfo>
        </div>
      )}
    </>
  );
}

const Container = styled.div`
  margin-top: 5vh;
  color: ${({ theme }) => theme.color.basic};
`;

const ProfileBox = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ModeMemberInfo = styled.div`
  color: ${({ theme }) => theme.color.basic};
`;

const ToggleBtn = styled.div`
  border-radius: 20px;
  border: 1px solid black;
  width: 60px;
  height: 30px;
  cursor: pointer;
`;

const ToggleInsideCircle = styled.div`
  border-radius: 100%;
  border: 1px solid green;
  width: 28px;
  height: 28px;
  background-color: ${({ toggle }) => (toggle === "dark" ? "white" : "green")};
  transform: ${({ toggle }) =>
    toggle === "dark" ? "translateX(110%)" : "translateX(0%)"};
  transition: all 0.5s ease;
`;

const MemberInfo = styled.div`
  color: ${({ theme }) => theme.color.textColor};
  display: flex;
  padding: 15px 0;
`;
const MyWrap = styled.div`
  border-radius: 10px;
  padding: 100px 20px;
  display: flex;
  align-items: center;
  margin-right: 100px;

  background-color: ${({ theme }) => theme.color.sectionBg};
  box-shadow: ${({ theme }) => theme.boxShadow.box};
`;
