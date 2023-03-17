import React from 'react'
import {Flex,keyframes} from "@chakra-ui/react"


// -----------key frame animation----------------
const animationKeyframes = keyframes`
  0% { transform:  rotate(0deg);  }
  50% { transform:  rotate(180deg);  }
  100% { transform:  rotate(360deg); }
  0% { transform:  rotate(0deg);  }
`;

const animation = `${animationKeyframes} 12s linear infinite`;
// -------------------//////--------------------


export function BackAnime() {
  return (
    <Flex
    h="60.8%"
            w={["80%","51.3%","39.3%","31.3%","26.3%","24.4%"]}
            bg="#232324"
            borderRadius="8px"
            display="flex"
            position="relative"
            alignItems="center"
            justifyContent="center"
            boxShadow="#1ed760 0px 19px 38px, #1ed760 0px 15px 12px"
            minWidth="380px"
            overflow="hidden"
    >
        <Flex
         h="100%"
         w="100%"
         bg="red"
         position="absolute"
         bgGradient="linear(0deg,transparent,transparent,blue,blue)"
         animation={animation}
        >

        </Flex>

    </Flex>
  )
}
