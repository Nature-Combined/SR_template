import React from "react";
import styled from "styled-components";
import LogoImg from '../image/virstory_logo.svg';
import CameraImg from '../image/camera.svg';
import SearchImg from '../image/search.svg';
import { Link } from "react-router-dom";
import Thumbnail from '../image/thumbnail.jpg';
import { DefaultContext } from "react-icons/lib";
import Edit from '../image/edit.svg'


export default function MyPageTest() {
    return (
        <>
            <MyPageWrap>
                <MyPageShow>
                    <MyPageShowWrap>
                            <MyPageH2>마이페이지</MyPageH2>
                            
                        <MyPageShowFrom>
                            <MyPageInfoForm>
                                <MyPagePhotoForm>
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
                                        <button><img src={Edit}></img></button>
                                    </MyPageInfoWrap>
                                    <MyPageInfoWrap>
                                        <MyPageSpan>구독자 수</MyPageSpan>
                                        <p><span id="subscriber">912</span>명</p>
                                        <button></button>
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
    background-color: #222;
    color: #eee;

    input:focus {
        position: relative;
        outline: none;
    }
`
const DefaultBtn = styled.button`
  background-color: #5e5e5e;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  height: 34px;
  color: #fff;
  transition: all 0.2s;
  :hover {
    background-color: #878787;
  }
`;

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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
const MyPageInfoForm = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`
const MyPageInfo = styled.div`
display: flex;
flex-flow: column;
margin: 10px 0;
    
    input {
        border: none;
        margin: 5px;
        padding: 5px;
        border-radius: 3px;
    }
`
const MyPageInfoWrap = styled.div`
    margin: 5px 0;
    input {
        color: #fff;
        width: 200px;
        height: 35px;
        padding: 0 10px;
        background-color: transparent;
        text-align: center;
    }
    input:focus {
        color: #000;
        
    }
    button {
        width: 25px;
        height: 25px;
        background-color: transparent;
        transition: all 0.2s;
        border: none;
    }
    img {
        transition: all 0.2s;
        filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(50deg) brightness(108%) contrast(101%);
        height: 100%;
    }
    button:hover img {
        filter: invert(32%) sepia(52%) saturate(2209%) hue-rotate(344deg) brightness(82%) contrast(86%);
    }
    p {
        margin: 5px !important;
        text-align: center;
        display: inline-block;
        width: 200px;
        height: 35px;
        padding: 0 10px;
    }
`
const MyPageShow = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const MyPagePhotoForm = styled.div`
text-align: center;
width: 50%;
    label {
        border: none;
        background-color: transparent;
        top: 245px;
        left: 500px;
        width:50px;
        height: 50px;
        transition: all 0.2s;
        filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(50deg) brightness(108%) contrast(101%);
    }
    label:hover {
        filter: invert(28%) sepia(66%) saturate(1490%) hue-rotate(336deg) brightness(94%) contrast(96%);
        background-color: transparent;
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
    margin-left: 70px;
    height: 100%;

    button {
        width: 450px;
        height: 40px;
        margin: 25px 0;
    }
`
const MyPageSpan = styled.span`
    display: inline-block;
    width: 70px;
    font-size: 16px;
    color: #eee;
`