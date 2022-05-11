import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'

export default function SubscribeList({ myInfo }) {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/subscribe/subscribeList`, {
        user: myInfo,
      })
      .then((res) => setUser(res.data.result))
      .then(() => setLoading(true))
      // .then((res) => console.log(res.data.result))
      .catch((err) => console.log(err))
  }, [myInfo, loading])
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>내가 구독한 사람</th>
            <th>해제</th>
            <th>구독한 날짜</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? user.map((item) => (
                <>
                  <tr key={item.id}>
                    <td>{item.sub_name}</td>
                    <td>
                      <button
                        onClick={() => {
                          if (window.confirm(`${item.sub_name}님을 구독해제 하시겠습니까?`)) {
                            axios
                              .get(`${process.env.REACT_APP_API_URL}/subscribe/subscribeDel?user=${myInfo}&subject=${item.sub_name}`)
                              .then((res) => console.log(res))
                              .catch((err) => console.log(err))
                            window.alert('구독 해제되었습니다.')
                            setLoading(false)
                          }
                        }}
                      >
                        구독해제
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
