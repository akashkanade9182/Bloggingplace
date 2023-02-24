import React,{useState,useEffect} from 'react'
import "../Styles/Singup.css"
import {Box,Heading,Input} from "@chakra-ui/react"
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import { getLogin } from '../Redux/AuthReducer/action'
import { useToast } from '@chakra-ui/react'
import {useLocation,useNavigate} from "react-router-dom"

const Login = () => {
const[data,setData]=useState({});
const dispatch=useDispatch();
const  location =useLocation();
const navigate=useNavigate()

const toast = useToast()


   
    const handleChange = (e) => {
        const {name,value}=e.target;
		setData({ ...data, [name]: value });
	};



const handleSubmit=(e)=>{
        dispatch(getLogin(data,toast,navigate))
}

  return (
     <Box w="100%" h="1000px" bgColor="#0A0A0A">
       <Box className='flash_one' ></Box>
       <Box className='flash_two' ></Box>
       <Box w="500px" h="auto" p="0px 20px" pb="20px" border="1px solid blueviolet" className='signupbox' >
            <Heading className='heading'> Login</Heading>
            <Box w="90%" m="auto">
                
                <Input onChange={handleChange} name="email" w="100%" mt="20px" color="white"  bgColor="#272150" border="1px solid blueviolet" placeholder="email"/>
                <Input onChange={handleChange} name="password" w="100%" mt="20px" color="white" bgColor="#272150" border="1px solid blueviolet" type="password" placeholder="password"/>
                <button onClick={handleSubmit} className='signupbtn'>Login</button>
                <p style={{color:"white",fontSize:"20px"}}>Don't have account?<p onClick={()=>navigate("/signup")} className="signuptag">Singup</p></p>


            </Box>
       </Box>

     </Box>
  )
}

export default Login