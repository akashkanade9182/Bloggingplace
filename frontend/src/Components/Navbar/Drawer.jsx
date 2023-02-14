import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,
    Button,Stack,FormLabel,Input,Box,InputGroup,InputLeftAddon,Select,InputRightAddon,Textarea
  } from '@chakra-ui/react'


const Drawers = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  

  return (
    <>
    <Button  colorScheme='black' onClick={onOpen}>
    {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg> */}
hiiii
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='right'
      initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px'>
          Create a new account
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing='24px'>
            <Box>
              <FormLabel htmlFor='username'>Name</FormLabel>
              <Input
                ref={firstField}
                id='username'
                placeholder='Please enter user name'
              />
            </Box>

            <Box>
              <FormLabel htmlFor='url'>Url</FormLabel>
              <InputGroup>
                <InputLeftAddon>http://</InputLeftAddon>
                <Input
                  type='url'
                  id='url'
                  placeholder='Please enter domain'
                />
                <InputRightAddon>.com</InputRightAddon>
              </InputGroup>
            </Box>

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
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue'>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Drawer