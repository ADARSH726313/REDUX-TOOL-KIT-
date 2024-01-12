import React from 'react'
import { Api } from './Api';
import Body from './Body';
import Context from './Utility/Context';
import { useContext } from 'react';

function Card( {name,locality,avgRating,cloudinaryImageId} ) {


  const value = useContext(Context)
  
  const  imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+ cloudinaryImageId;
  return ( 
       <div className="w-52 m-2 p-3   bg-pink-100 shadow-xl">
 
        <img src={imageUrl}/>
        <h4 className='font-bold'>Name:{name}</h4>
        <h4>Locality:{locality}</h4>
        <h4>Avg Rating:{avgRating}</h4>
        <h4>User: {value.loggedin}</h4>

       </div>      
  )
}

export default Card