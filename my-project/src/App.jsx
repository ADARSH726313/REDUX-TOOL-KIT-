  import Nav from "./Components/Nav"
  import Card from "./Components/Card"
//  import Search from "./Components/Search"
 import Body from "./Components/Body"
 import { Outlet } from "react-router-dom"
 import Context from "./Components/Utility/Context"
 import { useState } from "react"
 
function App() {

   const [ values,setvalues]= useState("ADITH")
  return (
    

    <>
    <Context.Provider value={{loggedin:values ,setvalues} }> 
    <Nav/>

    <Outlet/>

    </Context.Provider>
    
    {/* <Search/> */}


    </>
      
    
  )

  
}
export default App
