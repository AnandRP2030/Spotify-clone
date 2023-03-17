import { AiFillHeart } from "react-icons/ai";
import { Tr, Td, Icon, Image, Text } from "@chakra-ui/react";

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
    <Tr borderColor="black">
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
      <Td borderColor="black">{type}</Td>
      <Td borderColor="black">
        {" "}
        <Icon style={iconStyle} as={AiFillHeart} onClick={handleRemove} />{" "}
      </Td>
      <Td borderColor="black">{formatted} </Td>
    </Tr>
  );
};

export default TableRow;
