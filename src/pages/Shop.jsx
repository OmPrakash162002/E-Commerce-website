import React from 'react'
import Hero from '../components/Hero/Hero'
import Populer from '../components/Populer/Populer'
import { useLoaderData } from 'react-router-dom'
import Offerse from '../components/Offerse/Offerse'
import data_product from "../assets/data"


function Shop() {
  
  return (
    <div>
      <Hero></Hero>
      <Populer products = {data_product} ></Populer>
      <Offerse></Offerse>

    </div>
  )
}

export default Shop
