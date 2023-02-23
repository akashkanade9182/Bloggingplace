import { Avatar, Box } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar/Navbar'
import { getSinglePost } from '../Redux/AppReducer/action'
import "../Styles/SinglePage.css"
const SingalPage = () => {
           const dispatch=useDispatch();
           const data=useSelector(store=>store.AppReducer.post);
           const {id}=useParams()


           useEffect(()=>{
                      dispatch(getSinglePost(id))
          console.log(data)
           },[id])
  return (
           <Box w="100%"  p="20px 0" bgColor="#272150">
           <Navbar/>
           <Box w="90%" m="auto" mt="20px" display={"flex"} justifyContent="space-around" alignItems={"center"}>
           <Box w="50%" m="auto"  p="15px 15px" fontSize={"23px"} display={"flex"} alignItems="center" color={"white"} className='titlebox' >
            <Avatar src={data.avatar} size="xl" alt="err"/>
             Title :- {data.title}
             <br/>
             Category :- {data.category}
             <br/>
             Date :- {data.date}
             <br />
             author :- {data.name}
           </Box>
           <Box  m="auto" mt="20px" p="15px 15px" fontSize={"23px"} display={"flex"} alignItems="center" color={"white"} className='imagebox' >
              <img src={data.image} alt="" />
           </Box>
           </Box>
           <Box w="90%" m="auto" mt="20px" p="15px 15px" fontSize={"23px"} display={"flex"} alignItems="center" color={"white"} className='imagebox' >
             {
              data.content
             }
           </Box>
           <Footer/>
           </Box>
  )
}

export default SingalPage