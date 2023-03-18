import Navbar from "../CommonComponents/Navbar/Navbar";
import Sidebar from "../CommonComponents/Sidebar/sidebar";
import { Card, Container, Flex, Grid, Box } from "@chakra-ui/react";
import CardCom from "../CommonComponents/Card/Card";
import RecentlyPayed from "./HomeComponents/RecentlyPayed";
import styles from "./home.module.css";
import Preview from "./HomeComponents/Preview";
import SpotifyPlaylist from "./HomeComponents/SpotifyPlaylist";
import { Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AnimatedPages from "../../AinmatedPages";
import SearchedData from "./HomeComponents/SearchPage";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
const Home = () => {
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });

  const [playList, setPlayList] = useState([]);
  return (
    <AnimatedPages>
      <Box ml={["80px","80px" ,"196px","196px","196px","196px"]} mb="80px" className={styles.homeContainer}>
        <Navbar bgColor="black" />
        <AnimatedPages>
        <SpotifyPlaylist artist={'Arjit Singh'} heading={"Arjit Singh"} setPlaySong={setPlaySong} />
        <SearchedData setPlaySong={setPlaySong}/>
        <SpotifyPlaylist artist={'Badshah'} heading={"Badshah"} setPlaySong={setPlaySong} />
        <SpotifyPlaylist artist={'Neha Kakkar'} heading={"Neha Kakkar"} setPlaySong={setPlaySong}/>
        </AnimatedPages>
        <Sidebar />
        
      </Box>
      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : <Preview />}
       </AnimatedPages>
  );
};

export { Home };
