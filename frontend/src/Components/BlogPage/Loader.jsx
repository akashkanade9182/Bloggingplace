import {
           Box,
           Center,
           Flex,
           GridItem,
           Image,
           Select,
           SimpleGrid,
           Text,
           SkeletonCircle,
           SkeletonText,
         } from "@chakra-ui/react";
         import React from 'react'
      import "../../Styles/Card.css"   



         const Loader = () => {
           return (
                 
                                 <>
                                   <Box  padding="3" className="cardBox" boxShadow="lg" bg="gray.50">
                                     <SkeletonCircle m='auto' size="20" />
                                     <SkeletonText
                                       mt="4"
                                       noOfLines={6}
                                       spacing="4"
                                       skeletonHeight="5"
                                     />
                                   </Box>
                                 </>
           )
         }
         
         export default Loader