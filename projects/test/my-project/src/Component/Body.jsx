import React, { useEffect } from 'react'
 import { useState} from 'react'
 import { useDispatch } from 'react-redux';
 import { add } from '../Store/SliceCart';
function Body() {
    const [ apiVal ,setApi] = useState([]);
    useEffect(()=>{
  adu()
    },[])
     async function adu  (){
 const values =  await fetch('https://fakestoreapi.com/products')
 const data = await values.json();

 setApi(data);
 
     }

     const dispatch = useDispatch()

     const  handler = (kachra)=>{
       dispatch(add(kachra))
     }
  return (apiVal.length==0)?<h1>page is loading</h1> : (
    <>
    <div className="flex flex-wrap mt-6 justify-center p-6  "> 
    {apiVal.map((kachra)=>(
      <div key={kachra.id} className=" w-52 m-2 p-3   rounded-sm bg-slate-300 shadow-2xl">

        <ul className='font-bold'> <img className='h-40' src={kachra.image} alt=""  /> </ul>
        <ul  className='font-bold'> Name : {kachra.title}</ul>
        <ul  className='font-bold'> Price : {kachra.price}</ul>
        <ul  className='font-bold'> Category : {kachra.category}</ul>
        <br />
        <button onClick={()=> handler(kachra)} className=' font-bold p-2 bg-purple-600 text-white rounded-md'>Buy now </button>

      </div>
    ))}
    </div>
    </>
  )
}

export default Body