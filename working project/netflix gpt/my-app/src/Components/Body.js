import React from 'react'

import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Foot from './Foot'
import Headsection from './Headsection'
 




const Body = () => {
 const router = createBrowserRouter([

  {
    path:"/",
    element:<Headsection/>
},
 
    {
        path:"/footer",
        element:<Foot/>
    }
 ])
    
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Body