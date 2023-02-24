import {Routes,Route} from "react-router-dom"
import React from 'react'
import Singup from "./Singup"
import Login from "./Login"
import Homepage from "./Homepage"
import BlogForm from "./BlogForm"
import BlogPage from "./BlogPage"
import SingalPage from "./SingalPage"
import ProfilePage from "./ProfilePage"
import PrivateRoute from "./PrivateRoute"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/newblog" element={<PrivateRoute><BlogForm/></PrivateRoute>}/>
        <Route path="/blogpage" element={<PrivateRoute><BlogPage/></PrivateRoute>}/>
        <Route path="/:id" element={<PrivateRoute><SingalPage/></PrivateRoute>}/>
        <Route path="/profilepage" element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
    </Routes>
  )
}

export default AllRoutes