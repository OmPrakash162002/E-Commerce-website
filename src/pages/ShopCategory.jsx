import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import "./css/ShopCategory.css"
import Items from '../components/Items/Items'


function ShopCategory({banner,category}) {

   const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={banner} alt="" />
     
      <div className="shorted-items">
         {all_product.map((items,i)=> {
          if (category === items.category) {
            return <Items key={i} items={items}></Items>
          }
         })}
      </div>
    </div>
  )
}

export default ShopCategory
