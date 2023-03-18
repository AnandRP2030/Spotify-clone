import React from "react";
import {
  Card,
  Heading,
  Image,
  Text,
  IconButton,
  Center,
  Box,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./SearchCard.module.css";

function SearchCard({ color, name, imageUrl }) {
  //   const songClicked = () => {
  //     console.log("songClicked");
  //     setPlaySong({
  //       songUrl: prop.preview,
  //       img: prop.album.cover_xl,
  //       songName: prop.title_short,
  //       singer: prop.artist.name,
  //       playSong: true,
  //     });
  //     console.log("songClicked", setPlaySong);
  //   };
  return (
    <Box
      className={style.cardContainer}
      bg={color}
      h="250px"
      variant="unstyled"
      m={"5px 5px"}
    >
      <Heading as={"h6"} size="md" color={"white"} noOfLines={2}>
        {name}
      </Heading>

      <img src={imageUrl} alt="image"  className={style.image}  />

      {/* <Box className={style.playButtonDiv} key={prop.title_short}>
        <IconButton
          as={"Button"}
          className={style.playButton}
          right="10px"
          top="-60px"
          position={"absolute"}
          opacity="0"
          transition="all ease 0.4s"
          bg="#1db954"
          borderRadius="50%"
          onClick={songClicked}
          _hover={{ opacity: "1", transition: "all ease 0.4s" }}
          variant={"unstyled"}
          aria-label="Call Segun"
          size="lg"
          icon={
            <Center>
              <FaCaretRight fontSize={"30px"} />
            </Center>
          }
        />
      </Box> */}

      <Text className={style.songDesc} noOfLines={2}>
        {/* {prop.artist.name} */}
        {/* <h1>hiiiiiiiii</h1> */}
      </Text>
    </Box>
  );
}

export default SearchCard;
