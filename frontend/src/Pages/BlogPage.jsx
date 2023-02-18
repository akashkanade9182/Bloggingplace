import React from 'react'
import { Box,SimpleGrid } from '@chakra-ui/react'


import Sidebar from '../Components/BlogPage/Sidebar'
import { Navbar } from '../Components/Navbar/Navbar'
import "../Styles/Blogpage.css"
import Card from '../Components/BlogPage/Card'

const BlogPage = () => {
  const list=new Array(50).fill(5)
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
              list.map((ele,index)=>(
                <Card key={index}/>
              ))
            }

          </SimpleGrid>
        </Box>
    </Box>
      

    </Box>

  )
}

export default BlogPage