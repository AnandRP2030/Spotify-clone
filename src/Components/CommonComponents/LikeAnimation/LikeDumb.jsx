import React, { useState } from "react";
import "./LikeAnimation.css";
import {Box, useToast, Center } from "@chakra-ui/react";
import { likePageDisplaySong } from "../../../Redux/LikedSong/likeThunk";
import {useDispatch} from 'react-redux';


const LikeDumb = () => {


  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);

   
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

export default LikeDumb;
