import React, { useEffect, useState } from "react";
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
  Button,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./SpotifyPlaylist.module.css";
import CardCom from "../../CommonComponents/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import PlayListAction from "../../../Redux/SpotifyPlayList/PlayListAction";
import { useNavigate } from "react-router-dom";
const arr = [
  {
    album: {
      id: 159458892,
      title: "Arjit Singh",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/f9bebdebb6db8441a126b5f2fb0c85d4/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "3830821",
      name: "Arjit Singh",
    },
    preview:
      "https://cdns-preview-e.dzcdn.net/stream/c-ed45fd1e58cb4726403ee6d37c361ff1-2.mp3",
    title_short: "Bairiya",
  },
  {
    album: {
      id: 414487277,
      title: "Lata Mangeshkar",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/32b1dd7a97164ba140791834d70f7d4f/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "154035302",
      name: "Lata MangeshKar",
    },
    preview:
      "https://cdns-preview-e.dzcdn.net/stream/c-eb0e254acff4e91f6810d4f16535589b-5.mp3",
    title_short: "Kabhi Khushi Kabhie Gham",
  },
  {
    album: {
      id: 14914239,
      title: "A.R. Rahman",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/bd34315ef977a62a9e28c1ab19bb8ac4/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "491",
      name: "A.R. Rahman",
    },
    preview:
      "https://cdns-preview-c.dzcdn.net/stream/c-ca3e28f49c902abc4ba65fffdca28718-2.mp3",
    title_short: "Nee Singam Dhan",
  },
  {
    album: {
      id: 13923414,
      title: "Pritam",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/d4914ccd414067cd5e2c108867079a85/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "290619",
      name: "Pritam",
    },
    preview:
      "https://cdns-preview-7.dzcdn.net/stream/c-7ff66c33e0071dc1bf6a3a5478047468-3.mp3",
    title_short: 'Kesariya (From "Brahmastra")',
  },
  {
    album: {
      id: 56402172,
      title: "Neha Kakkar",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/37e57f35a2fc007eab0c0e8a03237d59/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "129846",
      name: "Neha Kakkar",
    },
    preview:
      "https://cdns-preview-2.dzcdn.net/stream/c-2e8e5bb63db61f165011af17e22f483f-3.mp3",
    title_short: "Nagada Sang Dhol",
  },
  // {
  //   album: {
  //     id: 388926307,
  //     title: "Vishal-Shekhar",
  //     cover_xl:
  //       "https://e-cdns-images.dzcdn.net/images/artist/4d2a0ddc16e20cee01b55735c285d45e/1000x1000-000000-80-0-0.jpg",
  //   },
  //   artist: {
  //     id: "7760",
  //     name: "Vishal-Shekhar",
  //   },
  // },
];
function SuggestedArtists({setPlaySong }) {

  const songClicked = (prop) => {
    console.log("songClicked");
    setPlaySong({
      songUrl: prop.preview,
      img: prop.album.cover_xl,
      songName: prop.title_short,
      singer: prop.artist.name,
      playSong: true,
    });
    console.log("songClicked", setPlaySong);
  };
  //   console.log(artist,heading);
  const dispatch = useDispatch();
  //   const [data, setData] = React.useState([])

  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  //   const searchedSongs = useSelector((store)=>{
  //     return(store.playListReducer.songs)
  //   })
  // // setData(searchedSongs)
  const getArtistData = (artist) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f0d9fa046cmsh6df55b1f1af7fe2p15efc9jsn9790aeeb6432",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    let artist_IDs = JSON.parse(localStorage.getItem("artist_Id"));
    // console.log(artist_IDs);
    // artist_IDs?.map((ele)=>{
    // let IDs = ele;
    fetch(`https://api.deezer.com/artist/491/top?limit=50`, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.log("responce", response.data);
        // if(response.data != undefined){
        //   setData([...data,response.data]);
        // }
      })
      .catch((e) => {
        console.log(e.message);
      });
    // })
  };
  // console.log("set",data)
  useEffect(() => {
    // dispatch(PlayListAction(artist))
    getArtistData();
  }, []);
  // console.log("data",data)
  return arr?.length > 0 ? (
    <Box className={style.SpotifyPlaylist} mb="-40px" bg="#121212">
      <Flex
        justify={"space-between"}
        mt={["42px", "42px", "42px", "60px", "60px"]}
      >
        <Heading>Suggested Artist </Heading>
        <Button variant={"unstyled"} color={"#fff"} size="sm" mt="1rem">
          Show {show ? "Less" : "More"}
        </Button>
      </Flex>
      <Collapse startingHeight={250} in={show}>
        <Grid
          className={style.listContainer}
          flexWrap="wrap"
          gridTemplateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(5, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap="20px"
        >
          {arr.map((ele) => {
            return (
             
               <Box
              //   // position={'relative'}
                key={ele.album.id}
                className={style.cardContainer}
                onClick={() => {
              //     // dispatch(PlayListAction(ele.artist.name))
              //     navigate("/search");
                }}
              >
                <Image
                  src={ele.album.cover_xl}
                  alt="image"
                  borderRadius={"50%"}
                />
                {/* <Box 
                position={"absolute"}
                    top="-20vh" left='15px'  >
                  <BsHeart fontSize={'30px'} color={'white'} />
                </Box> */}
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
                    onClick={()=>{songClicked(ele)}}
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
                  {ele.album.title}
                </Heading>
                <Text className={style.songDesc} noOfLines={2}>
                  {ele.artist.name}
                </Text>
              </Box>
            );
          })}
        </Grid>
      </Collapse>

      {/* <Divider mt={'10px'} mb={'-50px'} /> */}
    </Box>
  ) : (
    <Grid
      flexWrap="wrap"
      gridTemplateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
      ]}
      gap="20px"
    >
      {[...new Array(20)].map((ele) => {
        return (
          <Box>
            <Skeleton height="300px" startColor="#000000" endColor="#434343" />
          </Box>
        );
      })}
      {/* <SkeletonText mt='4' isLoaded={false} startColor='#d7d2cc' endColor='#304352' noOfLines={24} spacing='4' skeletonHeight='2' /> */}
    </Grid>
  );
}

export default SuggestedArtists;
