import React from 'react'
import {Button,Image} from "@chakra-ui/react"
export function GoogleButton() {
    return (
        <Button
            h="50px"
            w="65%"
            borderRadius="50px"
            _hover={{ w: "68%", h: "51px", fontSize: "17px" }}
        >
            <Image
                src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
                h="53%"
                mr="10px"
            />{" "}
            Sign up with Google
        </Button>
    )
}
