import { Box } from "@chakra-ui/react";
import PlayButton from "../../CommonComponents/PlayButton/playButton";
import TableRow from "./TableRow";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { likePageDisplaySong } from "../../../Redux/LikedSong/likeThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  let likedSongList = useSelector((state) => state.likedSong[0]);
  console.log('songlist', likedSongList)

  console.log(likedSongList, "list of");
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
      bg="#1e1737"
      w="auto"
      h="auto"
      p="5%"
      pt="2%"
      pos="relative"
      left="195px"
    >
      <PlayButton />
      <TableContainer w="80%" mt="50px" color="white">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th w="10%">#</Th>
              <Th w="40%">Title</Th>
              <Th w="30%">Type</Th>

              <Th w="3%"></Th>
              <Th w="20%">
                <Icon boxSize={5} as={AiOutlineClockCircle} />{" "}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {likedSongList?.map((song, index) => {
              return <TableRow key={index} id={index+1} name={song.artist.name} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LikeBody;
