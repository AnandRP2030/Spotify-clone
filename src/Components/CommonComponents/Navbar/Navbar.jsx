import React, { useRef } from "react";
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

import { FaPowerOff } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar({bgColor}) {
  const initRef = React.useRef();
  const { isOpen, onToggle, onOpen } = useDisclosure();
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
        position='fixed'
        top="0px"
        left='175px'
        right={'0'}
        // // left={"240px"}
        // zIndex={3}
        //
      >
       
        {/* //! pagination buttons */}
        <Box
        // ml={'240px'}
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
          <Input  htmlSize={32} width='auto' borderRadius='50px'bg={'white'} focusBorderColor='black.400' placeholder="What do you want to listen to?" _placeholder={{ opacity: 1, color: 'gray.500' }} />
          <InputLeftElement>
          <SearchIcon boxSize={'20px'} color={'#000000'} />
          </InputLeftElement>
        </InputGroup>
        </Box>
        <Spacer />

        {/* //! navbar section */}
        <Flex align={"center"} alignItems="center">
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
          {/* <Button
            className={styles.navButtons}
            variant={"unstyled"}
            bg="blackAlpha.100"
            // color="white"
            m={"0 8px"}
            borderRadius="25px"
            w="90px"
            border={"1px solid white"}
            w="90px"
            display={["none", "none", "none", "flex", "flex"]}
          >
            Upgrade
          </Button>

          <Flex
            justify={"space-between"}
            align={"center"}
            bg="black"
            // color={"white"}
            borderRadius="25px"
            h={"45px"}
            w={"xsm"}
          >
            <Image
              borderRadius="full"
              boxSize="40px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              onMouseOver={onToggle}
              onMouseOut={onToggle}
              onClick={onOpen}
            />

            <Text
              variant={"unstyled"}
              bg={"blackAlpha.200"}
              mr={1}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              User Name{" "}
            </Text>
            <Box>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={IconButton}
                      borderRadius="25px"
                      display={["none", "none", "flex", "flex", "flex"]}
                      bg="blackAlpha.900"
                      color="white"
                      variant={"unstyled"}
                      aria-label="Options"
                      icon={isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
                    />
                    <MenuList w="xsm" bg={"black"}>
                      <MenuItem
                        icon={<ExternalLinkIcon boxSize={5} />}
                        bg="black"
                        color="white"
                      >
                        {" "}
                        Account
                      </MenuItem>
                      <MenuItem icon={<EditIcon boxSize={5} />} bg="black">
                        {" "}
                        Profile
                      </MenuItem>
                      <MenuItem
                        icon={<ExternalLinkIcon boxSize={5} />}
                        bg="black"
                      >
                        {" "}
                        Upgrade to Premium
                      </MenuItem>
                      <MenuItem
                        icon={<ExternalLinkIcon boxSize={5} />}
                        bg="black"
                      >
                        {" "}
                        Download
                      </MenuItem>
                      <MenuItem
                        icon={<ExternalLinkIcon boxSize={5} />}
                        bg="black"
                      >
                        {" "}
                        Settings
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<FaPowerOff size={18} />} bg="black">
                        {" "}
                        Log out
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
            <Fade in={isOpen} mt="50px" mr="80px">
              <Button
                bg="blackAlpha.900"
                color="white"
                mt={"100px"}
                ml="-110px"
              >
                User Name
              </Button>
            </Fade>
          </Flex> */}
        </Flex>
      </Flex>
      <Box></Box>
    </>
  );
}

export default Navbar;
