import { Link } from "react-router-dom";
import { Box, Text, Flex, Grid, Icon } from "@chakra-ui/react";
import SideComp from "./sideComponents";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import style from "./sidebar.module.css";
import { FiDownload } from "react-icons/fi";

const Sidebar = () => {

  const downloadApp = () => {
    // i have a app in my asset folder how i can download that app when this function invoked
    
      const link = document.createElement('a');
      link.download = 'spotifyAppDownload.exe';
      link.href = `https://github.com/AnandRP2030/Spotify-clone/raw/master/src/Components/CommonComponents/Sidebar/assets/spotifyAppDownload.exe`
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('called')
  }

  return (
    <Box
      className={style.sideBox}
      bg="#000000"
      position={"fixed"}
      w="196px"
      p={"24px"}
      zIndex={5}
      top="0"
      bottom={"0"}
      left="0"
    >
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
        style={{ maxWidth: "130px", cursor: "pointer" }}
      />

      <Box mt="12px" p={"10px 0"} color="#b3b3b3">
        <Link to="/">
          <SideComp icon={HiOutlineHome} name="Home" />
        </Link>
        <SideComp icon={IoSearchOutline} name="Search" />
        <SideComp icon={BiLibrary} name="Library" />
      </Box>

      <Grid h="150px" mt="20px" borderBottomColor="white">
        <Flex mt="20px" className={style.hoverText}>
          <img
            width="25px"
            style={{ height: "25px" }}
            src="https://raw.githubusercontent.com/AnandRP2030/Resource-website/master/images/playlist.jpg"
            alt="icon"
          />
          <Text color="#b3b3b3" ml="13px">
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
          <Link to="/like">
            <Text ml="13px" color="#b3b3b3">
              {" "}
              Liked Songs
            </Text>
          </Link>
        </Flex>
        <Flex mt="20px" className={style.hoverText}>
          <img
            width="25px"
            style={{ height: "25px" }}
            src="https://github.com/AnandRP2030/Resource-website/blob/master/images/bookmark.svg.jpg?raw=true"
            alt="icon"
          />
          <Text ml="13px" color="#b3b3b3">
            {" "}
            Your Episodes
          </Text>
        </Flex>
      </Grid>

      <Box h="180px" w="100%" mt="20px">
        {/* playlist box work pending  */}
      </Box>

      <Flex style={{ cursor: "pointer" }} onClick={downloadApp} color="white" w="100%" h="50px">
        <Icon as={FiDownload} boxSize={6} />
        <Text ml="15px"> Install App </Text>
      </Flex>
    </Box>
  );
};

export default Sidebar;
