import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { BackAnime } from "./BackAnime";
import { useToast } from '@chakra-ui/react'
// import style from '../Log_in/login.module.css'
import { Flex, Box, FormControl, Heading, Input, FormLabel, ScaleFade, transition,Text,Link } from "@chakra-ui/react"
import { useSelector } from "react-redux";



const Login = () => {
    const toast = useToast()
    const [list,setList]=useState([])

    function getList(e){
        const {name,value}=e;
        setList({...list,[name]:value})
        console.log(list)
    }
 
    const data = useSelector((payload) => {
        return payload.SignupReducer
    })
    // console.log(data.UserData[0].email)
    // console.log(data.UserData[0].password)
    // const email=data.UserData[0].email
    // const password=data.UserData[0].password


    const navigate = useNavigate();
    function loginUser(e) {
        e.preventDefault()
        // console.log(list.email)
        // if(email==list.email && password==list.password){
        //     toast({
        //         title: 'Login Successful',
        //         description: "redirected to Home in 2 second",
        //         status: 'success',
        //         duration: 3000,
        //         isClosable: true,
        //         position: 'top',
        //     })
        //     setTimeout(()=>{

                navigate("/");
        //     },2000)
        // }else{
        //     toast({
        //         title: 'Login Error',
        //         description: "Email or Password may be wrong",
        //         status: 'error',
        //         duration: 3000,
        //         isClosable: true,
        //         position: 'top',
        //     })
        // }
    }


    return <Flex
        w="1fr"
        h="100vh"
        bg="#1f2120"
        justify="center"
        alignItems="center"
        boxSizing="boderBox"
    >
        {/* --------------backAnimation--------------- */}
        <BackAnime/>
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
                        Sign In
                    </Heading>
                    <FormLabel fontSize="0.875rem"
                        textAlign="left"
                        mt="40px"
                    >
                        What's your email
                    </FormLabel>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email."
                        border="1px solid white"
                        _placeholder={{ color: "white" }}
                        _focus={{ border: "2px solid white" }}
                        onChange={(e)=>{getList(e.target)}}
                    />
                    <FormLabel fontSize="0.875rem"
                        textAlign="left"
                        mt="20px"
                    >
                        What's your password
                    </FormLabel>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        border="1px solid white"
                        _placeholder={{ color: "white" }}
                        _focus={{ border: "2px solid white" }}
                        minLength={6}
                        onChange={(e)=>{getList(e.target)}}
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