import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import Cartitems from '../components/CartItems/Cartitems'

function Cart() {


  return (
    <div>
          <Cartitems></Cartitems>
    </div>
  )
}

export default Cart
