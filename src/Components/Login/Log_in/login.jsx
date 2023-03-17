import React from "react";
import { useNavigate } from "react-router-dom";
// import style from '../Log_in/login.module.css'
import { Flex, Box, keyframes, FormControl, Heading, Input, FormLabel, ScaleFade, transition,Text,Link } from "@chakra-ui/react"
// const animationKeyframes = keyframes`
//   0% { transform:  rotate(0deg);  }
//   100% { transform:  rotate(360deg); }
// `;

// const animation = `${animationKeyframes} 5s linear infinite`;
const Login = () => {

    const navigate = useNavigate();
    function loginUser() {
        console.log("login")
        navigate("/");
    }


    return <Flex
        w="1fr"
        h="100vh"
        bg="#1f2120"
        justify="center"
        alignItems="center"
        boxSizing="boderBox"
    >
        <Flex
            h="60%"
            w="24%"
            bg="#232324"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="#1ed760 0px 19px 38px, #1ed760 0px 15px 12px"
            minWidth="480px"
        >
            <form onSubmit={loginUser} style={{ width: "100%", height: "90%", display: "flex", margin: "auto", alignItems: "center", justifyContent: "center" }}>
                <FormControl
                    display="flex"
                    // bg="green"
                    flexDirection="column"
                    h="100%"
                    w="80%"
                    color="white"
                    // mb="80px"
                    align="center"
                    isRequired
                >
                    <Heading
                        textAlign="center"
                        mt="20px"
                    >
                        Sigin In
                    </Heading>
                    <FormLabel fontSize="0.875rem"
                        textAlign="left"
                        mt="40px"
                    >
                        What's your email
                    </FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter your email."
                        border="1px solid white"
                        _placeholder={{ color: "white" }}
                        _focus={{ border: "2px solid white" }}

                    />
                    <FormLabel fontSize="0.875rem"
                        textAlign="left"
                        mt="20px"
                    >
                        What's your password
                    </FormLabel>
                    <Input
                        type="password"
                        placeholder="Enter your Password"
                        border="1px solid white"
                        _placeholder={{ color: "white" }}
                        _focus={{ border: "2px solid white" }}
                        minLength={6}
                    />
                    <Input
                        type="submit"
                        value="Sign In"
                        bg="#1ed760"
                        color="black"
                        fontSize="20px"
                        fontWeight="700"
                        borderRadius="40px"
                        mt="25px"
                        h="12%"
                        border="none"
                        _hover={{ bg: "#b5f7bc", transition: "fade" }}
                    />
                    <Text
                        fontSize="16px"
                        mt="18px"
                        textAlign="center"
                    >
                        Don't have an account?{" "}
                        <Link
                            href="/Signup"
                            color="#1ed760"
                        >
                            Sign Up
                        </Link>
                        .
                    </Text>
                </FormControl>
            </form>
        </Flex >
    </Flex>

}

export { Login };