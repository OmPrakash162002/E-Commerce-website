import React from 'react'
import './RelatedProducts.css'
import data_product from '../../assets/data'
import Items from '../Items/Items'

const RelatedProducts = () => {
  return (
    <div className='relatedMain'>
        <h1 className="related">Related products <hr /></h1>
        <div className="relatedProducts">
        {data_product.map((item,i)=> <Items  key={i} items = {item}></Items>)}
        </div>
     
    </div>
  )
}

export default RelatedProducts
