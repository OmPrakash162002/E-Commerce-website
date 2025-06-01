import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './Nevbar.css'
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../context/shopContext';

function Nevbar() {
const {showTotalCartItem} =  useContext(ShopContext);

  return (
    <div className='nevbar'>

      <div className='shopping-logo'>
        <img src="shopping logo.png" alt="" />
      </div>
      
      <div className="nevbar_navigations">
          <ul className='nav-links'>
            <li><NavLink className='navlink' to = "/">Shop</NavLink></li>
            <li><NavLink className='navlink' to = "/mens"> Man</NavLink> </li>
            <li><NavLink className='navlink' to = "/womens"> Women</NavLink> </li>
            <li><NavLink className='navlink' to = "/kids"> Kids</NavLink></li>
          </ul>

      </div>

      <div className="navbar_Login">
       <NavLink to="/login"><button>Login </button></NavLink> 
       <NavLink to = "/cart"><div className='totalItem'>{showTotalCartItem()}</div>< FaShoppingCart/>
      
       </NavLink>
       
      </div>
     
    </div>
    
  )
}

export default Nevbar
