import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Status from './Utility/Status';
import { useContext } from 'react';
import Context from './Utility/Context';





function Nav() {
  

   const {loggedin} = useContext(Context)

   const [ btnval ,setBtnval] = useState(true);

  const isOnline = Status();


 
 
  return (
    <>
{    
    <div className=" flex bg-yellow-100 justify-between">
    <img className='h-24 p-3'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbacZfgqFc7f5k8npSJAiQI1Gc9Vi1yYajkQ&usqp=CAU"/>
           <div className="flex  justify-center   ">
            <ul className=' flex  justify-center'>
        <Link to="/" ><li className='p-5'>home</li></Link>

        <Link to="/about" ><li  className='p-5'> About</li></Link>
            
      
       <Link to ="/gallery"> <li  className='p-5'> gallery</li></Link>
       <Link to ="/contact"><li  className='p-5'> contact</li> </Link>
      <Link  to="/instamart"><li  className='p-5'>Instamart </li> </Link>
       <h1   className='p-5'>{isOnline?"❤️":"💀"}</h1>

       
       
      
       
       {btnval? <button  className='p-5' onClick={()=>setBtnval(false)}>logout</button>: <button  className='p-5' onClick={()=>setBtnval(true)}>login</button>}

       <li  className='p-5'> {loggedin}</li>
            </ul>
       
       </div>
     </div>
    }


    

    </>
  )
}

export default Nav