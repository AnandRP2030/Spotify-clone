import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  IconButton,
  Center,
  Box,
  Flex,
  Collapse,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { BsFillSuitHeartFill, BsHeart } from "react-icons/bs";

function CardCom({ prop ,setPlaySong}) {
  // console.log(prop);

  
  // const handleToggle = () => setShow(!show);
  // const navigate = useNavigate();

  const songClicked = ()=>{
    console.log('songClicked')
    setPlaySong({
      songUrl: prop.preview,
      img: prop.album.cover_xl,
      songName: prop.title_short,
      singer: prop.artist.name,
      playSong: true,
    })
    console.log('songClicked',setPlaySong)
  }
  return (
    <Box
      // position={'relative'}
      key={prop.id}
      className={style.cardContainer}
      // onClick={songClicked}
      // onClick={() => {
      //   navigate("/like");
      // }}
    >
      <Image src={prop.album.cover_xl} alt="image" />
     
      <Box className={style.playButtonDiv}>
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
          // _groupHover
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
      </Box>
      <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
        {prop.album.title}
      </Heading>
      <Text className={style.songDesc} noOfLines={2}>
        {prop.artist.name}
      </Text>
    </Box>
  );
}

export default CardCom;
