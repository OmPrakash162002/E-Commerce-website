import React from 'react'
import Items from '../Items/Items'
import "./Populer.css"

function Populer({products}) {
  return (
    <div className='pupuler-item-list'>
       <h1>Our populer items list <hr /></h1>
       <div className="items">
           {products.map((items,i)=> < Items key={i} items = {items}></Items>)}
       </div>
    </div>
  )
}

export default Populer
