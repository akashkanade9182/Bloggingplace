import React from 'react'
import { Box, SimpleGrid,Button } from '@chakra-ui/react'
import "../Styles/Footer.css"
import {BsFacebook,BsYoutube,BsPinterest,BsMessenger,BsInstagram,BsTwitter,} from "react-icons/bs"




const Footer = () => {
  return (
 <Box display={"flex"} color="white" p="20px 20px" w="100%" mt="30px" bgColor="blueviolet" className='footerbox' h="auto"  position="relative" flexDirection="column">
   
    <Box   w="100%" display="flex" alignItems={"center"}mt="10px" flexDirection={["column","column","row","row"]} justifyContent="space-around">
        <Box w="60%"display={"flex"}>
        </Box>
   
              <div style={{display:"flex" ,width:"40%",justifyContent:"space-around" ,alignItems:"center"}}>
              <BsFacebook size="2em"/>
              <BsYoutube size="2em"/>
              <BsPinterest size="2em"/>
              <BsMessenger size="2em"/>
              <BsInstagram size="2em"/>
              <BsTwitter size="2em"/>
              </div>
  </Box>
 <SimpleGrid w="100%" columns={[2,2,3,5]} spacing="5" mt="15px">
  <Box>
  <h3 style={{fontWeight:"bold"}}>Help</h3>
        <ul>Order status</ul>
        <ul>About us</ul>
        <ul>Contact us</ul>
        <ul>Warranty</ul>
        <ul>FAQs</ul>
        <ul>Sitemap</ul>
  </Box>
  <Box>
  <h3 style={{fontWeight:"bold"}}>Support</h3>
        <ul>Payment information</ul>
        <ul>Shipping guide</ul>
        <ul> Wholesale</ul>
        <ul> Drop shipping</ul>
        <ul>Blog</ul>
        <ul> Affiliates</ul>
  </Box>
  <Box>
  <h3 style={{fontWeight:"bold"}}> Policies</h3>
        <ul> Terms & conditions</ul>
        <ul> Return policy</ul>
        <ul> Privacy</ul>
        <ul> Declaration</ul>
        <ul> Customs</ul>
        <ul>Sitemap</ul>
  </Box>
  <Box>
  <h3 style={{fontWeight:"bold"}}>Download The App</h3>
        <div class="scan">
            <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png" alt=""/></div>
            <div>
                <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg" alt=""/>
                <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg" alt=""/>
                <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg" alt=""/>
            </div>
        </div>
        <h3 style={{fontWeight:"bold"}}>Connect with us</h3>
     
  </Box>
  <Box>
 <div><i class="fi fi-rr-envelope"></i><p>Service_payment@geekbuying.com</p></div>
        <div><i class="fi fi-rr-ticket"></i><p>Ticket</p></div>
        <div><i class="fi fi-rr-child-head"></i><p>Live Chat</p></div>
 </Box>
 </SimpleGrid>
 <Box mt="20px">
 <p style={{fontWeight:"bold"}}>Popular Searches</p>
    <SimpleGrid w="100%" columns={[2,2,3,5]} spacing={"5"}>
        <Button bgColor="white" color="black">Geekbuying Coupon</Button>
        <Button bgColor="white" color="black">Roborock Q7 Max</Button>
        <Button bgColor="white" color="black" >Tronsmart Bluetooth Speakers</Button>
        <Button bgColor="white" color="black">Windows Mini PC</Button>
        <Button bgColor="white" color="black">ENGWE X26</Button>
        <Button bgColor="white" color="black">android tv boxes</Button>
        <Button bgColor="white" color="black">KugooKirin G2 Pro</Button>
        <Button bgColor="white" color="black">Mi Band 7 Pro</Button>
        <Button bgColor="white" color="black">LDS Robot Vacuum</Button>
        <Button bgColor="white" color="black">Electric Bike</Button>
    </SimpleGrid>
    
 </Box>
 <Box mt="30px" w="100%" display={"flex"} alignItems="center" justifyContent={"space-around"}>
 <img src="https://content1.geekbuying.com/V1.4/en/images/indexV7/foot_icon.png" alt="lol"/> 
 </Box>


 </Box>
  )
}

export default Footer;