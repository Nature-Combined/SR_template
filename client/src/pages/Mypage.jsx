import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

function Mypage({ myInfo }) {
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
  // if (upload) {
  //   const encodeFileToBase64 = (fileBlob) => {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(fileBlob)
  //     return new Promise((resolve) => {
  //       reader.onload = () => {
  //         setImageSrc(reader.result)
  //         resolve()
  //       }
  //     })
  //   }
  //   encodeFileToBase64(upload)
  // }
  return (
    <>
      {user.length ? (
        <Container>
          <form>
            <div style={{ border: 'solid 1px', height: '230px', width: '230px' }}>
              <img style={{ height: '230px', width: '230px' }} />
            </div>
            <input
              type='file'
              onChange={(e) => {
                console.log(e.target.value)
              }}
            />
            <br />
            <br />
            No. <input type='text' disabled value={user[0].id} />
            <br />
            아이디 <input type='text' disabled={disabled} defaultValue={user[0].user_id} />
            <br />
            가입일 <input type='text' disabled value={user[0].created_time} />
            <br />
            수정일 <input type='text' disabled value={user[0].modified_time} />
            <br />
            sns_id <input type='text' disabled={disabled} defaultValue={user[0].sns_id} />
            <br />
            sns_type <input type='text' disabled={disabled} defaultValue={user[0].sns_type} />
            <br />
          </form>
          <button
            onClick={() => {
              setDisabled(false)
            }}
          >
            수정하기
          </button>
        </Container>
      ) : (
        <>
          <br />
          <br />
          <span>로그인 해주시기 바랍니다.</span>
        </>
      )}
    </>
  )
}

export default Mypage

const Container = styled.div`
  margin-top: 5vh;
`
