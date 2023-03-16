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
  Divider
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
      // let arr = response.data;
      // document.getElementById("container").innerHTML = "";
      // arr.map((song, index) => {
      //   let img = song.album.cover_xl;
      //   let songUrl = song.preview;
      //   append(img, songUrl);
      // });
    });
  }
    useEffect(()=>{
      showData("arjit singh");
    },[])
// console.log("data",data)
  return (
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
        {/* <Flex className={style.cardContainer}> */}
          {
           data.length>0? data.map((ele)=>{
              // console.log(ele)
              return(
                // <h1>{ele.album.cover_xl}</h1>
                <CardCom prop={ele} />
              )
            }):null
          }
        {/* </Flex> */}
      </Grid>
      <Divider mt={'20px'}/>
    </Box>
  );
}

export default SpotifyPlaylist;
