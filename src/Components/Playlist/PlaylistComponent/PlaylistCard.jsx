import {
  Card,
  Text,
  Heading,
  Image,
  CardBody,
  Grid,
  GridItem,
  Icon,

} from "@chakra-ui/react";
import style from "../playlist.module.css"

import {MdPlaylistAdd} from 'react-icons/md';

const PlaylistCard = ({ img, title, des, count }) => {
  console.log("worke");

  let colors = [
    "#88efed",
    "#e13300",
    "#7f59d3",
    "#8ac24a",
    "#e91d63",
    "#ff9f00",
    "#0468aa",
    "#67a96a",
    "#fb641b",
    "#795448",
    "#ff5656",
    "#317e8b",
  ];

  if (!img) {
    img = "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2022/03/spotify-playlist-cover-orange-headphones-032322.jpg"
  }

  if (!title) {
    title = `My Playlist ${count}`
  }

  if (!des) {
    des = `Spotify Playlist`
  }

  return (
    <Card maxW="sm" w='233px' h="270px" bgColor={'black'} color='white' className={style.playlistCard} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"> 
      <CardBody p='10px'>
        <Image className={style.playlistCardImg} src={img} alt="img" w='73%' h='152px' borderRadius='80%' margin='auto'/>
        <Grid
            mt='10px'
          h="100px"
          w="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={1}
          
        >
          <GridItem colSpan={4} >
            <Heading size="md">
              {title}
            </Heading>
          </GridItem>
          <GridItem colSpan={1} >
            <Icon as={MdPlaylistAdd} color='#4a9ad4' cursor='pointer' boxSize={8} />
          </GridItem>
          <GridItem colSpan={5} >
            <Text fontSize='18px'>{des}</Text>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default PlaylistCard;
