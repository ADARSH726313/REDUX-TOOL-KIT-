import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Nav from "./Component/Nav.jsx"
import { RouterProvider } from 'react-router-dom'
import Body from './Component/Body.jsx'
import Cart from './Component/Cart.jsx'

const appRouter  = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
