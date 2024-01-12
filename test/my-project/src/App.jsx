import { useState } from 'react'
 import { Outlet } from 'react-router-dom'
 import Nav from './Component/Nav'
 import Store from './Store/store'
 import { Provider } from 'react-redux'

function App() {


  return (
    <>
    <Provider store={Store}>
    <Nav/>
       <Outlet/>
    </Provider>
      
       
    </>
  )
}

export default App
