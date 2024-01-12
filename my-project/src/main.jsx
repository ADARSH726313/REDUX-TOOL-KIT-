import React, { Children, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from "./Components/About.jsx"
import Error from './Components/Error.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Body from './Components/Body.jsx'
import Contact from './Components/Contact.jsx'

import Gallery from "./Components/Gallery.jsx"
// import Instamart from './Components/Instamart.jsx'
import { lazy } from 'react'
import Shimmring from './Components/Shimmring.jsx'

// this is used for single loading 
// using lazy --> it is also called as lazy loading 
// the below line is promise 
 const Instamart = lazy(()=>import('./Components/Instamart.jsx'))

const appRouter =createBrowserRouter([
  {
  path:"/",
  element:<App/>,
 errorElement:<Error/>,
 children: [
  
  {
    path: "/",
    element: <Body/>,
  },
  

  {
    path: "/about/:id",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/gallery/:id",
    element: <Gallery />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/instamart",
    element: <Suspense fallback ={<Shimmring/>}> <Instamart/></Suspense>,
  }
]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={appRouter} />
  </React.StrictMode>,
)

