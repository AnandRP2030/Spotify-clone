import Sidebar from "../CommonComponents/Sidebar/sidebar";
import LikeHeader from "./LikeComponents/LikeHeader";
import Navbar from "../CommonComponents/Navbar/Navbar";
import LikeBody from "./LikeComponents/LikeBody";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import { useState } from "react";
import AnimatedPages from "../../AinmatedPages";
import { Grid, Box, Skeleton } from "@chakra-ui/react";

const Like = () => {
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
  });

  return (
    <div>
      <AnimatedPages>
        <Sidebar />
        <LikeHeader />

        <Like Body setPlaySong={setPlaySong} />
        {playSong.playSong ? (
          <SpotifyAudioPlayer playSong={playSong.songUrl} />
        ) : (
          ""
        )}
      </AnimatedPages>
    </div>
  );
};

export { Like };
