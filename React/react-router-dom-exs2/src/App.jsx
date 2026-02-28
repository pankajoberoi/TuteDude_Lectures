import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Amazon from './Screens/Amazon'
import Dashboard from './Screens/Dashboard'
import Home from './Screens/Home'
import Users from './Screens/Users'
import Settings from './Screens/Settings'
import Cart from './Screens/Cart'
import ProductList from './Screens/ProductList'
import SignUp from './Screens/SignUp'
import Profile from './Screens/Profile'


function App() {
  

  const Nestedrouter=createBrowserRouter([
    {
      path:"/",
      element:<Amazon/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
      children:[
        {path:"home",element:<Home/>},
        {path:"users",element:<Users/>},
        {path:"settings",element:<Settings/>},
      ]
    },
    {
      path:"/cart",
      element:<Cart/>,
      loader: async () => {
        const res = await fetch("https://dummyjson.com/carts")
        return res.json()
      }
    },
    {
      path:"/productList",
      element:<ProductList/>
    },
    {
      path:"/usersignup",
      element:<SignUp/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"*",
      element:<h1>Page Not Found</h1>
    }

  
])

  return <RouterProvider router={Nestedrouter}/>
}

export default App
