import Navbar from "../CommonComponents/Navbar/Navbar";
import Sidebar from "../CommonComponents/Sidebar/sidebar";
import {Card, Container, Flex, Grid,Box} from '@chakra-ui/react'
import CardCom from "../CommonComponents/Card/Card";
import RecentlyPayed from "./HomeComponents/RecentlyPayed";
import styles from './home.module.css'
import Preview from "./HomeComponents/Preview";
import SpotifyPlaylist from "./HomeComponents/SpotifyPlaylist";
import {Divider} from '@chakra-ui/react'
import { useEffect, useState } from "react";
const Home = () => {
  
    return (
         <Box ml='196px'
         mb='100px'
          className={styles.homeContainer} >
            <Navbar bgColor="black"/>
            <SpotifyPlaylist/>
            <Sidebar/>
           <Preview/>
           
         </Box>
    )
}

export {Home};