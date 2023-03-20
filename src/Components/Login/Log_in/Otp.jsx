import React, { useState } from "react";
import {
  HStack,
  PinInput,
  PinInputField,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { BackAnime } from "./BackAnime";
import { PinInputOtp } from "./PinInput";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Otp() {

  const data = useSelector((payload) => {
    return payload.SignupReducer
})
  const navigate = useNavigate();
  const toast = useToast();

  const [otp, setOtp] = useState("");
  function getOtp(e) {
    console.log(e);
    setOtp(e);
}
    function SucessLogin(event) {
event.preventDefault()
        if ("1234" == otp) {
            toast({
                title: 'SignUP Successful',
                description: "redirected to Login page in 2 second",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top',
            })
            setTimeout(() => {
                navigate("/Login")
            }, 3000)
        } else {
            toast({
                title: 'SignUp Failed',
                description: "You may have entered the wrong OTP",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top',
            })
        }
      }
  function SucessLogin(event) {
    event.preventDefault();
    if ("1234" == otp) {
      toast({
        title: "SignUP Successful",
        description: "redirected to Login page in 2 second",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/Login");
      }, 3000);
    } else {
      toast({
        title: "SignUp Failed",
        description: "You may have entered the wrong OTP",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

    }
  }

  return (
    <Flex
      w="1fr"
      h="100vh"
      bg="#1f2120"
      justify="center"
      alignItems="center"
      boxSizing="boderBox"
    >
      <BackAnime />
      <Flex
        h="60%"
        w="24%"
        bg="#232324"
        borderRadius="8px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // boxShadow="#1ed760 0px 19px 38px, #1ed760 0px 15px 12px"
        minWidth="380px"
        zIndex="100"
        position="fixed"
      >
        <form
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormControl
            display="flex"
            // bg="green"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            h="100%"
            w="80%"
            color="white"
            // mb="80px"
            align="center"
            isRequired
          >
            <Heading textAlign="center" mt="40px">
              Enter Your OTP
            </Heading>
            {/* ---------Pin INput---------------- */}
            <PinInputOtp getOtp={getOtp} />
            <Input
              type="submit"
              value="Submit"
              bg="#1ed760"
              color="black"
              fontSize="20px"
              fontWeight="700"
              borderRadius="40px"
              mb="45px"
              h="12%"
              border="none"
              _hover={{ bg: "#b5f7bc", transition: "fade" }}
              onClick={SucessLogin}
            />
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
}

