import { Box, Icon,Flex, Text, Center } from "@chakra-ui/react";
// import svg from "./logo-svg/homeLogo.svg"
import style from './sidebar.module.css';
const SideComp = ({icon, name}) => {
    return (
        <Flex className={style.hoverText} h='30px' mt='10px'>
            <Icon as={icon} boxSize={7} />
           <Center> <Text   ml='15px'> {name}</Text></Center>
        </Flex>
    )
}

export default SideComp;