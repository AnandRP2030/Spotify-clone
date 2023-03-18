import React, { useState } from "react";
import "./LikeAnimation.css";
import {Box, useToast, Center } from "@chakra-ui/react";
import { likePageDisplaySong, likeSongRemove } from "../../../Redux/LikedSong/likeThunk";
import {useDispatch} from 'react-redux';

const LikeAnimationRow = ({url}) => {
  const toast = useToast();
  const dispatch = useDispatch();


  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);

    if (!isActive) {
      toast({
        position: "top-center",

        duration: 1000,
        render: () => (
          <Center color="white" p={3} bg="black">
            Song Added to Favorite
          </Center>
        ),
      });

      dispatch(likeSongRemove(url))

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
    }
  };

  return (
    <div
      w="50px"
      h="50px"
      className={`heart ${isActive ? "is-active" : ""} controlPos`}
      onClick={handleClick}
    ></div>
  );
};

export default LikeAnimationRow;
