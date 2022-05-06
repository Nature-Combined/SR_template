import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";

export default function Notification() {
  const changeTextArea = useRef(null);
  const [writerBoxSwitch, setWriterBoxSwitch] = useState(false);
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [noticeList, setNoticeList] = useState();
  const [loading, setLoading] = useState(false);
  const [onOff, setOnOff] = useState(false);
  const [selectNotice, setSelectNotice] = useState("");
  const [showNotice, setShowNotice] = useState(false);
  const [idx, setIdx] = useState(null);
  const [changeContents, setChagneContents] = useState("");

  const headerLine = [
    {
      item: "No",
      size: 2,
    },
    {
      item: "제  목",
      size: 5,
    },
    {
      item: "글쓴이",
      size: 2,
    },
    {
      item: "작성일",
      size: 3,
    },
  ];

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const handleNotice = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/notice`, {
        title,
        contents,
      })
      .then((res) => setOnOff((pre) => !pre))
      .catch((err) => console.log(err.response));
  };

  const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  const handleChangeNotice = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/notice/change`, {
        id: idx,
        contents: changeContents,
      })
      .then((res) => {
        setOnOff((pre) => !pre);
        setSelectNotice(changeContents);
        changeTextArea.current.value = "";
      });
  };

  const handleDelNotice = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/notice/del?id=${idx}`)
      .then((res) => {
        setOnOff((pre) => !pre);
        setShowNotice(false);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/noticeList`)
      .then((res) => setNoticeList(res.data.result))
      .then(() => setLoading(true));
  }, [onOff]);

  return (
    <>
      <Container>
        공지사항 페이지입니다.
        <NoticeAddBtn onClick={() => setWriterBoxSwitch((pre) => !pre)}>
          공지사항 글쓰기
        </NoticeAddBtn>
        <QuillContainer>
          {writerBoxSwitch && (
            <>
              제목
              <NoticeTitleInput onChange={(e) => setTitle(e.target.value)} />
              <ReactQuill
                style={{ height: "200px", width: "50vh", margin: "0 auto" }}
                theme="snow"
                modules={modules}
                formats={formats}
                // value={value || ""}
                onChange={(content, delta, source, editor) =>
                  setContents(content)
                }
              />
              <NoticeFetchBtn onClick={handleNotice}>등록</NoticeFetchBtn>
            </>
          )}
        </QuillContainer>
        <NoticeListBox>
          <NoticeListHeaderBox>
            {headerLine.map((el) => (
              <NoticeListHeaderItem size={el.size} key={el.item}>
                {el.item}
              </NoticeListHeaderItem>
            ))}
          </NoticeListHeaderBox>
          {loading &&
            noticeList.map((el, idx) => (
              <NoticeItemBox key={el.id}>
                <NoticeItem size={2}>{el.id}</NoticeItem>
                <NoticeItem
                  onClick={() => {
                    setIdx(el.id);
                    setSelectNotice(el.contents);
                    setShowNotice(true);
                  }}
                  size={5}
                  center={true}
                >
                  {el.title}
                </NoticeItem>
                <NoticeItem size={2}>{el.writer}</NoticeItem>
                <NoticeItem size={3}>
                  {moment(el.created_time).format("YYYY-MM-DD")}
                </NoticeItem>
              </NoticeItemBox>
            ))}
        </NoticeListBox>
        {showNotice && (
          <>
            <NoticeShowBox>{selectNotice}</NoticeShowBox>
            <ChangeTextArea
              ref={changeTextArea}
              onChange={(e) => setChagneContents(e.target.value)}
            ></ChangeTextArea>
            <ChangeBtn onClick={handleChangeNotice}>변경</ChangeBtn>
            <DelBtn onClick={handleDelNotice}>삭제</DelBtn>
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div``;

const NoticeAddBtn = styled.button``;

const QuillContainer = styled.div`
  /* height: 40vh; */
  /* text-align: center; */
`;
const NoticeTitleInput = styled.input``;
const NoticeFetchBtn = styled.button``;
const NoticeListBox = styled.div``;

const NoticeListHeaderBox = styled.div`
  margin-top: 100px;
  display: flex;
`;

const NoticeListHeaderItem = styled.div`
  text-align: center;
  flex: ${({ size }) => size};
  border-bottom: 1px #d3d3d3 solid;
`;

const NoticeItemBox = styled.div`
  display: flex;
`;
const NoticeItem = styled.div`
  flex: ${({ size }) => size};
  text-align: center;
  ${({ center }) =>
    center &&
    css`
      :hover {
        cursor: pointer;
      }
      text-align: start;
    `}
`;

const NoticeShowBox = styled.div``;

const ChangeTextArea = styled.textarea`
  padding: 0.5rem;
  width: 300px;
  height: 200px;
  resize: none;
`;
const ChangeBtn = styled.button``;
const DelBtn = styled.button``;
