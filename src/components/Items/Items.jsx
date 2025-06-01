import React from 'react'
import "./items.css"
import { FaStar } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Items({items}) {
    const  { id ,image, new_price, old_price,name  }= items;
  return (
    <div className='items-cart'>
      <NavLink to = {`/product/${id}`}> <img onClick={window.scrollTo(0,0)} src={image} alt="" /></NavLink>
      <div className="details">
        <p><b>{name}</b></p>
        <hr />
        <p className='price'>{`$${new_price}`}</p>
      </div>

    </div>
  )
}

export default Items
