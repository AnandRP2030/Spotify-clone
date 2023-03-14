import { Box, Icon } from "@chakra-ui/react";
import SideComp from "./sideComponents";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import SpotifyIcon from "./logo-svg/LikedSong";

const Sidebar = () => {
  return (
    <div>
      <Box bgColor="#000" h="680px" w="240px" pl="23px" pt="23px">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo"
          style={{ maxWidth: "130px" }}
        />

        <SpotifyIcon />
        <SideComp icon={HiOutlineHome} name="Home" />
        <SideComp icon={IoSearchOutline} name="Search" />
        <SideComp icon={BiLibrary} name="Library" />
      </Box>
    </div>
  );
};

export default Sidebar;
