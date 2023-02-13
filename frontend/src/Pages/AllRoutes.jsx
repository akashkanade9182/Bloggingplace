import {Routes,Route} from "react-router-dom"
import React from 'react'
import Singup from "./Singup"
import Login from "./Login"
import Homepage from "./Homepage"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes