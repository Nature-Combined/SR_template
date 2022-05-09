import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import SubscribeAppLayout from '../components/SubscribeAppLayout'
import SubscribeToMeList from './SubscribeToMeList'
import SubscribeList from './SubscribeList'

function Subscribe() {
  return (
    <Container>
      {/* TODO: path 변경 */}
      <Routes>
        <Route path='/' element={<SubscribeAppLayout />}>
          <Route path='/menu2' element={<SubscribeToMeList />} />
          <Route path='/menu3' element={<SubscribeList />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default Subscribe

const Container = styled.div`
  margin-top: 5vh;
`
