import Sidebar from "../CommonComponents/Sidebar/sidebar";
import LikeHeader from "./LikeComponents/LikeHeader";
import Navbar from "../CommonComponents/Navbar/Navbar";
import LikeBody from "./LikeComponents/LikeBody";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import { useState } from "react";

const Like = () => {
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: ""
  });

  return (
    <div>
        <Sidebar />
        <LikeHeader />

        <LikeBody setPlaySong={setPlaySong} />
        {playSong.playSong ? (
          <SpotifyAudioPlayer song={playSong} />
        ) : (
          ""
        )}
    </div>
  );
};

export { Like };
