 import React from "react";
 import { useParams } from "react-router-dom";

 import { useEffect } from "react";
 import { useState } from "react";
 import Shimmring from "./Shimmring";
 function Gallery(){
   const {id}= useParams();

   const [values,setVal] = useState()
   const  imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
    const imag = imageUrl+values?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId;
  useEffect(()=>{
 damu()
   },[])

   async function damu () {

    const  values = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1029259&lng=72.8935472&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER `)

     const ram = await values.json();


     setVal(ram)
    
   } 
 

    return (!values)? <Shimmring/>:(
        <>

        <h1> Gallery hai bhai </h1>
        <h3>id: {id}</h3>
        <h2>Name :{values?.data?.cards[0]?.card?.card?.info?.name}</h2>
        <img src={imag}/>
       
   
        </>
    )

 }
 export default Gallery;