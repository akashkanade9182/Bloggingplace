import React from 'react'
import {Box,Image,Heading,Button} from "@chakra-ui/react"
import { Navbar } from '../Components/Navbar/Navbar'
import "../Styles/Homepage.css"
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
  const isAuth=useSelector(store=>store.AuthReducer.isAuth);
  const navigate=useNavigate()

  const handleNavigate=()=>{
    if(isAuth){
      navigate("/blogpage")
    }else{
      navigate("/login")
    }
  }
  return (
   <Box w="100%" h="1000px" p="20px 0" bgColor="#272150">
    <Navbar/>
    <Box display="flex" mt="20px"  w="100%" h="auto" justifyContent={"space-around"} alignItems="center">
        <Box w="45%" borderRadius={"15px"} className="aboutbox" p="20px 20px" h="auto" border="1px solid blueviolet">

        <Heading color="white" className="blogheading">Create a Blog</Heading>
          <p style={{color:"white",marginTop:"20px",fontSize:"30px"}}>Share your story with the world. 
            Stand out with a professionally-designed blog website 
            that can be customized to fit your brand.
             Build, manage, and promote your blog with 
             Squarespace’s built-in suite of design
              and marketing tools.
          </p>
          <button onClick={handleNavigate} className='startbtn'>Get Started</button>
        </Box>
        <Box w="20%" h="100%" >
           <Image w="100%" h="100%" src={"Man.png"} alt="err" />
        </Box>
    </Box>
    <Box w="100%"  display="flex" mt="20px"   h="auto" justifyContent={"space-around"} alignItems="center">
      <Box w="45%" h="auto">
      <Heading color="white" >How to Create Blog ?  -></Heading>
        

      </Box>
      <Box w="45%" h="auto" color="white" className='bgbox' textAlign={"left"} p="15px 15px" fontSize={"25px"}>
        <p>1.Create account </p>
        <p>2.Go to the New Blog </p>
        <p>3.Select Category of Blog</p>
        <p>4.Upload  Images</p>
        <p>5.Write Content</p>
        <p>6.Post the Blog</p>
      </Box>

    </Box>
    <Footer/>

   </Box>
  )
}

export default Homepage