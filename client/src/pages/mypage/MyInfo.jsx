import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import './myInfo.css'

export default function MyInfo({ myInfo }) {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [upload, setUpload] = useState('')
  console.log(myInfo)
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/mypage/myInfo`, {
        user: myInfo,
      })
      .then((res) => setUser(res.data.result))
      .then(() => setLoading(true))
      .catch((err) => console.log(err))
  }, [myInfo])
  console.log(user)
  if (!loading) return null

  return (
    <>
      {user.length ? (
        <Container>
          <div className='member_wrap'>
            <div className='member_photo_wrap'>
              <div className='member_photo'>
                <img />
              </div>
              <div className='photo_btn_from'>
              <label className='photo_btn' for="file"></label> 
              <input type="file" id="file" onChange={(e) => {
                  console.log(e.target.value);
                }}
              /> 
              </div>
            </div>
            <div className='member_info_wrap'>
              <div className="member_info">
                <span>No.</span><input type='text' disabled value={user[0].id} />
              </div>
              <div className="member_info">
                <span>아이디</span> <input type='text' disabled={disabled} defaultValue={user[0].user_id} />
              </div>
              <div className="member_info">
                <span>가입일</span> <input type='text' disabled value={user[0].created_time} />
              </div>
              <div className="member_info">
                <span>수정일</span> <input type='text' disabled value={user[0].modified_time} />
              </div>
              <div className="member_info">
                <span>sns_id</span> <input type='text' disabled={disabled} defaultValue={user[0].sns_id} />
              </div>
              <div className="member_info">
                <span>sns_type</span> <input type='text' disabled={disabled} defaultValue={user[0].sns_type} />
              </div>

              <button
                className="member_btn"
                onClick={() => {
                  setDisabled(false)
                }}
              >
                수정하기
              </button>
            </div>
          </div>
        </Container>
      ) : (
        <div className='login_request_wrap'>
          <p className='login_request'><span>!</span>로그인 후 이용가능합니다.</p>
        </div>
      )}
    </>
  )
}
const Container = styled.div`
  margin-top: 5vh;
`
