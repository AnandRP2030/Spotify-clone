import { Box, Text, Image, Circle } from "@chakra-ui/react";
import Navbar from "../../CommonComponents/Navbar/Navbar";
import { useState } from "react";


const LikeHeader = (props) => {

    const[userData, setUserData] = useState({
        name: "User name",
        noOfSong: 2,

    })

  return (
    <Box
      h="340px"
      w="88%"
      left="195px"
      pos="relative"
      bgGradient={`linear(to-r, ${props.bg1}, ${props.bg2})`}
    >
      ,
      <Image
        src={props.img}
        h="55%"
        w="13.3%"
        pos="relative"
        alt="Like-logo"
        top="80px"
        left="2%"
      />
      <Box w='50%' h='200px' color='#fff' pos='relative' left='18%' bottom='105px'>
        <Text as='b' ml='6px'> Playlist</Text>
        <br/>
        <Text fontSize='88px' as='b' > {props.heading}</Text>
        <br/>
        
        {/* make dynamic here */}
        <Text as='b' ml='6px'> {userData.name}   {userData.noOfSong}  songs </Text>
      </Box>
    </Box>
  );
};

export default LikeHeader;
