import React from 'react'
import Intro from "../../components/Intro";
import CategoryCard from '../../components/CategoryCard'
import Products from './../../components/Products';
import Deals from '../../components/Deals';
const index = ({likedProducts,setLikedProducts,addToBuy,setAddToBuy}) => {
  return (
    <>
    <Intro  />
    <CategoryCard />
    <Products likedProducts={likedProducts}  setLikedProducts={setLikedProducts}  addToBuy={addToBuy} setAddToBuy={setAddToBuy}/>
    <Deals/>
    
    </>
  )
}

export default index