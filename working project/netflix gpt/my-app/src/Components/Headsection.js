import React from 'react'

const Headsection = () => {
  return (
    <>
    
    
    <div >
         <img className=' z-10 w-  h-20  m-2 absolute' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt=' netflix logo '/>
         
     {<form className=' bg-black mt-14 z-10 mx-auto right-0 left-0 w-2/4  h-2/4 flex absolute' >

<input className=' text-white' input type="email" placeholder='Email' >
</input >

<input className=' text-white' input type="password" placeholder='Password' >
</input >
</form> }



    
        <img  className='  bg-gray-800  relative bg-opacity-75 '  src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='' />


     

      
    </div>


    </>
  )
}

export default Headsection