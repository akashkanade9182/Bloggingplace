import React ,{useState,useEffect} from 'react'
import { Box,SimpleGrid } from '@chakra-ui/react'


import Sidebar from '../Components/BlogPage/Sidebar'
import { Navbar } from '../Components/Navbar/Navbar'
import "../Styles/Blogpage.css"
import Card from '../Components/BlogPage/Card'
import { getPost } from '../Redux/AppReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/BlogPage/Loader'
import { useSearchParams } from 'react-router-dom'
import Footer from '../Components/Footer'

const BlogPage = () => {
  const dispatch=useDispatch();
  const data=useSelector(store=>store.AppReducer.post)
  const isLoading=useSelector(store=>store.AppReducer.isLoading)
  const [searchParams,setSeachParams]=useSearchParams()



  useEffect(()=>{
    let queryparams
      
    let category = searchParams.getAll("category");
    queryparams = {
      params: {
      category
       

      }
  

  }
   dispatch(getPost(queryparams))
  },[searchParams,dispatch])
  return (
    <Box w="100%" h="auto" p="20px 20px" bgColor="#272150">
     <Navbar/>
     <Box  w="100%" h="40px" mt="20px" display="flex" justifyContent={"space-around"}>
      <Box w="20% ">
      <h1 className='gridheading'>Top Categories</h1>

      </Box>
      <Box w="79%">
      <h1 className='gridheading'>Blogs</h1>

      </Box>

     </Box>
    <Box   w="100%" h="auto" pt="15px" display="flex" justifyContent={"space-around"}  m="auto">
        <Sidebar/>
        <Box w="78%" borderRadius={"15px"} h="auto"   >
      

          <SimpleGrid w="100%" gap="5" columns={[1,2,2,2]}>
            {
             data.length>0 && data.map((ele,index)=>(
              isLoading?<Loader key={ele._id} />: <Card key={ele._id} {...ele} />
             ))
            }
          </SimpleGrid>

       
         
        </Box>
    </Box>
    <Footer/>
      

    </Box>

  )
}

export default BlogPage