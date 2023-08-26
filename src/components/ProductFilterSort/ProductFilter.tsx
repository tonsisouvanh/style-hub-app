import React from 'react'
import { BiFilterAlt } from "react-icons/bi";

const ProductFilter = () => {
  return (
    <div className='flex items-center gap-1 cursor-pointer'> 
      <span>Filter</span>
      <BiFilterAlt/>
    </div>
  )
}

export default ProductFilter