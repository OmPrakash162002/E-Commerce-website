import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/Cart'
import mensBanner from './assets/banner_mens.png'
import womenBanner from './assets/banner_women.png'
import kidBanner from './assets/banner_kids.png'





function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout></AppLayout>,
      children : [
        {
          path : "/",
          element :<Shop></Shop>,
        },
        {
          path : "/mens",
          element : <ShopCategory banner = {mensBanner} category = "men"></ShopCategory>
        },
        {
          path : "/womens",
          element : <ShopCategory banner = {womenBanner} category = "women"></ShopCategory>
        },
        {
          path : "/kids",
          element : <ShopCategory banner={kidBanner} category = "kid"></ShopCategory>
        },
        {
          path : "/product",
          element : <Product></Product>
        },
        {
          path : "/product/:productId",
          element : <Product></Product>
        },
        
        {
          path : "/cart",
          element : <Cart></Cart>
        },
        {
          path : "/login",
          element : <LoginSignup></LoginSignup>
        }
      ]
    },


  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
