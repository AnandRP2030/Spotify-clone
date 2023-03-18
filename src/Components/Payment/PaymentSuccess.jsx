import React from 'react'
import { Box, Center, Image, Text } from '@chakra-ui/react'

export const PaymentSuccess = () => {
    const order = Math.random()
  return (
   
    <Box >
    <Image src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif" mx="auto" />
    <Center mt={-12}>
         <Text color="#00d34f" fontSize="56px" fontWeight="bold">You're Premium now.</Text>
         
    </Center>
    <Center>
         <Text fontWeight="semibold">Your payment is complete. A receipt for order #{order} will be sent to your email</Text>
         </Center>
    </Box>
  
  )
}
