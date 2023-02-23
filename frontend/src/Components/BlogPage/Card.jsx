import React from 'react'
import "../../Styles/Card.css"
import { Box,Button } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'



const Card = ({_id,title,content,category,avatar,name,date,image}) => {
  const navigate=useNavigate();
  return (
   <Box className='cardBox' color="white" pb="15px" display={"flex"} flexDirection="column">
        <Box w="100%" display={"flex"} p="0 15px"   justifyContent="space-between">
          <p>Catgeory:-{category}</p>
        <p>posted on {date}</p>
        </Box>
        <Box w="100%" h="fit-content"  p="10px 10px" display={"flex"} justifyContent="space-around">
          <img style={{width:"40%",height:"160px",borderRadius:"15px"}} src={image} alt="err" />
          <Box w="70%" className='textBox' p="0 10px" h="auto" textAlign={"justify"}>
            <h1 className='titleline'>Tile :- {title}</h1>
            <p className='contentline'>
            {content}
            </p>

          </Box>

        </Box>
        <Box  w="100%" h="auto" p="0 15px"   display={"flex"} justifyContent="space-between" alignItems={"center"}>
          <Box   display={"flex"}  alignItems={"center"}>
          <Avatar size='sm' name='Kent Dodds' src={avatar }/>
          <p style={{marginLeft:"10px"}}>{name}</p>
          </Box>
          <Box>
            <button onClick={()=>navigate(`/${_id}`)} className="morebtn">More Details</button>

          </Box>
        </Box>

   </Box>
  )
}

export default Card