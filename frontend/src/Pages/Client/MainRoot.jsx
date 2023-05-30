import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const MainRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}

export default MainRoot
