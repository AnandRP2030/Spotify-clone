import Sidebar from "../CommonComponents/Sidebar/sidebar";
import LikeHeader from "./LikeComponents/LikeHeader";
import Navbar from "../CommonComponents/Navbar/Navbar";
import LikeBody from "./LikeComponents/LikeBody";

const Like = () => {
  return (
    <div>
      <Sidebar />
      {/* <Navbar bgColor="#432799"/> */}
      <LikeHeader />
      <LikeBody/>
      
    </div>
  );
};

export { Like };
