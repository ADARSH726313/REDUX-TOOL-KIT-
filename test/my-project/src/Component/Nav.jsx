import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Nav() {

  const Subscribe = useSelector((state)=>state.Cart)
  console.log(Subscribe)
  return (
    <>
      <div className=" flex justify-between bg-pink-200 h-16 ">

  <Link to="/">  <ul className='p-5 text-xl  font-bold'> REDUX TOOL KIT </ul>  </Link>

  <div className=" flex justify-evenly">
  <Link to="/">  <ul className='p-5 text-xl font-bold'> Cart No : {Subscribe.length} </ul>  </Link>
  <Link to="/cart">  <ul className='p-5 text-xl font-bold'> Cart </ul>  </Link>
  

  </div>
      </div>
    </>
  )
}

export default Nav