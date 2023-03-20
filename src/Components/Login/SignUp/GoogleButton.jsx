import React from 'react'
import {Button,Flex} from "@chakra-ui/react"
import { GoogleLoginButton } from 'react-social-login-buttons'
export function GoogleButton({loging}) {
    return (<Flex minW="16.8rem" ><GoogleLoginButton onClick={loging} style={{borderRadius:"50px",padding:"0 20px"}}/></Flex>
        // <Button
        //     h="50px"
        //     w="65%"
        //     borderRadius="50px"
        //     _hover={{ w: "68%", h: "51px", fontSize: "17px" }}
        //     // mt="-200px"
        //     onClick={loging}
        // >
        //     <Image
        //         src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
        //         h="53%"
        //         mr="10px"
        //     />{" "}
        //     Sign up with Google
        // </Button>
    )
}
