import { Box, Icon,Flex, Text } from "@chakra-ui/react";
// import svg from "./logo-svg/homeLogo.svg"
import style from './sidebar.module.css';

const SideComp = ({icon, name}) => {
    return (
        <Flex className={style.hoverText} h='30px' mt='10px'>
            <Icon as={icon} boxSize={7} />
            <Text  ml='10px'> {name}</Text>
        </Flex>
    )
}

export default SideComp;