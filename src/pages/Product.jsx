import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDispaly from '../components/ProductDisplay/ProductDispaly';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

function Product() {
  
  const {all_product} = useContext(ShopContext);
  const proId = useParams();
 
  const products = all_product.find((e)=> e.id === Number(proId.productId))
  
  
  return (
    <div>
     <Breadcrum products= {products} ></Breadcrum>
    <ProductDispaly products={products}></ProductDispaly>
    <RelatedProducts ></RelatedProducts>
    </div>
  )
}

export default Product
