import { Box } from "@chakra-ui/react";
import PlayButton from "../../CommonComponents/PlayButton/playButton";
import TableRow from "./TableRow";
import {AiOutlineClockCircle} from "react-icons/ai"
import { Icon } from "@chakra-ui/react";


import {
  Table,
  TableCaption,
  Tbody,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const LikeBody = () => {
  return (
    <Box
      bg="#1e1737"
      w="auto"
      h="1000px"
      p="5%"
      pt="2%"
      pos="relative"
      left="195px"
    >
      <PlayButton />
      <TableContainer w="80%" mt='50px' color='white'>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th w='10%' >#</Th>
              <Th w='40%'>Title</Th>
              <Th w='30%'>Type</Th>    
              
              <Th w='3%'></Th>
              <Th w='20%'><Icon boxSize={5} as={AiOutlineClockCircle}/> </Th>    
            </Tr>
          </Thead>
          <Tbody>
            <TableRow/>
            <TableRow/>
            
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LikeBody;
