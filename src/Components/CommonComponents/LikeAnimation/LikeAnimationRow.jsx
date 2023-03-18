import React, { useState } from "react";
import "./LikeAnimation.css";
import {Box, useToast, Center } from "@chakra-ui/react";
import { likePageDisplaySong, likeSongRemove } from "../../../Redux/LikedSong/likeThunk";
import {useDispatch} from 'react-redux';

const LikeAnimationRow = ({url}) => {
  const toast = useToast();
  const dispatch = useDispatch();


  const [rowActive, setRowActive] = useState(true);

  const handleClick = () => {
    setRowActive(!rowActive);

    if (!rowActive) {
      toast({
        position: "top-center",

        duration: 1000,
        render: () => (
          <Center color="white" p={3} bg="black">
            Song Added to Favorite
          </Center>
        ),
      });

     

    } else {
      toast({
        position: "top-center",
        duration: 1000,
        render: () => (
          <Center color="white" p={3}  bgGradient='linear(to-r, #131616, #130b0b)'>
            Song Removed from Favorite
          </Center> 
        ),
      });
      dispatch(likeSongRemove(url))
    }
  };

  return (
    <div
      w="50px"
      h="50px"
      className={`heart ${rowActive ? "is-active" : ""} controlPos`}
      onClick={handleClick}
    ></div>
  );
};

export default LikeAnimationRow;
