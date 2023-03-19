import {
  Card,
  Flex,
  CardHeader,
  Button,
  Text,
  ButtonGroup,
  Heading,
  Divider,
  Stack,
  Image,
  CardBody,
  CardFooter,
  Grid,
  Spacer,
  GridItem,
  Icon,

} from "@chakra-ui/react";
import {MdPlaylistAdd} from 'react-icons/md';

const PlaylistCard = ({ img, title, des }) => {
  console.log("worke");
  return (
    <Card maxW="sm" w='233px' h="270px" > 
      <CardBody p='10px'>
        <Image src={img} alt="img" w='70%' borderRadius='80%' margin='auto'/>
        <Grid
            mt='10px'
          h="100px"
          w="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={1}
          
        >
          <GridItem colSpan={4} >
            <Heading size="md">
              {title}
            </Heading>
          </GridItem>
          <GridItem colSpan={1} >
            <Icon as={MdPlaylistAdd} color='#4a9ad4' cursor='pointer' boxSize={8} />
          </GridItem>
          <GridItem colSpan={5} >
            <Text fontSize='18px'>{des}</Text>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default PlaylistCard;
