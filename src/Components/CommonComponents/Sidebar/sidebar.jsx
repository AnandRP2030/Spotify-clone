import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import SideComp from "./sideComponents";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import style from './sidebar.module.css';

const Sidebar = () => {
  return (
    <Box className={style.sideBox} bgColor="#000" h="680px" w="240px" pl="23px" pt="23px">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
        style={{ maxWidth: "130px", cursor: "pointer"}}
      />

      <Box mt='40px'>
        <SideComp icon={HiOutlineHome} name="Home" />
        <SideComp icon={IoSearchOutline} name="Search" />
        <SideComp icon={BiLibrary} name="Library" />
      </Box>

      <Grid h='150px'  mt='20px' color='#7c7c7c' >
        <Flex mt='20px' className={style.hoverText}>
          <img
            width="25px"
            style={{height: '25px'}}
            src="https://raw.githubusercontent.com/AnandRP2030/Resource-website/master/images/playlist.jpg"
            alt="icon"
          />
          <Text color='#a3a3a3' ml='13px' >Create Playlist</Text>
        </Flex>
        <Flex  mt='20px' className={style.hoverText}>
          <img
            style={{height: '25px'}}
            width="25px"
            src="https://raw.githubusercontent.com/AnandRP2030/Resource-website/master/images/love.jpg"
            alt="icon"
          />
          <Text ml='13px' color='#a3a3a3'> Liked Songs</Text>
        </Flex>
        <Flex  mt='20px' className={style.hoverText}>
          <img
            width="25px"
            style={{height: '25px'}}
            src="https://github.com/AnandRP2030/Resource-website/blob/master/images/bookmark.svg.jpg?raw=true"
            alt="icon"
          />
          <Text ml='13px' color='#a3a3a3'> Your Episodes</Text>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Sidebar;
