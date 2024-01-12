import { useEffect, useState } from "react";

 const Status =()=>{
  const[status,setStatus]= useState(true)

  useEffect(()=>{

    const addonline = ()=>{
        setStatus(true); }

        const addoffline = ()=>{
            setStatus(false);
           }
 window.addEventListener("online",addonline)
 window.addEventListener("offline",addoffline)

 // to remove eventlistener 
 return ()=>{

    window.removeEventListener("online",addonline);
    window.removeEventListener("offline",addoffline);
 }
  },[])


 return status;
 }

 export default Status;