import React from 'react'
import "../../Styles/Card.css"
import { Box,Button } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'




const Card = () => {
  return (
   <Box className='cardBox' color="white" pb="15px" display={"flex"} flexDirection="column">
        <Box w="100%" display={"flex"} p="0 15px"   justifyContent="space-between">
          <p>Catgeory:-Nature</p>
        <p>posted on 15/2/2023</p>
        </Box>
        <Box w="100%" h="fit-content"  p="10px 10px" display={"flex"} justifyContent="space-around">
          <img style={{width:"40%",height:"160px",borderRadius:"15px"}} src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/4:3/pass/gettyimages-1146431497.jpg" alt="" />
          <Box w="70%" className='textBox' p="0 10px" h="auto" textAlign={"justify"}>
            <h1 className='titleline'>Tile:-Nature is Buetifull</h1>
            <p className='contentline'>
            With more than 20 years of experience in
           manufacturing, fabricating and marketing of work wear, apparel 
           and garment products as our core product lines
           . Our services expand beyond to made-to-order
            of home, kitchen, daily-used articles for retail
             and promotion campaign. This has reinforced our
              business relationship with our preferred partners.
            </p>

          </Box>

        </Box>
        <Box  w="100%" h="auto" p="0 15px"   display={"flex"} justifyContent="space-between" alignItems={"center"}>
          <Box   display={"flex"}  alignItems={"center"}>
          <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          <p>akash kande</p>
          </Box>
          <Box>
            <Button className='detailsbtn'>more details</Button>

          </Box>
        </Box>

   </Box>
  )
}

export default Card