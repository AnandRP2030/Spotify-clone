import React from 'react'
import {Flex,VStack,Image,Heading} from "@chakra-ui/react"
export function Head() {
    return (
        <Flex mb={["90px", "75px", "75px"]}>
            <VStack mt="40px" h="80px">
                <Image
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                    alt="Spotify_Logo"
                    h="full"
                />
                <Heading
                    fontSize="2rem"
                    letterSpacing="-0.04em"
                    textAlign="center"
                >
                    Sign up for free to start listening.
                </Heading>
            </VStack>
        </Flex>
    )
}
