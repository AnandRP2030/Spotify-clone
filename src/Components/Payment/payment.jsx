import React from 'react'
import { useSelector } from 'react-redux'
import{Flex, Box, Text, Center, List, ListItem, ListIcon} from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import {CheckCircleIcon} from '@chakra-ui/icons'

export const Payment = () => {

  const currentPlan = useSelector(state=>state.paymentReducer.currentPlan)
  const data = useSelector(state=>state.paymentReducer.plans[currentPlan-1])
  return (
    <Box bgGradient='linear(to-r, rgb(5,227,136),rgb(26,141,95))' p={8} h="100vh" >
      <Flex fontWeight="bold" 
      maxW="1140px"
      m="auto"
      minH="600px" boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" rounded="20px">
        {/* for displaying the pricePlans */}
         <Flex direction="column" flex="1" 
        //  bgGradient='linear(to-r, #60ed99,#1fbe52)'
        bg={data.bg} color={data.color}
          // color="white"
          py="40px"
         borderTopLeftRadius="20px" borderBottomLeftRadius="20px">
          <Center fontSize="38px"  >Music For Everyone.</Center>
          <Center fontSize="25px" >Premium Subscription</Center>
        
              <Flex justify="space-around" align="center" mt="20px">
                <Text fontSize="24px" >You chose</Text>
                <Link to="/upgrade"
                ><Text color={data.color==="white"?"black":"white"}
                fontWeight="semibold">Change plan</Text></Link>
              </Flex>
              {/* price and subscription details */}
              <Box bg={data.bg} color={data.color} w="90%" mx="auto" rounded="20px" py={8}>
              <Flex direction="column" 
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
               rounded="10px"
               p={3}>
                <Text fontSize="32px" >Premium {data.plan}</Text>
                <Text>{data.account}</Text>
              </Flex>
              <Text mt="8px" fontSize="18px">{data.day}</Text>
              </Box>
              {/* features of plan */}
              <List w="80%" mx="auto" fontSize="18px" mt={-5}>
                <ListItem mt="10px">
                <ListIcon as={CheckCircleIcon} color={data.color} boxSize={4}/>
                1 month free</ListItem>
                <ListItem mt="10px"><ListIcon as={CheckCircleIcon} color={data.color} boxSize={4}/>{data.adFree}</ListItem>
                <ListItem mt="10px"><ListIcon as={CheckCircleIcon} color={data.color} boxSize={4}/>{data.group}</ListItem>
                <ListItem mt="10px"><ListIcon as={CheckCircleIcon} color={data.color} boxSize={4}/>{data.download}</ListItem>
                {data.family !==undefined ? <ListItem mt="10px"><ListIcon as={CheckCircleIcon} color={data.color} boxSize={4}/>
                  {data.family}
                </ListItem> : null}
              </List>

              {/* monthly subscription details */}
              <Flex direction="column" mt="20px">
                <Box border="1px" w="98%" mx="auto" mt="5px" p={3}>
                  <Text fontSize="24px">3 months</Text>
                  <Text fontSize="15px">₹{data.month3} one-time payment</Text>
                  
                </Box>
                <Box border="1px" w="98%" mx="auto" mt="5px" p={3}>
                  <Text fontSize="24px">6 months</Text>
                  <Text fontSize="15px">₹{data.month6} one-time payment</Text>
                </Box>
                <Box border="1px" w="98%" mx="auto" mt="5px" p={3}>
                  <Text fontSize="24px">1 year</Text>
                  <Text fontSize="15px">₹{data.month12} one-time payment</Text>
                </Box>
              </Flex>

         </Flex >
         {/* for payment purpose */}
         <Flex bg="black" flex="1" borderTopRightRadius="20px" borderBottomRightRadius="20px">

         </Flex>
      </Flex>
    </Box>
  )
}
