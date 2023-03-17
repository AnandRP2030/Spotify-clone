import { Box } from "@chakra-ui/react";
import "react-h5-audio-player/lib/styles.css";
import { BsPlayCircleFill } from "react-icons/bs";
import AudioPlayer,  { RHAP_UI }  from "react-h5-audio-player";
import "./SpotifyPlayer.module.css"

const SpotifyAudioPlayer = ({ playSong }) => {
  return (
    <Box w="100%" zIndex={10} pos="relative">
      <AudioPlayer
        autoPlay
        src={playSong}
        showSkipControls={true}
        layout="stacked-reverse" 
        customIcons={{
          // play: BsPlayCircleFill,
        }}
        onPlay={(e) => console.log("onPlay")}np
      />
    </Box>
  );
};






export default SpotifyAudioPlayer;
