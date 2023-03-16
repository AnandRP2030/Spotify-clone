import React from 'react'
import { Button, Image } from "@chakra-ui/react"

export function FacebookButton() {
    return (
        <Button
            h="50px"
            w="65%"
            borderRadius="50px"
            mt={["auto", "auto", "-150px"]}
            _hover={{
                bg: "#405a93",
                w: "68%",
                h: "51px",
                fontSize: "17px",
            }}
            bg="#405a93"
            mb={["10px", "10px", "20px"]}
            color="white"
        >
            <Image
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/122_Facebook_F_logo_logos-512.png"
                h="42%"
                bg="white"
                borderRadius="90%"
                mr="10px"
            />{" "}
            Sign up with Facebook
        </Button>
    )
}
