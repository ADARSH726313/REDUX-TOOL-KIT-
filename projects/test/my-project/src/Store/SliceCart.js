 import {createSlice} from '@reduxjs/toolkit'

 const userSlice =  createSlice({
name:"Cart",
initialState:[],
reducers:{
    add:( state,action)=>{
      state.push(action.payload)
    },
    clear:(state)=>{
    return state.length ==0;
    },
    remove:(state,action)=>{
        return   state.filter((data)=>data.id!==action.payload)
    }
     
}

 })

 export const  {add,clear,remove} =userSlice.actions;

 export default userSlice.reducer