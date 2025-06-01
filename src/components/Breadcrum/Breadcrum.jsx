import React from 'react'
import "./Breadcrum.css"
import arrow_icon from '../../assets/breadcrum_arrow.png'

const Breadcrum = ({products}) => {

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {products.category} <img src={arrow_icon} alt="" /> {products.name}
    </div>
  )
}

export default Breadcrum
