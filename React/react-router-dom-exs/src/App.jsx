import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Amazon from './Screens/Amazon'
import Login from './Screens/Login'
import DashBoard from './Screens/DashBoard'
import { useState } from 'react'
import ProtectedRoute from './Component/ProtectedRoute'


function App() {
  
  const [user,setUser]=useState(null)
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Amazon/>,
      children:[
        {
          path:"login",
          element:<Login setUser={setUser}/>
        },
        {
          path:"dashboard",
          element:(
            <ProtectedRoute user={user}>
              <DashBoard user={user}/>
            </ProtectedRoute>
          )
        }
      ]
    }
  ])


  return <RouterProvider router={router}/>
}

export default App
