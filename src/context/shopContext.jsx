import { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

//initial value of cartItems 
const getDefaultCart =()=>{
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
   
    cart[index] = 0;
  }
  return cart;
}

 export const ShopContextProvider =({children})=>{

 const [cartItems , setCartItems] = useState(getDefaultCart());

//adding item to cart 
 const addToCart = (itemId)=>{
  setCartItems((prev)=>({...prev, [itemId] : prev[itemId] + 1}))
 };

 //removing added item from cart 
 const removeFromCart = (itemId)=>{
  setCartItems((prev)=>({...prev, [itemId] : prev[itemId] - 1}))
 };

 //total cart item calculation
 const getTotalCartItem =()=>{
     let totalAmount = 0;
     for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo = all_product.find((product)=> product.id === Number(item))
          console.log(itemInfo);
          
          totalAmount += itemInfo.new_price * cartItems[item];
          console.log(totalAmount);
        }
        
     }
     return totalAmount;
 }

 //showing how many product added to cart 
 const showTotalCartItem =()=>{
     let totalItem = 0;
     for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem += cartItems[item];
      }
     }
     return totalItem;
 }

 

    const contextValue ={
      all_product,
      addToCart,
      removeFromCart,
      cartItems,
      getTotalCartItem,
      showTotalCartItem,
    }

   return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
   )
}