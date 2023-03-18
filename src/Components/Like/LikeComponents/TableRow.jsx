import { AiFillHeart } from "react-icons/ai";
import { Tr, Td, Icon, Image, Text } from "@chakra-ui/react";
import style from "../like.module.css";
import LikeAnimation from "../../CommonComponents/LikeAnimation/LikeAnimation";

const TableRow = ({
  name,
  image,
  id,
  title,
  type,
  duration,
  setPlaySong,
  url,
}) => {
  const iconStyle = {
    color: "#1ed760",
    cursor: "pointer",
  };

  let inSec = Number(duration);
  let mins = Math.floor(inSec / 60);
  let secs = Math.ceil(inSec % 60);
  let formatted = `${mins}: ${secs < 10 ? "0" : ""}${secs} `;

  const cursor = {
    cursor: "pointer",
  };

  const handleRemove = () => {
    alert("remove function pending");
  };

  const songClicked = () => {
    setPlaySong({
      songUrl: url,
      img: image,
      songName: title,
      singer: name,
      playSong: true,
    });
    console.log("called");
  };

  const iconsStyle = {
    color: "#1ed760",
    cursor: "pointer",
  };
  
  const songAdded = () => {
    console.log('added to like')
  }


  return (
    <Tr
      p='0'

      onClick={songClicked}
      id={style.likeTableRow}
      h={20}
      _hover={{
        bgGradient: "linear(to-l, #5337aa, #090612)",
        cursor: "pointer",
      }}
    >
      <Td borderColor="black" fontSize="20px">
        {id}
      </Td>
      <Td borderColor="black">
        {" "}
        <Image
          style={cursor}
          borderRadius={"full"}
          src={image}
          alt="song image"
        />
      </Td>
      <Td borderColor="black">
        <Text fontSize={"22px"} mb="10px">
          {title}
        </Text>
        <Text style={cursor} as="u">
          {name}
        </Text>
      </Td>
      <Td borderColor="black">{"Song"}</Td>
      <Td borderColor="black"   p='0'>
        <Icon
          ml="20px"
          as={LikeAnimation}
          style={iconsStyle}
          onClick={() => songAdded()}
          boxSize={7}
        />
      </Td>
      <Td borderColor="black">{formatted} </Td>
    </Tr>
  );
};

export default TableRow;
