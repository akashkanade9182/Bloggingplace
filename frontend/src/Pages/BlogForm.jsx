import React,{useState,useEffect} from 'react'
import {Box,Heading,Input,Textarea,Button,Select} from "@chakra-ui/react"
import { Navbar } from '../Components/Navbar/Navbar'
import FileInput from '../Components/Blogform/FileInput'
import axios from "axios" 
import {useDispatch,useSelector} from "react-redux"
import { useToast } from '@chakra-ui/react'
import { addPost } from '../Redux/AppReducer/action'

const postData=(payload,token)=>{


  return axios.post("http://localhost:7000/blogs/addblog",payload,{
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
 
}

const BlogForm = () => {
  const[data,setData]=useState({});
  const dispatch=useDispatch();
  const token=useSelector(store=>store.AuthReducer.token)
  const toast = useToast();






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

let formattedDate = `${day}/${month}/${year}`
formattedDate=String(formattedDate)
data.date=formattedDate;
postData(data,token).then((r)=>{
  toast({
    position: 'top-center',
    render: () => (
      <div style={{backgroundColor:" #272150",borderRadius:"9px" ,display:"flex",justifyContent:"space-around",alignItems:"center",width:"400px",height:"50px",color:"white"}}>
        blog added Successfull
      </div>
    ),
  })
}).catch((e)=>{
  toast({
    title: 'Error in blog posting',
    description: "try again later",
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
})
  }

  return (
    <Box w="100%" h="fit-content" p="20px 20px" bgColor="#272150">
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
              <Box w="45%" h="auto" p="20px 0" border="1px solid blueviolet" >
              
                <Input w="90%" color="white" mt="20px"  name="title" placeholder="Title" onChange={handleChange}/>
                <Select name="catgeory" borderColor={"blueviolet"} onChange={handleChange} w="90%" m="auto" bg="#272150" color="white" mt="20px" >
                  <option style={{backgroundColor:"#272150"}} value="">select catgeory</option>
                 <option style={{backgroundColor:"#272150"}} value="education">Education</option>
                 <option style={{backgroundColor:"#272150"}} value="nature">Nature</option>
                 <option style={{backgroundColor:"#272150"}} value="food">Food</option>
                 <option  style={{backgroundColor:"#272150"}} value="fitness">Fitness</option>
                 <option style={{backgroundColor:"#272150"}}  value="sports">Sports</option>
                 <option style={{backgroundColor:"#272150"}}  value="news">News</option>
                 <option  style={{backgroundColor:"#272150"}} value="movies">Movies</option>
                 <option style={{backgroundColor:"#272150"}}  value="polytical">Polytical</option>
                 <option  style={{backgroundColor:"#272150"}} value="travel">Travel</option>
                 <option  style={{backgroundColor:"#272150"}} value="technology">Technology</option>
                 <option style={{backgroundColor:"#272150"}} value="finance">Finance</option>
                 
                </Select>
                <Textarea name="content" className='areabox' onChange={handleChange} color="white" textAlign={"initial"} overflowY="scroll"  w="90%" m="auto" mt="20px"  h="500px" placeholder="Enter Content" onChange={handleChange}/>
               <Button className='postbtn' onClick={handleSubmit}>Post</Button>
              </Box>
              <Box w="45%" color="white" h="400px" >
               

              </Box>

            </Box>
            <Box>


            </Box>

      </Box>
      

    </Box>
  )
}

export default BlogForm