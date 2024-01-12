 import React from "react";
 import { useRouteError } from 'react-router-dom'
 function Error(){
     const err = useRouteError();
     console.log(err);
return(
    <>
     <h1> error hua hai bhai </h1>
    <h2> dek ke kar kaam </h2>
    <p> {`status: ${err.status} , status text : ${err.statusText}`}</p>
    </>
   
)


 }
export   default  Error;