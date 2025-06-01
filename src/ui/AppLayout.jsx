import React from 'react'
import Nevbar from '../components/nevbar/Nevbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { ShopContextProvider } from '../context/shopContext'

function AppLayout() {
  return (
    <>
    <ShopContextProvider>
      <Nevbar></Nevbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </ShopContextProvider>
    </>
  )
}

export default AppLayout
