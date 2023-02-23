import React, { useEffect, useState } from 'react'
import {Navigate, NavLink, useNavigate} from "react-router-dom"
import "../../Styles/Navbar.css"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    WrapItem,
    Avatar,
    Heading,
    DrawerCloseButton,useDisclosure,
    Button,Stack,FormLabel,Input,Box,InputGroup,InputLeftAddon,Select,InputRightAddon,Textarea, useToast
  } from '@chakra-ui/react'
import { useSelector ,useDispatch} from 'react-redux'
import axios from 'axios'
import { getLogout } from '../../Redux/AuthReducer/action'

const links=[
    {
        title:"Homepgae",
        path:"/"
    },
  
  
  {
    title:"Blogs",
    path:"/blogpage"
},
 
{
  title:"New Blog",
  path:"/newblog"
},
{
  title:"Login",
  path:"/login"
},

]


const getData=(payload)=>{
  return axios.get("https://shy-erin-cricket-fez.cyclic.app/blogs/getallblogs",payload)
}
export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const data=useSelector(store=>store.AuthReducer.data)
    const isAuth=useSelector(store=>store.AuthReducer.isAuth)
    const [count,setCount]=useState(0)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const toast = useToast()


  // useEffect(()=>{
  //  getData({author:data.id}).then((r)=>{
  // setCount(r.data.length)
  // console.log(r.data)
  //  })
  // },[data.id])

  const handleLogout=()=>{
    dispatch(getLogout)
    toast({
      position: 'top-center',
      render: () => (
        <div style={{backgroundColor:" #272150",borderRadius:"9px" ,display:"flex",justifyContent:"space-around",alignItems:"center",width:"400px",height:"50px",color:"white"}}>
          Logout successfull
        </div>
      ),
    })
    onClose()
  }

  const handleOpen=()=>{
    onOpen()
    getData({author:data.id}).then((r)=>{
    let c=r.data.filter((ele)=>ele.author===data.id).length;
    setCount(c)
    console.log(c)
       })
  }
  return (
    <Box className='navbarbox'  display={"flex"} justifyContent="space-around" alignItems={"center"}>
        {
            links.map((ele,index)=>(
                <NavLink activeClassName="active" key={index} to={ele.path} >{ele.title}</NavLink>
            ))
        }
        <Button isDisabled={!isAuth} colorScheme='black' onClick={handleOpen}>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='right'
      initialFocusRef={firstField}
      onClose={onClose}
      display={!isAuth && "none"}
    >
      <DrawerOverlay  />
      <DrawerContent bgColor={"#272150"}>
        <DrawerCloseButton color="white"/>
        <DrawerHeader color="white" textAlign={"center"} borderBottomWidth='1px'>
          Profile
        </DrawerHeader>

        <DrawerBody >
          <Stack spacing='24px'>
          <WrapItem display={"flex"} justifyContent="space-around">
    <Avatar size='2xl' bgColor={"white"} name={data.name} src={data.avatar?data.avatar:'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'} />{' '}
  </WrapItem>
 <Box w="100%" display={"flex"} justifyContent="space-around" >
    <Box border="1px solid white" w="40%" bgColor={"white"}></Box>
    <Box border="1px solid white" w="40%" bgColor={"white"}></Box>
 </Box>
 <Heading fontSize={"24px"} textAlign="center" color="white">{data.name}</Heading>
           
<Box border="1px solid white" h="50px" display="flex" justifyContent={"space-around"} alignItems="center" color={"white"} borderRadius="10px">
  Total Blogs :-{count}

</Box>
<Box border="1px solid white" h="50px" display="flex" justifyContent={"space-around"} alignItems="center" color={"white"} borderRadius="10px">
  followers :-0

</Box>
<Box border="1px solid blueviolet" onClick={()=>navigate("/profilepage")} className="cancelbtn" h="50px" display="flex" justifyContent={"space-around"} alignItems="center" color={"white"} borderRadius="10px">
  View all Blogs 

</Box>
           

           
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth='1px' display={"flex"} justifyContent="space-around">
        <Button className="cancelbtn" isDisabled={!isAuth} onClick={handleLogout} color="white" border={"none"} variant='outline' mr={3} >
         Log out
          </Button>
          <Button className="cancelbtn" color="white" border={"none"} variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
         
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
        

    </Box>
  )
}
