import React,{useEffect, useState} from "react";
import {
  Flex,
  Heading,
  Box,
  Card,
  Image,
  IconButton,
  Center,
  Text,
  Grid,
  Divider,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./SpotifyPlaylist.module.css";
import CardCom from "../../CommonComponents/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import PlayListAction from "../../../Redux/SpotifyPlayList/PlayListAction";

function SpotifyPlaylist() {
  const dispatch = useDispatch();
  const data = useSelector((store)=>{
    return(store.playListReducer.songs)
  })  
    useEffect(()=>{
      dispatch(PlayListAction("Arjit Singh"))
    },[useSelector,dispatch])
// console.log("data",data)
  return (
    data?.length>0?
    <Box className={style.SpotifyPlaylist}>
      <Heading  >Spotify Playlist</Heading>

      <Grid className={style.listContainer} flexWrap='wrap' gridTemplateColumns={[
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                    "repeat(6, 1fr)",
                    "repeat(6, 1fr)",
                ]} gap='20px' >
          {
            data.map((ele)=>{
              return(
                <CardCom prop={ele} />
              )
            })
          }
      </Grid>
      <Divider m={'5px 0 20px 0'}/>
    </Box>:
    <Grid  flexWrap='wrap' gridTemplateColumns={[
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
      "repeat(4, 1fr)",
      "repeat(6, 1fr)",
      "repeat(6, 1fr)",
  ]} gap='20px' >
    {
      [... new Array(20)].map((ele)=>{
        return(
          <Box>
            <Skeleton height='300px'startColor='#000000' endColor='#434343' />
            </Box>
        )
      })
    }
    {/* <SkeletonText mt='4' isLoaded={false} startColor='#d7d2cc' endColor='#304352' noOfLines={24} spacing='4' skeletonHeight='2' /> */}
  </Grid>
  );
}

export default SpotifyPlaylist;
