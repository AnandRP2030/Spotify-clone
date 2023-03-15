import React from 'react'
import {Card, CardBody, CardFooter, Heading, Image, Stack, Text, IconButton} from '@chakra-ui/react'
import {FaCaretRight} from 'react-icons/fa'
function CardCom() {
  return (
    <Card  bg='blackAlpha.900' color={'white'} direction='column' p='4px' >
      <CardBody >
        <Image src='https://i.scdn.co/image/ab67706f0000000239c7f666dce699bae067bc72' alt='image' boxSize={'170px'} objectFit='cover' />
      </CardBody>
     
        <Heading Heading as='h6' size='xs' noOfLines={1} >Name of category Here</Heading>
        <Text noOfLines={2} color='#7c7c7c' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis atque temporibus unde, corporis a non inventore necessitatibus, magni eaque sed laborum dicta incidunt. A dolorum reprehenderit, mollitia vel provident non!
        Magnam quia .</Text>
       
    </Card>
  )
}

export default CardCom;
