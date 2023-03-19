import React from "react";
import { Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl,
  Icon,
  Grid,
  Center,
  GridItem,
} from "@chakra-ui/react";

import PlaylistCard from "./PlaylistCard";


const PlaylistBody = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [playlistArr, setPlaylistArr] = useState([
    {
      title: "Sample",
      description: "This is sample",
      img: "https://www.shutterstock.com/image-vector/music-player-on-smartphone-lp-600w-1100594210.jpg",
    },

  ]);

  return (
    <Box
      w="100%"
      h="auto"
      pt="50px"
      bgGradient="linear(to-l, #5c96b2, #000001)"
    >
      <Box pos="relative" w="auto" left="20%">
        <Button h="150px" w="150px" onClick={onOpen} bgColor="#d4d5cb">
          <Icon boxSize={8} as={AiOutlinePlus} />
        </Button>
        <Text mt="20px" fontSize="2xl" color="#d4d5cb">
          {" "}
          New Playlist
        </Text>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent pos="relative" top="250px">
            <ModalHeader>Create New Playlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} placeholder="Playlist title" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input placeholder="Playlist description" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      <Center mt="50px" ml="50px">
        <Grid templateColumns="repeat(4, 1fr)" w="80%" pos='relative' left='7%' p="1%" h="500px" gap={6}>
          {playlistArr.map((card) => {

            return <PlaylistCard img={card.img} title={card.title} des={card.description}/>
          })}
        </Grid>
      </Center>
    </Box>
  );
};
export default PlaylistBody;
