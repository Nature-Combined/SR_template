import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'

export default function SubscribeToMeList({ myInfo }) {
  const [user, setUser] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [duplicateCheck, setDuplicateCheck] = useState('')

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
  }, [myInfo, loading])

  //@pcw 구독 등록을 위한 함수
  function subscribeRegister(user_id) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/subscribe/subscribeRegister`, {
        id: userInfo[0].id,
        user: myInfo,
        subject: user_id,
      })
      .then((data) => {
        console.log(data)
        axios.get(`${process.env.REACT_APP_API_URL}/subscribe/subscribeCount?user=${user_id}&type=${0}`)
        // .catch((err) => console.log(err.response.data))
      })
  }
  //@pcw 구독 중복체크를 위한 함수
  function subscribeRegisterCheck(user_id) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/subscribe/subscribeDuplicateCheck`, {
        id: userInfo[0].id,
        user: myInfo,
        subject: user_id,
      })
      .then((res) => setDuplicateCheck(res.data))
    // .catch((err) => console.log(err.response.data))
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>나를 구독한 사람</th>
            <th>구독</th>
            <th>구독한 날짜</th>
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
                          // subscribeRegisterCheck(item.user_id)
                          console.log(duplicateCheck)
                          if (window.confirm(`${item.user_id}님을 구독하시겠습니까?`)) {
                            console.log(duplicateCheck)
                            subscribeRegister(item.user_id)
                            // console.log(duplicateCheck)
                            // if (duplicateCheck.length === 14) {
                            //   window.alert('이미 구독된 사용자 입니다.')
                            // } else {
                            //   window.alert('구독 되였습니다.')
                            // }
                            setLoading(false)
                          }
                        }}
                      >
                        구독하기
                      </button>
                    </td>
                    <td>{moment(item.create_date).format('YYYY-MM-DD')}</td>
                  </tr>
                </>
              ))
            : null}
        </tbody>
      </table>
    </>
  )
}
