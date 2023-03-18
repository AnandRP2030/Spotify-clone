import { Box, HStack } from "@chakra-ui/react";
import PlayButton from "../../CommonComponents/PlayButton/playButton";
import TableRow from "./TableRow";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { likePageDisplaySong } from "../../../Redux/LikedSong/likeThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import LikeAnimation from "../../CommonComponents/LikeAnimation/LikeAnimation";
import { BsThreeDots } from "react-icons/bs";
import { useToast } from '@chakra-ui/react'
import style from "../like.module.css";
import {
  Table,
  Tbody,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Select,
} from "@chakra-ui/react";

const LikeBody = ({ setPlaySong, bg1, bg2 }) => {

  const toast = useToast();
  

  const dispatch = useDispatch();
  let likedSongList = useSelector((state) => state.likeReducer.likedSong[0]);

  if (likedSongList) {
    // console.log(likedSongList[0].preview, "list of");
  }

  const getData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f0d9fa046cmsh6df55b1f1af7fe2p15efc9jsn9790aeeb6432",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=Shreya%20Ghoshal`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(likePageDisplaySong(response.data));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const threeDotClicked = () => {
    console.log("c");
  };

  return (
    <Box
      bgGradient={`linear(to-l, ${bg1}, ${bg2})`}
      w="88%"
      h="auto"
      p="5%"
      pt="2%"
      pos="relative"
      left="195px"
    >
      <HStack w="40%">
        <PlayButton />
        <LikeAnimation />
        
        <Icon
          cursor="pointer"
          onClick={() => {
            threeDotClicked();
          }}
          color="#c1dcee"
          as={BsThreeDots}
          boxSize={6}
        >
          {/* This is react , chakra ui app, i want the behaviour when i click tho this icon i want to
        show this 3 option as a drop down menu   */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Icon>
      </HStack>

      <TableContainer w="95%" mt="50px" color="white">
        <Table variant="simple" borderColor="transparent">
          <Thead>
            <Tr id={style.likeTableRow}>
              <Th color="white" fontSize="18px" w="4%">
                No.
              </Th>
              <Th color="white" fontSize="18px" w="8%">
                Title
              </Th>
              <Th color="white" fontSize="18px" w="40%"></Th>
              <Th color="white" fontSize="18px" w="30%">
                Type
              </Th>

              <Th w="10%"></Th>
              <Th color="white" w="20%" fontSize="18px">
                <Icon boxSize={5} as={AiOutlineClockCircle} />{" "}
              </Th>
            </Tr>
          </Thead>
          <Tbody borderColor="transparent">
            {likedSongList?.map((song, index) => {
              return (
                <TableRow
                  key={index}
                  url={song.preview}
                  setPlaySong={setPlaySong}
                  id={index + 1}
                  image={song.album.cover_medium}
                  name={song.artist.name}
                  title={song.title_short}
                  type={song.type}
                  duration={song.duration}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LikeBody;
