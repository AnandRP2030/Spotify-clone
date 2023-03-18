import React, {useState} from 'react'
import Cards from 'react-credit-cards-2'
import { FormControl, Input , Button,Box, Center, Flex} from '@chakra-ui/react';
import 'react-credit-cards-2/es/styles-compiled.css';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';


export const CreditCard = () => {
    const  dispatch = useDispatch()

    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
        preview: false,
      });

      const paymentCheck = ()=>{
            dispatch({
                type:"PREMIUM USER"
            })
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        
        setState({
            ...state,
            [name]: value
        });
      }
    
      const handleFocus = (e) => {
        setState({
            ...state,
            focus:e.target.name
        })
      }
  return (
    <>
    <Box mt={15} boxShadow="  2px 59px 36px -50px rgba(31,207,28,0.75);
-webkit-box-shadow: 2px 59px 36px -50px rgba(31,207,28,0.75);
-moz-box-shadow: 2px 59px 36px -50px rgba(31,207,28,0.75)"
width="fit-content" mx="auto"
>
        <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
        preview={state.preview}
        
      />
      </Box>
    <form onSubmit={()=>paymentCheck} border="2px" p={3} style={{padding:"120px 20px"}}>
        <Input mt={5} color="white" type="text" name="name" value={state.name} placeholder="Name" required onChange={handleChange} onFocus={handleFocus}/>
        <Input mt={5} color="white" type="tel" name="number" value={state.number}  pattern="\d*" required minLength="16"  maxLength="16" placeholder='xxxx xxxx xxxx xxxx' onChange={handleChange} onFocus={handleFocus}/>
<Flex gap={3}>

        <Input mt={5} color="white" type="tel" name="expiry" pattern='\d*' minLength="6" maxLength="6" required value={state.expiry} placeholder="MM/YYYY" onChange={handleChange} onFocus={handleFocus}/>
        <Input mt={5} color="white" type="password" name="cvc" value={state.cvc} required pattern="\d*" minLength ="3" maxLength="3" placeholder='CVC' onChange={handleChange} onFocus={handleFocus}/>
</Flex>

        <Center>

        <Button type="submit"  colorScheme="green" mt={5} w="35%" rounded="20px" fontSize="18px">Payment</Button>
        </Center>
    </form>
    </>
  )
}
