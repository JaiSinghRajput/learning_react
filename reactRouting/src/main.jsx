import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Root from './Root'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='User/:userid' element={<User/>}/>
      <Route path='Github/:userName'
      loader={githubInfoLoader}
      element={<Github/>}/>
    </Route>
  )
  // {
  //   path:"/",
  //   element: <Root/>,
  //   children:[
  //     {
  //       path:"",
  //       element:<Home/>
  //     },
  //     {
  //       path:"About",
  //       element:<About/>
  //     },
  //     {
  //       path:"Contact",
  //       element:<Contact/>
  //     }
  //   ]
  // }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
