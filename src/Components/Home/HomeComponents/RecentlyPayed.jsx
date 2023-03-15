import React from 'react'
import { Container, Grid, Heading, Box } from '@chakra-ui/react'
import CardCom from '../../CommonComponents/Card/Card'
function RecentlyPayed() {
  return (
    <Container   border={"5px solid red"} position='static' maxWidth={'86%'}   mt='70px' ml={'220px'} bg='blackAlpha.900' color={'white'} zIndex={-3} >
    <Heading >Recently Played</Heading>
    <Grid  w='100%' gridTemplateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)', 'repeat(6, 1fr)']} border={'5px solid blue'} ml='-15px'gap={2} justify='space-between' alignItems={'center'} >
            {[...new Array(20)].map((ele)=>{
                return(
                    <CardCom/>
                    
                   
                )
            })}
    </Grid>
    </Container>
  )
}

export default RecentlyPayed
