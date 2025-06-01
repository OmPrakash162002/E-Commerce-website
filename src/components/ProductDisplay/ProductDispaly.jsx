import React, { useContext } from 'react'
import "./ProductDisplay.css"
import { ShopContext } from '../../context/shopContext'

const ProductDispaly = ({products}) => {
  const {addToCart} =  useContext(ShopContext)
  return (
    <div className="product-wrapper">
    {/* Left Side: Images */}
    <div className="left-column">
      <div className="thumbnails">
       <img src={products.image} alt="" />
       <img src={products.image} alt="" />
       <img src={products.image} alt="" />
       <img src={products.image} alt="" />
      </div>
      <div className="main-image">
        <img src={products.image} alt="Main product" />
      </div>
    </div>

    {/* Right Side: Info */}
    <div className="right-column">
      <div className="product-title">{products.name}</div>
      <div className="rating">★★★★★ <span>(122)</span></div>
      <div className="price">
        <span className="old-price">{products.old_price}</span>
        <span className="current-price">{products.new_price}</span>
      </div>
      <div className="description">
        A lightweight, knitted pullover shirt with a round neckline and short sleeves. Can be worn as an undershirt or outer garment.
      </div>
      <div className="sizes">
        <strong>Select Size:</strong><br />
        {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
          <span key={index}>{size}</span>
        ))}
      </div>
      <div className="add-to-cart">
        <button onClick={()=>addToCart(products.id)} >Add to Cart</button>
      </div>
      <div className="meta">
        <strong>Category:</strong>{products.category}<br />
        <strong>Tags:</strong> Winter, Stylish, Bomber
      </div>
    </div>
  </div>
  )
}

export default ProductDispaly
