import { Box, HStack } from "@chakra-ui/react";
import PlayButton from "../../CommonComponents/PlayButton/playButton";
import TableRow from "./TableRow";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { likePageDisplaySong } from "../../../Redux/LikedSong/likeThunk";
// import { likePageDisplaySong } from "../../../Redux/LikedSong/likeThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import LikeAnimation from "../../CommonComponents/LikeAnimation/LikeAnimation";
import { BsThreeDots } from "react-icons/bs";
import { useToast } from '@chakra-ui/react'
import style from "../Library.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  ExternalLinkIcon,
  EditIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { FaPowerOff, FaBars } from "react-icons/fa";
import {
  Table,
  Tbody,
  TableContainer,
  Thead,
  Tr,
  Th,
  Menu,
  MenuButton, 
  IconButton,
   MenuList, 
   MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import LikeDumb from "../../CommonComponents/LikeAnimation/LikeDumb";
const LibraryBody = ({ setPlaySong, bg1, bg2 }) => {

  const toast = useToast();
  const navigate = useNavigate()

  const dispatch = useDispatch();
  let likedSongList = useSelector((state) => state.likeReducer.likedSong);

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
    // getData();
  }, []);

  const threeDotClicked = () => {
    console.log("c");
  };

  return (
    <Box
      bgGradient={`linear(to-b, ${bg1}, ${bg2})`}
      w="88%"
      h="auto"
      p="5%"
      pt="2%"
      pos="relative"
      left="195px"
    >
      <HStack w="40%">
        <PlayButton />
        <LikeDumb/>
        
        <Box>
                {/* //! menubutton */}
                <Menu color='white'>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={IconButton}
                        bg="blackAlpha.900"
                        color="white"
                        variant={"unstyled"}
                        aria-label="Options"
                        boxSize={10} 
                        icon={
                          isOpen ? <BsThreeDots /> : <BsThreeDots/> 
                        }
                      />
                      <MenuList w="xsm" bg={"black"}>
                        <MenuItem
                          icon={<ExternalLinkIcon boxSize={5} />}
                          bg="black"
                          color="white"
                        >
                          {" "}
                          Add to queue
                        </MenuItem>
                        <MenuItem color='white' icon={<EditIcon boxSize={5} />} bg="black">
                          {" "}
                          Profile
                        </MenuItem>
                        <MenuItem
                          icon={<ExternalLinkIcon boxSize={5} />}
                          bg="black"
                          color='white'
                          onClick={() => {
                            localStorage.removeItem("userDetail");
                            navigate("/upgrade");
                          }}
                        >
                          {" "}
                          Upgrade to Premium
                        </MenuItem>
                        <MenuItem
                          icon={<ExternalLinkIcon boxSize={5} />}
                          bg="black"
                          color='white'
                        >
                          {" "}
                          Report
                        </MenuItem>
                        <MenuItem
                          icon={<ExternalLinkIcon boxSize={5} />}
                          bg="black"
                          color='white'
                        >
                          {" "}
                          Add to playlist
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                          icon={<FaPowerOff size={18} />}
                          bg="black"
                          color='white'
                          onClick={() => {
                            localStorage.removeItem("userDetail");
                            navigate("/");
                          }}
                        >
                          Log out
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Box>


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
                  url={song.songUrl}
                  setPlaySong={setPlaySong}
                  id={index + 1}
                  image={song.img}
                  name={song.singer}
                  title={song.songName}
                  duration={32*(index+2)}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LibraryBody;
