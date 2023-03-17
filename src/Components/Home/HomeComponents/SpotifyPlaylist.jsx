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

function SpotifyPlaylist() {
  const [data, setData] = useState([]);
  
  function showData(singer) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f0d9fa046cmsh6df55b1f1af7fe2p15efc9jsn9790aeeb6432",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${singer}`, options)
    .then((response) => response.json())
    .then((response) => {
      // console.log('res' ,response)
      setData(response.data);
    });
  }
    useEffect(()=>{
      showData("arjit singh");
    },[])
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
      <Divider mt={'20px'}/>
    </Box>:
    <Box  boxShadow='lg' bg='white'>
    <Skeleton height='100vh'startColor='#434343' endColor='#000000' />
    {/* <SkeletonText mt='4' isLoaded={false} startColor='#d7d2cc' endColor='#304352' noOfLines={24} spacing='4' skeletonHeight='2' /> */}
  </Box>
  );
}

export default SpotifyPlaylist;
