import {Routes,Route} from "react-router-dom"
import React from 'react'
import Singup from "./Singup"
import Login from "./Login"
import Homepage from "./Homepage"
import BlogForm from "./BlogForm"
import BlogPage from "./BlogPage"
import SingalPage from "./SingalPage"
import ProfilePage from "./ProfilePage"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/newblog" element={<BlogForm/>}/>
        <Route path="/blogpage" element={<BlogPage/>}/>
        <Route path="/:id" element={<SingalPage/>}/>
        <Route path="/profilepage" element={<ProfilePage/>}/>
    </Routes>
  )
}

export default AllRoutes