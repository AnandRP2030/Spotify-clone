import Navbar from "../CommonComponents/Navbar/Navbar";
import Sidebar from "../CommonComponents/Sidebar/sidebar";
import {Card, Container, Flex, Grid,Box} from '@chakra-ui/react'
import CardCom from "../CommonComponents/Card/Card";
import RecentlyPayed from "./HomeComponents/RecentlyPayed";
import styles from './home.module.css'
const Home = () => {
    return (
         <Container maxWidth="100%" className={styles.homeContainer} >
            <Navbar/>
            {/* <Flex> */}
            <Sidebar/>
           <RecentlyPayed/>
         </Container>
    )
}

export {Home};