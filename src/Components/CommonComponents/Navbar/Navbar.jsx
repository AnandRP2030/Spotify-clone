import React, { useRef, useState } from "react";
import {
  Flex,
  Box,
  Button,
  Spacer,
  IconButton,
  Image,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverHeader,
  Fade,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  transition,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  ExternalLinkIcon,
  EditIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";

import { FaPowerOff, FaBars } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayListAction from "../../../Redux/SpotifyPlayList/PlayListAction";

import Sidebar from "../Sidebar/sidebar";
import SideComp from "../Sidebar/sideComponents";

function Navbar({ bgColor }) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef()

  const [search, setSearch] = useState("");
  const dispatch = useDispatch("");
  const getSongBySearch = (e) => {
    const key = e.code;
    if (key == "Enter") {
      dispatch(PlayListAction(search));
    }
  };
  // console.log(search);
const useDetails = JSON.parse(localStorage.getItem("userDetail"));
let flag;
if(useDetails !=null){
  flag = useDetails[0].email_verified;
}
//  
// console.log(useDetails[0].email_verified);
  return (
    <>
      <Flex
        className={styles.navbarContainer}
        justify="space-between"
        bg={bgColor}
        padding="7px 30px"
        // w={["100%","100%","100%","80%",'80%']}
        // w='100%'
        // h={"10vh"}
        // // position={['relative','relative','relative','fixed']}
        position="fixed"
        top="0px"
        left={["80px", "80px", "175px", "175px", "175px", "175px"]}
        right={"0"}
        // // left={"240px"}
        // zIndex={3}
        //
      >
        {/* //! pagination buttons */}
        <Box
          // ml={'240px'}
          display={["none", "none", "none", "flex", "flex"]}
        >
          <IconButton
            color={"#7a7a7a"}
            cursor="not-allowed"
            bg={"#090909"}
            mr="10px"
            r={"white"}
            aria-label="Search database"
            size="lg"
            variant={"unstyled"}
            icon={<ChevronLeftIcon boxSize={8} />}
          />
          <IconButton
            color={"#7a7a7a"}
            cursor="not-allowed"
            bg={"#090909"}
            mr="10px"
            r={"white"}
            aria-label="Search database"
            size="lg"
            variant={"unstyled"}
            icon={<ChevronRightIcon boxSize={8} />}
          />
        </Box>

       {/* //! search section */}
       <Box>
          <InputGroup>
            <Input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyUp={getSongBySearch}
              htmlSize={25}
              width="auto"
              borderRadius="50px"
              bg={"white"}
              height={['33px','33px','33px','33px','37px','38px']}
              focusBorderColor="black.400"
              placeholder="What do you want to listen to?"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
            <InputLeftElement>
              <SearchIcon boxSize={"20px"} color={"#000000"} />
            </InputLeftElement>
          </InputGroup>
        </Box>
        <Spacer />


              {/* //! conditional Rendering in navbar comp */}

        {
          useDetails != null ? <>
                
        </>:
        <>
         {/* //! navbar section */}
         <Flex align={"center"} alignItems="center">
          <Link to={"/upgrade"}>
            <Button
              className={styles.navButtons}
              variant={"unstyled"}
              bg="#090909"
              m={"0 8px"}
              borderRadius="25px"
              w="90px"
              display={["none", "none", "none", "flex", "flex"]}
            >
              Premium
            </Button>
          </Link>

          <Link to={""}>
            <Button
              className={styles.navButtons}
              variant={"unstyled"}
              bg="#090909"
              m={"0 8px"}
              borderRadius="25px"
              w="90px"
              display={["none", "none", "none", "flex", "flex"]}
            >
              Support
            </Button>
          </Link>

          <Link to={""}>
            <Button
              className={styles.navButtons}
              variant={"unstyled"}
              bg="#090909"
              m={"0 8px"}
              borderRadius="25px"
              w="90px"
              display={["none", "none", "none", "flex", "flex"]}
            >
              Download
            </Button>
          </Link>

          {/* //! vertical Divider  */}

          <Divider
            orientation="vertical"
            m={"0 20px"}
            fontSize="25px"
            w={"auto"}
            display={["none", "none", "none", "flex", "flex"]}
          />

          <Link to={"/signup"}>
            <Button
              className={styles.navButtons}
              variant={"unstyled"}
              bg="#090909"
              m={"0 8px"}
              borderRadius="25px"
              w="90px"
              display={["none", "none", "none", "flex", "flex"]}
            >
              Sign Up
            </Button>
          </Link>

          <Link to={"/login"}>
            <Button
              className={styles.login}
              variant={"unstyled"}
              bg="#ffffff"
              color={"#000000"}
              borderRadius="25px"
              w="90px"
              display={["none", "none", "none", "flex", "flex"]}
            >
              Log In
            </Button>
          </Link>
          </Flex>
        </>
        }



{/* <Box>
         <Button
          ml={"-15px"}
          mr="15px"
          display={["block", "block", "none", "none", "none"]}
          ref={btnRef}
          onClick={onOpen}
        >
          <FaBars size="30px" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerContent>
            <DrawerBody>
            <Box>
              <HiOutlineHome/>
              <BiLibrary/>
              <SideComp icon={HiOutlineHome} name="Home"/>
              <SideComp icon={BiLibrary} name="Library"/>
            </Box>
             
            </DrawerBody>
          </DrawerContent> 

        </Drawer>
        // </Box> */} 
        {/* //! menubutton */}
        

       
       
       
      </Flex>
      <Box></Box>
    </>
  );
}

export default Navbar;
