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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  ExternalLinkIcon,
  EditIcon,
} from "@chakra-ui/icons";

import { FaPowerOff } from "react-icons/fa";
import styles from './Navbar.module.css'
function Navbar() {
  const initRef = React.useRef();
  const { isOpen, onToggle, onOpen } = useDisclosure();
  return (
    <>
      <Flex
        bg={"blackAlpha.900"}
        // w={["100%","100%","100%","80%",'80%']}
        w='100%'
        h={"10vh"}
        // position={['relative','relative','relative','fixed']}
        position='fixed'
        top="0px"
        // left={"240px"}
        zIndex={3}
        justify="space-between"
      >
        <Box ml={'240px'} >
          <IconButton
            bg={"blackAlpha.200"}
            color={"white"}
            aria-label="Search database"
            size="lg"
            variant={"unstyled"}
            icon={<ChevronLeftIcon boxSize={8} />}
            mr={2}
          />
          <IconButton
            bg="blackAlpha.100"
            color={"white"}
            aria-label="Call Segun"
            size="lg"
            variant={"unstyled"}
            icon={<ChevronRightIcon boxSize={8} />}
          />
        </Box>
        <Spacer />

        <Flex align={"center"} mr={10}>
          <Button
          className={styles.upgrade}
            variant={"unstyled"}
            bg="blackAlpha.100"
            color="white"
            mr={5}
            borderRadius="25px"
            border={"1px solid white"}
            w="110px"
            display={["none", "none", "none", "flex", "flex"]}
            
          >
            Upgrade
          </Button>

          <Flex
            justify={"space-between"}
            align={"center"}
            bg="black"
            color={"white"}
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
          </Flex>
        </Flex>
      </Flex>
      <Box></Box>
    </>
  );
}

export default Navbar;
