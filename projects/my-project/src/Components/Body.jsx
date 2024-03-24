import React from 'react'
import Card from './Card';

import { useState } from 'react';
import { useEffect } from 'react';
import Shimmring from './Shimmring';
import { Link } from 'react-router-dom';
import Context from './Utility/Context';
import { useContext } from 'react';
 

function Body() {
  const [values, setVal]= useState("");

  const [restaurantApi, setApi]= useState([])

  const [ filterReastaurant,setFilter] = useState([])

  const {setvalues,loggedin} = useContext(Context);
  


  useEffect(()=>{
    apiseek();
  },[])
    async function apiseek(){
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&pag")
   const remember= await data.json()
   console.log(remember);
   setApi(remember?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setFilter(remember?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }

  const filter=(values,restaurantApi)=>{

  const anyvalue= restaurantApi.filter((data)=> data.info.name.toLowerCase().includes(values.toLowerCase()));
  return anyvalue;
  }

//  if(filterReastaurant?.length==0) return <h1> no restaurant found </h1>;
  
    return (restaurantApi?.length==0)?<Shimmring/>:(

      <>
        <>
     <input className='my-10 p-2 ml-2 rounded-md'
   type="text"
   placeholder="Search here  "
   onChange={(e)=>(setVal(e.target.value))}
   
   value={values} />

   <button className='bg-blue-500 ml-3 rounded-md hover:bg-pink-400 p-2' onClick={()=>{
  const data = filter(values,restaurantApi);
  setFilter(data);


   }} >Submit </button>

   <div>
    <label className='m-3' > Name</label>
    <input value={loggedin} onChange={(e)=>{setvalues(e.target.value)}} className='border-b-2 p-2'  />
   </div>
  
   </>

         <div className="flex flex-wrap ">
    {filterReastaurant.map((data)=>{

      console.log(data);
     
      return (
        
        <Link key={data.info.id} to={"/gallery/"+data.info.id} > <Card   {...data.info} /></Link>     
      )
    })} </div>
      </>
       );
}

export default Body