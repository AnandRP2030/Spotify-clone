import { Box, Text, Flex, Grid, Icon } from "@chakra-ui/react";
import SideComp from "./sideComponents";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import style from "./sidebar.module.css";
import { FiDownload } from "react-icons/fi";

const Sidebar = () => {
  return (
    <Box
      className={style.sideBox}
      bgColor="#000"
      h="100vh"
      w="240px"
      pl="23px"
      pt="23px"
      zIndex={3}
      top='0px'
      position={'fixed'}
     left='0'
    >
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
        style={{ maxWidth: "130px", cursor: "pointer" }}
      />

      <Box mt="40px">
        <SideComp icon={HiOutlineHome} name="Home" />
        <SideComp icon={IoSearchOutline} name="Search" />
        <SideComp icon={BiLibrary} name="Library" />
      </Box>

      <Grid h='150px'  mt='20px' color='#7c7c7c' borderBottomColor='white'>
        <Flex mt='20px' className={style.hoverText}>
          <img
            width="25px"
            style={{ height: "25px" }}
            src="https://raw.githubusercontent.com/AnandRP2030/Resource-website/master/images/playlist.jpg"
            alt="icon"
          />
          <Text color="#a3a3a3" ml="13px">
            Create Playlist
          </Text>
        </Flex>
        <Flex mt="20px" className={style.hoverText}>
          <img
            style={{ height: "25px" }}
            width="25px"
            src="https://raw.githubusercontent.com/AnandRP2030/Resource-website/master/images/love.jpg"
            alt="icon"
          />
          <Text ml="13px" color="#a3a3a3">
            {" "}
            Liked Songs
          </Text>
        </Flex>
        <Flex mt="20px" className={style.hoverText}>
          <img
            width="25px"
            style={{ height: "25px" }}
            src="https://github.com/AnandRP2030/Resource-website/blob/master/images/bookmark.svg.jpg?raw=true"
            alt="icon"
          />
          <Text ml="13px" color="#a3a3a3">
            {" "}
            Your Episodes
          </Text>
        </Flex>
      </Grid>

      <Box  h="220px" w="100%" mt="20px">
        {/* playlist box work pending  */}
      </Box>
        
      <Flex style={{cursor:'pointer'}} color='white' w="100%" h="50px">
        <Icon as={FiDownload} boxSize={6} />
        <Text ml='15px'> Install App </Text>
      </Flex>
    </Box>
  );
};

export default Sidebar;