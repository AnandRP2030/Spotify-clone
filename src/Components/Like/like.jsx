import Sidebar from "../CommonComponents/Sidebar/sidebar";
import LikeHeader from "./LikeComponents/LikeHeader";
import Navbar from "../CommonComponents/Navbar/Navbar";
import LikeBody from "./LikeComponents/LikeBody";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import { useState } from "react";
import EmptyList from "../EmptyList/emptyList";

const Like = () => {
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });

  const [playList, setPlayList] = useState([]);

  return (
    <div>
      <Sidebar />

      <LikeHeader
        img={"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"}
        heading={"LikedSong"}
        bg1={"#322754"}
        bg2={"#4286b2"}
      />

      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : ""}

      {playList.length > 0 ? (
        <LikeBody bg1={"#5337aa"} bg2={"#090612"} setPlaySong={setPlaySong} />
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export { Like };
