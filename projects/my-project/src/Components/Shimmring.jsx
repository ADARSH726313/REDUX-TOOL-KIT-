import React from 'react'

function Shimmring() {
  return (
    <>
    <div className="cardsall">
    {Array(12).fill("").map((e,index)=><div key={index} className="cards"> </div>)}
    </div>
  
    
    </>
  )
}

export default Shimmring