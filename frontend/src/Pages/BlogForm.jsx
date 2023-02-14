import React,{useState,useEffect} from 'react'
import {Box,Heading,Input,Textarea,Button} from "@chakra-ui/react"
import { Navbar } from '../Components/Navbar/Navbar'
import FileInput from '../Components/Blogform/FileInput'
import axios from "axios" 
const postData=(payload)=>{
  return axios.post("",payload)
}

const BlogForm = () => {
  const[data,setData]=useState({});

  const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

    const handleChange = (e) => {
        const {name,value}=e.target;
		setData({ ...data, [name]: value });
	};

  const handleSubmit=()=>{
    const currentDate = new Date()

const day = currentDate.getDate().toString().padStart(2, '0')
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
const year = currentDate.getFullYear().toString()

const formattedDate = `${day}/${month}/${year}`
console.log(formattedDate)
  }

  return (
    <Box w="100%" h="1000px" p="20px 20px" bgColor="#272150">
      <Navbar/>
      <Box w="100%" mt="20px" display={"flex"} flexDirection="column" >
            <Box w="100%" display={"flex"} justifyContent="space-around" >
                  <FileInput  
                          name="image"
                          label="Choose Image"
                          handleInputState={handleInputState}
                          type="image"
                          value={data.image}/>
                    <Box w="45%" display={"flex"} justifyContent="space-around" alignItems={"center"} border="1px solid blueviolet">
                    {data.image && (
                  <img style={{width:"auot", height:"auto"}}
                    src={typeof (data.image) === "string" ? data.image : URL.createObjectURL(data.image)}
                    alt="file"
                    className={"preview_img"}
                  />
                )}
                    </Box>

            </Box>
            <Box  w="100%" mt='20px' display={"flex"} justifyContent="space-around">
              <Box w="45%" h="auto" border="1px solid blueviolet">
              
                <Input w="90%" color="white" mt="20px"  name="title" placeholder="Title" onChange={handleChange}/>
                <Textarea name="content" onChange={handleChange} color="white" textAlign={"initial"}   w="90%" mt="20px" name="content" h="500px" placeholder="Enter Content" onChange={handleChange}/>
               <Button className='postbtn' onClick={handleSubmit}>Post</Button>
              </Box>
              <Box w="45%" color="white" h="400px" border="1px solid blueviolet">
                <Heading>{data.title}</Heading>
                {
                  data.content
                }

              </Box>

            </Box>
            <Box>


            </Box>

      </Box>
      

    </Box>
  )
}

export default BlogForm