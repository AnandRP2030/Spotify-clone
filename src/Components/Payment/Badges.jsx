import React from 'react'
import {Flex, Image} from "@chakra-ui/react"

export const Badges = ({isMargin}) => {
  return (
    <Flex maxH="20px" gap={1} mt="15px"  ml={isMargin ? "20px": "0px"}>
          
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/74fdfa7c-bd09-4641-af92-eb69784aa553_paytm.svg"
                  h="full"
                  />
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/4a4cb925-7583-42cc-b44a-be66c05c4edb_lipi.svg"
                 h="full"
                  />
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/fbb9ab64-1a3b-44c8-aa51-ef7f6c596db6_visa.svg"
                 h="full"
                  />
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/263e7c3b-3f4a-46ba-9db2-24617e3fdb9c_amex.svg"
                 h="full"
                  />
           
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/7ae2af66-ecab-4bb3-b094-c5ae92d42407_mastercard.svg"
                 h="full"
                  />
                  
               
                </Flex>
  )
}
