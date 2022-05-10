import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function SubscribeToMeList({ myInfo }) {
  const [user, setUser] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/mypage/myInfo`, {
        user: myInfo,
      })
      .then((res) => setUserInfo(res.data.result))
      .catch((err) => console.log(err))
    axios
      .post(`${process.env.REACT_APP_API_URL}/subscribe/subscribeList`, {
        user: myInfo,
        type: 'subscribeToMe',
      })
      .then((res) => setUser(res.data.result))
      .then(() => setLoading(true))
      // .then((res) => console.log(res.data.result))
      .catch((err) => console.log(err))
  }, [myInfo])
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>나를 구독한 사람</th>
            <th>구독</th>
            <th>구독한 시간</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? user.map((item) => (
                <>
                  <tr key={item.id}>
                    <td>{item.user_id}</td>
                    <td>
                      <button
                        onClick={() => {
                          if (window.confirm(`${item.user_id}님을 구독하시겠습니까?`)) {
                            axios
                              .post(`${process.env.REACT_APP_API_URL}/subscribe/subscribeRegister`, {
                                id: userInfo[0].id,
                                user: myInfo,
                                subject: item.user_id,
                              })
                              .then((res) => console.log('성공', res))
                              .catch((err) => console.log('실패???', err))
                            // window.alert('구독 되었습니다.')
                            setLoading(false)
                          }
                        }}
                      >
                        구독하기
                      </button>
                    </td>
                    <td>{item.create_date}</td>
                  </tr>
                </>
              ))
            : null}
        </tbody>
      </table>
    </>
  )
}
