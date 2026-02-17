import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Screen/About.jsx'
import Settings from './Screen/Settings.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/settings",
    element:<Settings/>
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
