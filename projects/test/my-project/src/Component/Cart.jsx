import React from 'react'
 import { useSelector  } from 'react-redux'
 import { useDispatch } from 'react-redux'
 import { remove} from "../Store/SliceCart"
 import { clear } from '../Store/SliceCart'
function Cart() {

    const Cartval = useSelector((state)=>state.Cart)

    const val = useSelector((state)=>state.Cart)
   

    const dispatch = useDispatch()

    const clearAll = useDispatch()

     const  handlebar = (values) =>{
   dispatch(remove(values))
    }

    const  handleclear = (data) =>{
      clearAll(clear(data))
       }
  return (
   <>
   <span>
    
   </span>
    <div className="flex  flex-wrap justify-center mt-10">

     {Cartval.map((data)=>(
      <div key={data.id} className="  m-2 p-3  flex   rounded-sm bg-slate-200 shadow-2xl w-2/3">

        <img className='h-40 ' src={data.image} alt="" />
        <span className=' p-8 font-bold'>Title : {data.title}</span>
        <span className=' p-8 font-bold' >Price : {data.price}</span>
        <button className='p-2 h-10 mt-8 rounded-md  bg-purple-300 font-bold' onClick={()=>handlebar(data.id)}>Remove </button>
        
      </div>
     ))}
    </div>
   </>
  )
}

export default Cart