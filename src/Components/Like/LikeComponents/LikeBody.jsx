import { Box } from "@chakra-ui/react";
import PlayButton from "../../CommonComponents/PlayButton/playButton";
import TableRow from "./TableRow";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { likePageDisplaySong } from "../../../Redux/LikedSong/likeThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from "../like.module.css";
import {
  Table,
  Tbody,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const LikeBody = () => {

  const[playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false
  })

  const Player = () => (
    <AudioPlayer
      autoPlay
      src="https://cdns-preview-e.dzcdn.net/stream/c-e54e737bf7f2cf479c66a13ba5116848-2.mp3"
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );

  Player();

  const dispatch = useDispatch();
  let likedSongList = useSelector((state) => state.likeReducer.likedSong[0]);
  // console.log('songlist', likedSongList)
  if (likedSongList) {
    console.log(likedSongList, "list of");
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

  return (
    <Box
      bgGradient='linear(to-l, #5337aa, #090612)'
      w="auto"
      h="auto"
      p="5%"
      pt="2%"
      pos="relative"
      left="195px"
    >
      <PlayButton />
      <TableContainer w="80%" mt="50px" color="white">
        <Table variant="simple" borderColor="transparent">
          <Thead>
            <Tr id={style.likeTableRow}>
              <Th color='white' fontSize='18px' w="4%">No.</Th>
              <Th color='white' fontSize='18px' w="8%" >Title</Th>
              <Th color='white' fontSize='18px' w="40%"></Th>
              <Th color='white' fontSize='18px' w="30%">Type</Th>

              <Th w="3%"></Th>
              <Th color='white' w="20%" fontSize='18px'>
                <Icon boxSize={5} as={AiOutlineClockCircle} />{" "}
                
              </Th>
            </Tr>
          </Thead>
          <Tbody borderColor="transparent">
            {likedSongList?.map((song, index) => {
              return (
                <TableRow
                  key={index}
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
