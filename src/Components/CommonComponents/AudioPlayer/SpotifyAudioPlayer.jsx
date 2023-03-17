import { Box, Image, Flex, Text, Icon } from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import style from "./SpotifyPlayer.module.css";
import { AiFillHeart } from "react-icons/ai";

const SpotifyAudioPlayer = ({ song }) => {
  const iconsStyle = {
    color: "#1ed760",
    cursor: "pointer",
  };

  const songAdded = () => {
    console.log('added to like')
  }

  return (
    <Box w="100%" zIndex={10} pos="fixed" bottom="0">
      <AudioPlayer
        id={style.myId}
        autoPlay
        src={song.songUrl}
        showSkipControls={false}
        layout="stacked-reverse"
        customIcons={
          {
            // play: BsPlayCircleFill,
          }
        }
        customAdditionalControls={[]}
        customProgressBarSection={[
          <Flex ml="20px">
            <Image boxSize="50px" borderRadius="30%" src={song.img} alt="img" />
            <Box color="white" ml="10px" w='300px'>
              <Text fontSize="20px" mb="8px">
                {" "}
                {song.songName}
              </Text>
              <Text as="u"> {song.singer}</Text>
            </Box>
            <Icon
              ml='20px'
              as={AiFillHeart}
              style={iconsStyle}
              onClick={() => songAdded()}
              boxSize={7}
            />
          </Flex>,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.CURRENT_TIME,
          <div>/</div>,
          // RHAP_UI.DURATION,
        ]}
        onPlay={(e) => console.log("song playing")}
        np
      />
    </Box>
  );
};

export default SpotifyAudioPlayer;
