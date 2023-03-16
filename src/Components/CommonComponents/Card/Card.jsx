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
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";
function CardCom({prop}) {
  console.log(prop)
  const navigate = useNavigate();
  return (
    <Box className={style.cardContainer} onClick={()=>{navigate('/like')}} >
      <Image
        src={prop.album.cover_medium}
        alt="image"
      />

      <Box className={style.playButtonDiv}>
        {/* <span className={style.playButton}><FaCaretRight  /></span> */}
        {/* <span class="fa fa-play"></span> */}
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione
        eos, eius qui consectetur, exercitationem tenetur nam voluptas corporis
        alias commodi et, natus id laudantium culpa. Corporis maiores ratione
        laborum!
      </Text>
    </Box>
  );
}

export default CardCom;
