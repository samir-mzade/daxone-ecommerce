import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/HomePage/Home'
import ShopPage from '../pages/ShopPage/ShopPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import { CheckoutPage } from '../pages/ChekoutPage/CheckoutPage'

const LinkRouter = () => {
  return (
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index  path='/' element={ <Home/>} />
              <Route path='/shop' element={ <ShopPage/>} />
              <Route path='/contact' element={ <ContactPage/>} />
              <Route path='/checkout' element={ <CheckoutPage/>} />
          </Route>
    </Routes>
  )
}

export default LinkRouter