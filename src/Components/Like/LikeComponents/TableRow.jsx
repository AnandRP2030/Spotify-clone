import { AiFillHeart } from "react-icons/ai";
import { Tr, Td, Icon, Image, Text } from "@chakra-ui/react";
import style from "../like.module.css";

const TableRow = ({ name, image, id, title, type, duration }) => {
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

  return (
    <Tr id={style.likeTableRow} h={20} _hover={{bgGradient:'linear(to-l, #5337aa, #090612)', cursor: 'pointer'}}> 
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
      <Td borderColor="black">
        {" "}
        <Icon boxSize={7} style={iconStyle} as={AiFillHeart} onClick={handleRemove} />{" "}
      </Td>
      <Td borderColor="black">{formatted} </Td>
    </Tr>
  );
};

export default TableRow;
