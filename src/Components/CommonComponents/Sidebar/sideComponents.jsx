import { Box, Icon,Flex, Text } from "@chakra-ui/react";
// import svg from "./logo-svg/homeLogo.svg"

const SideComp = ({icon, name}) => {

    return (
        <Flex>
            <Icon as={icon} boxSize={6} color='white'/>
            <Text color='white'> {name}</Text>
        </Flex>
    )
}

export default SideComp;