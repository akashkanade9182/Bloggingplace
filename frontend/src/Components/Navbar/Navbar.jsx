import React from 'react'
import {NavLink} from "react-router-dom"
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
    Button,Stack,FormLabel,Input,Box,InputGroup,InputLeftAddon,Select,InputRightAddon,Textarea
  } from '@chakra-ui/react'
import { useSelector } from 'react-redux'


const links=[
    {
        title:"Homepgae",
        path:"/"
    },
    {
        title:"Login",
        path:"/login"
    },
    {
        title:"Signup",
        path:"/signup"
    },
    {
      title:"New Blog",
      path:"/newblog"
  },
  {
    title:"Blogs",
    path:"/blogpage"
},
]

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const data=useSelector(store=>store.AuthReducer.data)

  return (
    <Box className='navbarbox'  display={"flex"} justifyContent="space-around" alignItems={"center"}>
        {
            links.map((ele,index)=>(
                <NavLink key={index} to={ele.path} >{ele.title}</NavLink>
            ))
        }
        <Button  colorScheme='black' onClick={onOpen}>
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
    >
      <DrawerOverlay  />
      <DrawerContent bgColor={"#272150"}>
        <DrawerCloseButton color="white"/>
        <DrawerHeader color="white" textAlign={"center"} borderBottomWidth='1px'>
          Profile
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing='24px'>
          <WrapItem display={"flex"} justifyContent="space-around">
    <Avatar size='2xl' name='Segun Adebayo' src={data.avatar?data.avatar:'https://bit.ly/sage-adebayo'} />{' '}
  </WrapItem>
 <Box w="100%" display={"flex"} justifyContent="space-around" >
    <Box border="1px solid white" w="40%" bgColor={"white"}></Box>
    <Box border="1px solid white" w="40%" bgColor={"white"}></Box>
 </Box>
 <Heading fontSize={"24px"} color="white">{data.name}</Heading>
           

            <Box>
              <FormLabel htmlFor='owner'>Select Owner</FormLabel>
              <Select id='owner' defaultValue='segun'>
                <option value='segun'>Segun Adebayo</option>
                <option value='kola'>Kola Tioluwani</option>
              </Select>
            </Box>

            <Box>
              <FormLabel htmlFor='desc'>Description</FormLabel>
              <Textarea id='desc' />
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth='1px'>
          <Button className="cancelbtn" color="white" border={"none"} variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
         
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
        

    </Box>
  )
}
