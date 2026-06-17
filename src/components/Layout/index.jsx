import React from 'react'
import { Outlet } from 'react-router'
import Navber from './Navber'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
         <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
