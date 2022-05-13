import React from "react";
import styled from "styled-components";
import LogoImg from '../image/virstory_logo.svg';
import CameraImg from '../image/camera.svg';
import SearchImg from '../image/search.svg';
import { Link } from "react-router-dom";
import Thumbnail from '../image/thumbnail.jpg';
import { DefaultContext } from "react-icons/lib";

export default function MyPageTest() {
    return (
        <>
            <MyPageWrap>
                <MyPageHead>
                    <SideWidth></SideWidth>
                    <SearchForm><input placeholder={"검색"}></input><img src={SearchImg}></img></SearchForm>
                    <DefaultBtnForm>
                        <BroadcastBtn>방송하기</BroadcastBtn>
                        <DefaultBtn>회원가입</DefaultBtn>
                        <DefaultBtn>로그인</DefaultBtn>
                    </DefaultBtnForm>

                </MyPageHead>
                <MyPageShow>

                    <MyPageSide>
                        <LogoFrom>
                            <img src={LogoImg}></img>
                        </LogoFrom>
                        {/* <ul>
                            <li><Link to={""}>홈</Link></li>
                            <li><Link to={""}>프로필 사진</Link></li>
                            <li><Link to={""}>구독자 수</Link></li>
                            <li><Link to={""}></Link></li>
                        </ul> */}
                    </MyPageSide>
                    <MyPageShowWrap>
                        <MyPageShowFrom>
                            <MyPageH2>마이페이지</MyPageH2>
                            <MyPageInfoForm>
                                <MyPagePhotoForm>
                                    <MyPageH3>프로필 사진</MyPageH3>
                                    <PhotoForm>
                                        <img src={Thumbnail}></img>
                                    </PhotoForm>
                                    <label className="photo_btn" htmlFor="file"></label>
                                    <PhotoAdd type={"file"} id={"file"}></PhotoAdd>
                                </MyPagePhotoForm>
                                <MyPageInfo>
                                    <MyPageInfoWrap>
                                        <MyPageSpan>내 이름</MyPageSpan>
                                        <input type={"text"} value={"홍길동"} placeholder={"변경할 이름을 입력해주세요"} disabled></input>
                                        <DefaultBtn>수정</DefaultBtn>
                                    </MyPageInfoWrap>
                                    <MyPageInfoWrap>
                                        <MyPageSpan>구독자 수</MyPageSpan>
                                        <input type={"text"} disabled />
                                    </MyPageInfoWrap>
                                </MyPageInfo>
                            </MyPageInfoForm>
                            <MyVideoFrom>
                                        <DefaultBtn>내 영상</DefaultBtn>
                                        <DefaultBtn>보관한 영상</DefaultBtn>
                                        <DefaultBtn>히스토리</DefaultBtn>
                                        <DefaultBtn>내 캐릭터 만들기</DefaultBtn>
                                        <DefaultBtn>설정</DefaultBtn>
                                    </MyVideoFrom>
                        </MyPageShowFrom>

                    </MyPageShowWrap>
                </MyPageShow>
            </MyPageWrap>
        </>
    );
}

const MyPageWrap = styled.div`
    position: relative;
    width:100%;
    height: 100vh;
    background-color: #000;
    color: #eee;

    input:focus {
        position: relative;
        outline: none;
    }
`
const MyPageHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0 110px;
`
const SideWidth = styled.div`
    width: 245.98px;
`
const LogoFrom = styled.div`
    width: 245.98px;
    z-index: 1;
    text-align: center;
    img {
        width: 150px;
    }
`
const SearchForm = styled.div`
    position: relative;

    input {
        width: 600px;
        padding: 10px;
        border: 2px solid #c0392b;
        border-radius: 5px;
    }
    img {
        width: 30px;
        position: absolute;
        right: 10px;
        top: 8px;
        filter: invert(20%) sepia(82%) saturate(1839%) hue-rotate(343deg) brightness(110%) contrast(90%);
    }
`

const DefaultBtnForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    align-items: center;
    
`
const DefaultBtn = styled.button`
    background-color: #5e5e5e;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    height: 34px;
    color: #fff;

    :hover {
        background-color: #838383;
    }
`
const BroadcastBtn = styled.button`
    background-color: #c0392b !important;
    border: none;
    border-radius: 3px;
    margin-right: 100px;
    width: 100px;
    height: 43px !important;
    color: #fff;
`
const MyPageSide = styled.div`
    position: absolute;
    top: 0;
    width: 17%;
    height: 100%;
    border-right: 1px solid #555;
`
const MyPageShowWrap = styled.div`
    display: flex;
    flex-flow: column;
    width: 75%;
    position:absolute;
    top:150px;
    right:80px;
`
const MyPageH2 = styled.h2`
    font-size: 28px;
    padding-bottom: 50px;
    font-weight: bold;
`
const MyPageShowFrom = styled.div`
    padding: 0px 50px 0 50px;
    margin-right: 40px;
`
const MyPageInfoForm = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`
const MyPageInfo = styled.div`
    margin-left: 0px;
    
    input {
        border: none;
        margin: 5px;
        padding: 5px;
        border-radius: 3px;
    }
`
const MyPageInfoWrap = styled.div`
    margin: 15px 0;
    input {
        color: #fff;
        width: 400px;
        height: 35px;
        padding: 0 10px;
    }
    input:focus {
        color: #000;
        
    }
    button {
        width:100px;
    }
`
const MyPageShow = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const MyPagePhotoForm = styled.div`
text-align: center;
    label {
        border: none;
        background-color: #b5b5b5;
        top: 245px;
        left: 340px;
        width:50px;
        height: 50px;
    }
    label:hover {
        background-color: #eee;
    }
`
const PhotoForm = styled.div`
    border-radius: 100px;
    overflow: hidden;
    width: 170px;
    height: 170px;

    img {
        display: inline-block;
        text-align: center;
        width: 100%;
        height: 100%;
    }
`
const PhotoAdd = styled.input`
    padding: 20px 0;
    display: none;
`
const MyVideoFrom = styled.div`
    display: flex;
    flex-flow: column;
    padding: 30px 30px 0 30px;
    width: 100%;
    height: 100%;

    button {
        width: 300px;
        height: 40px;
        margin: 8px 0;
    }
`
const MyPageH3 = styled.h3`
    font-size: 16px;
`
const MyPageSpan = styled.span`
    display: block;
    width: 250px;
    text-align: center;
    font-size: 16px;
    color: #eee;
`
const MyVideoShow = styled.div`
    /* display: flex;
    justify-content: space-between; */

    img {
        border: 1px solid #555;
        display: inline-block;
        width: 200px;
    }
`