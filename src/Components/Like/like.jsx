import Sidebar from "../CommonComponents/Sidebar/sidebar";
import LikeHeader from "./LikeComponents/LikeHeader";
import Navbar from "../CommonComponents/Navbar/Navbar";
import PlayButton from "../CommonComponents/PlayButton/playButton";
import LikeBody from "./LikeComponents/LikeBody";

const Like = () => {
  return (
    <div>
      <Sidebar />
      <Navbar/>
      <LikeHeader />
      <LikeBody/>
      
    </div>
  );
};

export { Like };
