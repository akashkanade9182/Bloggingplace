import React,{useState,useEffect} from 'react'
import "../Styles/Singup.css"
import {Box,Heading,Input} from "@chakra-ui/react"
import FileInput from '../Components/Signup/FileInput'
import axios from "axios"
import { useToast } from '@chakra-ui/react'

const postData=(payload)=>{
    return axios.post("http://localhost:7000/bloguser/signup",payload)
}

const Singup = () => {
const[data,setData]=useState({});
const toast = useToast()

    const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

    const handleChange = (e) => {
        const {name,value}=e.target;
		setData({ ...data, [name]: value });
	};
const handleSubmit=(e)=>{
e.preventDefault();
postData(data).then((r)=>{
    console.log(r.data)
    toast({
        title: 'Singup Successfull',
        description: "Your account is ready use",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
}).catch((e)=>{
    toast({
        title: 'Error in Sign up',
        description: "try again later",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
})
}
  return (
     <Box w="100%" h="100vh" bgColor="#0A0A0A">
       <Box className='flash_one' ></Box>
       <Box className='flash_two' ></Box>
       <Box w="500px" h="auto" p="0px 20px" pb="20px" border="1px solid blueviolet" className='signupbox' >
            <Heading className='heading'> Sign Up</Heading>
            <Box w="90%" m="auto">
                <FileInput  
                name="avatar"
                label="Choose Image"
                handleInputState={handleInputState}
                type="image"
                value={data.avatar}/>
                <Input onChange={handleChange} name="name" w="100%" mt="20px" bgColor="#272150" placeholderColor="white" border="1px solid blueviolet" placeholder="full name"/>
                <Input onChange={handleChange} name="email" w="100%" mt="20px" bgColor="#272150" placeholderColor="white" border="1px solid blueviolet" placeholder="email"/>
                <Input onChange={handleChange} name="password" w="100%" mt="20px" bgColor="#272150" placeholderColor="white" border="1px solid blueviolet" type="password" placeholder="password"/>
                <button onClick={handleSubmit} className='signupbtn'>Signup</button>
                <p style={{color:"white",fontSize:"20px"}}>Already have account?<a href="/login">Login</a></p>


            </Box>
       </Box>

     </Box>
  )
}

export default Singup