import { Box, Text, Image, Circle } from "@chakra-ui/react";
import Navbar from "../../CommonComponents/Navbar/Navbar";
import { useState } from "react";


const LikeHeader = () => {

    const[userData, setUserData] = useState({
        name: "User name",
        noOfSong: 2
    })

  return (
    <Box
     
      h="340px"
      w="auto"
      left="195px"
      pos="relative"
      bgGradient="linear(to-r, #322754, #4826b2)"
    >
      ,
      <Image
        src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        h="58%"
        w="14.2%"
        pos="relative"
        alt="Like-logo"
        top="80px"
        left="2%"
      />
      <Box w='50%' h='200px' color='#fff' pos='relative' left='18%' bottom='105px'>
        <Text as='b' ml='6px'> Playlist</Text>
        <br/>
        <Text fontSize='88px' as='b' > Liked Songs</Text>
        <br/>
        
        {/* make dynamic here */}
        <Text as='b' ml='6px'> {userData.name}   {userData.noOfSong}  songs </Text>
      </Box>
    </Box>
  );
};

export default LikeHeader;
