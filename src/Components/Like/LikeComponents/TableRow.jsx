import { AiFillHeart } from "react-icons/ai";
import { Tr, Td, Icon, Image, Text } from "@chakra-ui/react";

const TableRow = ({ name, image, id, title, type, duration }) => {
  const iconStyle = {
    color: "#1ed760",
    cursor: "pointer",
  };

  console.log(duration, 'dd')

  let inSec = Number(duration);
  let mins = Math.floor(inSec / 60);
  let secs = Math.ceil(inSec % 60);
  let formatted = `${mins}: ${secs < 10 ? '0' : ''}${secs} ` 

  const cursor = {
    cursor: 'pointer'
  }

  const handleRemove = () => {
    alert("remove function pending");
  };

  return (
    <Tr>
      <Td fontSize='20px'>{id}</Td>
      <Td>
        {" "}
        <Image style={cursor} borderRadius={"full"} src={image} alt="song image" />
      </Td>
      <Td>
        <Text fontSize={'22px'} mb='10px'>{title}</Text>
        <Text  style={cursor} as='u'>{name}</Text>
      </Td>
      <Td>{type}</Td>
      <Td>
        {" "}
        <Icon style={iconStyle} as={AiFillHeart} onClick={handleRemove} />{" "}
      </Td>
      <Td>{formatted} </Td>
    </Tr>
  );
};

export default TableRow;
