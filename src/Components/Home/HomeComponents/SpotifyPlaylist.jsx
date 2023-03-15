import React from "react";
import {
  Flex,
  Heading,
  Box,
  Card,
  Image,
  IconButton,
  Center,
  Text,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./SpotifyPlaylist.module.css";
import CardCom from "../../CommonComponents/Card/Card";
function SpotifyPlaylist() {
  return (
    <Box className={style.SpotifyPlaylist}>
      <Heading>Spotify Playlist</Heading>

      <Flex className={style.listContainer}>
        <Flex className={style.cardContainer}>
          <CardCom />
          <CardCom />
        </Flex>
      </Flex>
    </Box>
  );
}

export default SpotifyPlaylist;
