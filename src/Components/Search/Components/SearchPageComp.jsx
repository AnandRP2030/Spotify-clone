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
  Collapse,
  Button
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./SearchPageComp.module.css";
import CardCom from "../../CommonComponents/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import PlayListAction from "../../../Redux/SpotifyPlayList/PlayListAction";

function SearchPageComp({artist, heading, setPlaySong}) {
  const dispatch = useDispatch();
  // const [data, setData] = React.useState([])
  // const [show, setShow] = React.useState(false)

  // const handleToggle = () => setShow(!show);

  const data = useSelector((store)=>{
    return(store.playListReducer.songs)
  })  

    useEffect(()=>{
       dispatch(PlayListAction(artist))
    },[useSelector,dispatch,artist])
console.log("data",data)
  return (
    data?.length>0?
    
    <Box className={style.SpotifyPlaylist} mb='-40px' >
      <Flex justify={'space-between'} mt={['42px','42px','42px','60px','60px']}  >
      <Heading  >More like {heading}</Heading>   
      {/* <Button variant={'unstyled'} color={'#fff'} size='sm' onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button> */}
      </Flex>
      {/* <Collapse startingHeight={250} in={show} > */}
      <Grid className={style.listContainer} flexWrap='wrap' gridTemplateColumns={[
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                    "repeat(5, 1fr)",
                    "repeat(6, 1fr)",
                ]} gap='20px' >
          {
            data.map((ele)=>{
              return(                
              <CardCom prop={ele} setPlaySong={setPlaySong} />               
              )
            })
          }

      </Grid>
      {/* </Collapse> */}
      
      <Divider mt={'10px'} mb={'-50px'} />
    </Box>:
    <Grid  flexWrap='wrap' gridTemplateColumns={[
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
      "repeat(4, 1fr)",
      "repeat(6, 1fr)",
      "repeat(6, 1fr)",
  ]} gap='20px' bg='#121212' >
    {
      [...new Array(20)].map((ele)=>{
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

export default SearchPageComp;
