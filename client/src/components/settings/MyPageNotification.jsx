import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import moment from "moment";

export default function Notification() {
  const [noticeList, setNoticeList] = useState();
  const [loading, setLoading] = useState(false);
  const [selectNotice, setSelectNotice] = useState("");
  const [selectIdx, setSelectIdx] = useState(null);

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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/noticeList`)
      .then((res) => setNoticeList(res.data.result))
      .then(() => setLoading(true));
  }, []);

  return (
    <>
      <Container>
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
              <>
                <NoticeItemBox key={el.id}>
                  <NoticeItem size={2}>{el.id}</NoticeItem>
                  <NoticeItem
                    onClick={() => {
                      setSelectNotice(el.contents);
                      if (selectIdx === idx) {
                        setSelectIdx(null);
                      } else {
                        setSelectIdx(idx);
                      }
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
                {selectIdx === idx && (
                  <ReactQuill
                    theme="bubble"
                    value={selectNotice}
                    styled={{ fontSize: "2rem" }}
                    readOnly={true}
                  />
                )}
              </>
            ))}
        </NoticeListBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: 320px;

  @media only screen and (max-width: 992px) {
    margin: 0;
  }
`;

const NoticeListBox = styled.div`
  margin: 0 6%;

  @media only screen and (max-width: 992px) {
    margin: 0 3%;
  }
`;

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
