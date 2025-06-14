import React, { useContext } from 'react'
import "./Cartitems.css";
import { ShopContext } from '../../context/shopContext';
import remove_icon from "../../assets/cart_cross_icon.png"

const Cartitems = () => {
   const{all_product, addToCart,  removeFromCart, cartItems, getTotalCartItem} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
      </div>
     <hr />
      {all_product.map((e)=>{
        if( cartItems[e.id]>0){
            return  <div>
                <div className="cartitems-format">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} alt="" onClick={()=>removeFromCart(e.id)}/>
                </div>
                <hr />
            </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-tatal-item">
              <p>subtatal</p>
              <p>${getTotalCartItem()}</p>
            </div>
            <hr />
            <div className="cartitems-tatal-item">
              <p>shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-tatal-item">
              <h3>Total</h3>
              <h3>${getTotalCartItem()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHACKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>if you have promo code enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code'/>
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitems
