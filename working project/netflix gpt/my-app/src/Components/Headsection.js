import React, { useState } from 'react'

import { siyaram } from './utils/Validate';
import { useRef } from 'react';



const Headsection = () => {

   const [status , setStatus] = useState(true)
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const [valid,Setvalid] = useState(" ");

   

   function textChange (){

     setStatus(!status);
   }

   const  handlebar = ()=>{
    
    const lord = siyaram(emailRef.current.value,passwordRef.current.value)
    
    Setvalid(lord);
   }

    

 
  return (
    <>
    
    
    <div >
         <img className=' z-10 w-  h-20  m-2 absolute' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt=' netflix logo '/>




     <form onSubmit={(e)=>e.preventDefault()} className=' bg-black mt-16 z-10 mx-auto right-0 left-0 w-1/4  h-3/4  absolute  bg-opacity-70 rounded-md' >
      <h1 className=' text-center text-3xl text-white mt-3 font-bold py-4'> {status ?"Sign In" : " Sign Up "} </h1>
{!status  &&( <input type='name ' className=' text-white bg-gray-700  mx-7 w-10/12  p-3 mt-10'  placeholder='Name' ></input>)}



<input  className=' p-3 mt-5 text-white rounded-md  bg-gray-700  mx-7 w-10/12'  type="email" ref={emailRef} placeholder='Email' >
</input >


<input type='password' className=' rounded-md text-white bg-gray-700  mx-7 w-10/12  p-3 mt-10' ref={passwordRef}  placeholder='Password' ></input>



<button  onClick={handlebar} className=' rounded-md p-3 mx-7  mt-10 bg-red-600
w-10/12 ' > {status? "Sign In" :" Sign Up " }  </button>

<p className=' text-center m-4 text-xl font-bold text-red-700'> {valid}</p>

 <p onClick={textChange}  className=' font-bold text-white  mt-8 text-center cursor-pointer'> {status ? "New to netflix ? Sign Up Now" : " Already registered ! Sign In Now  "}  </p> 


</form>    




        <img  className='  bg-gray-800  relative bg-opacity-75 '  src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='' />     
    </div>


    </>
  )
}

export default Headsection