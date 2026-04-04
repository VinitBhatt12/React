import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Men from './Men'
const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-8 py-3'>
        <Link to='/product/Men'>Men</Link>
        <Link to='/product/women' >Women</Link>
        <Link to='/product/kids' >Kids</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
