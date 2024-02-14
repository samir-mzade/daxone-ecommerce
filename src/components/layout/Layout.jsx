import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Body from '../body/Body'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <>
          <Header />
          <Body/>
          <Outlet />
         <Footer />
    </>
  )
}

export default Layout